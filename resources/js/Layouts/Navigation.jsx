import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import ResponsiveNavigation from '@/Layouts/ResponsiveNavigation';
import { usePage } from '@inertiajs/inertia-react';

export default function Navbar() {
    const {auth}  = usePage().props
    return (
        <>
            <ResponsiveNavigation />
            <nav className="hidden border-b border-dashed border-gray-700 bg-gray-800 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl px-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href={route('home')}
                            className="mr-3 text-lg font-semibold capitalize text-white"
                        >
                            Inertia
                        </Link>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className="flex items-center">
                                {auth.user ? <div className="flex items-center">
                                    <DropdownMenu label={auth.user.name}>
                                        <DropdownMenu.Link
                                            href={route('dashboard')}
                                        >
                                            Dashboard
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            My profile
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            Settings
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            New article
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            My articles
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link href={'#'}>
                                            New article
                                        </DropdownMenu.Link>
                                        <DropdownMenu.Link
                                            href={route('logout')}
                                            method="POST"
                                            as="button"
                                        >
                                            Logout
                                        </DropdownMenu.Link>
                                    </DropdownMenu>
                                </div>
                                :
                                <div className="flex items-center">
                                    <NavLink href={route('login')}>
                                        Login
                                    </NavLink>
                                    <NavLink href={route('register')}>
                                        Register
                                    </NavLink>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}