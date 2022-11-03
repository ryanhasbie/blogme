import React from 'react'

export default function Error({value, children}) {
    return (
        <div className='mt-2 text-rose-500 font-medium'>
            {value ? value : children}
        </div>
    )
}

