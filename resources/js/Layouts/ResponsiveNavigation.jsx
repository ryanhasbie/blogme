import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import DropdownMenu from '../Components/DropdownMenu';
import { usePage } from '@inertiajs/inertia-react';


export default function ResponsiveNavigation() {
    const {auth} = usePage().props
    return (
        <nav className="border-b border-gray-800 bg-gray-900 px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-semibold text-white" href="/">
                    BlogMe
                </Link>
                <DropdownMenu
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <DropdownMenu.Link href={'/'}>Home</DropdownMenu.Link>
                    <DropdownMenu.Link href={'/articles'}>
                        Articles
                    </DropdownMenu.Link>
                    {auth.user ? 
                    <>
                    <DropdownMenu.Link href={route('dashboard')}>
                        Dashboard
                    </DropdownMenu.Link>
                    <DropdownMenu.Link href={'#'}>My profile</DropdownMenu.Link>
                    <DropdownMenu.Link href={'#'}>Settings</DropdownMenu.Link>
                    <DropdownMenu.Divider/>
                    <DropdownMenu.Link href={'#'}>
                        New article
                    </DropdownMenu.Link>
                    <DropdownMenu.Link href={'#'}>
                        My articles
                    </DropdownMenu.Link>
                    <DropdownMenu.Divider/>
                    <DropdownMenu.Link
                        href={route('logout')}
                        method="POST"
                        as="button"
                    >
                        Logout
                    </DropdownMenu.Link>
                    </>
                    : 
                    <>
                    <DropdownMenu.Divider/>
                    <DropdownMenu.Link href={route('login')}>
                        Login
                    </DropdownMenu.Link>
                    <DropdownMenu.Link href={route('register')}>
                        Register
                    </DropdownMenu.Link>
                    </>
                    }
                    </DropdownMenu>
            </div>
        </nav>
    );
}