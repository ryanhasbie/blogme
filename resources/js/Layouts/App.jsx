import React from 'react'
import Navigation from './Navigation'

export default function App({children}) {
    return (
        <div>
            <Navigation></Navigation>
            <div className="pt-8">
                {children}
            </div>
        </div>
    )
}
