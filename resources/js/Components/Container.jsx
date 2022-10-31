import React from 'react'

export default function Container({children}) {
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-10 col-start-2">
                {children}
            </div>
        </div>
    )
}
