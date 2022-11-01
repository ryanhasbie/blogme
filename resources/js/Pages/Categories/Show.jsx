import React from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import Header from '@/Components/Header'

export default function Show({category}) {
    return (
        <>
            <Head title={category.name}/>
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page can show you more beautifull articles about {category.name}.
                </Header.Subtitle>
            </Header>
        </>
    )
}

Show.layout = page => <App children={page}/>
