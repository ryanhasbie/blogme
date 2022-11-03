import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function ArticleBlock({article}) {
    return (
        <div className="border shadow-sm rounded-lg overflow-hidden">
                {article.picture ? <img src={article.picture} /> : null }
                <div className="px-4 py-6">
                    {article.tags.length ? 
                    <div className="text-xs font-medium tracking-tight space-x-1 mb-3">
                        {article.tags.map((tag) => (
                        <Link
                            key={tag.slug}
                            href="#"
                            className="text-black hover:bg-gray-200 bg-gray-100 transition duration-200 px-2 py-1 rounded-md"
                            >
                            {tag.name}
                        </Link>
                        ))}
                    </div> 
                    : null}
                    <Link href={route('articles.show', article.slug)}>
                        <h1 className="text-gray-800 md:line-clamp-2 font-semibold tracking-tight">
                            {article.title}
                        </h1>
                        <div className='!hidden md:!block'>
                            <p className="text-gray-500 mt-2 line-clamp-2 tracking-tighter">
                                {article.teaser}
                            </p>
                        </div>
                    </Link>
                    <small className="block mt-2 text-sm text-gray-500 md:mt-4">
                    {article.created_at} by {article.author.name}
                    </small>
                </div>
        </div>
    );
}