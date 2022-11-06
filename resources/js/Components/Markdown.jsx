import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import DOMPurify from 'isomorphic-dompurify';

export default function Markdown({children}) {
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return (
        <div className='prose max-w-none' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(children)}}/>
    )
}
