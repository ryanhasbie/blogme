import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function ArticleBlock({article}) {
    return (
        <div className="border shadow-sm rounded-lg overflow-hidden">
                {article.picture ? 
                <Link href={route('articles.show', article.slug)}><img src={article.picture} /></Link>
                : null }
                <div className="px-4 py-4">
                    {article.tags.length ? 
                    <div className="text-[10px] font-semibold tracking-tight space-x-1 mb-1">
                        {article.tags.map((tag) => (
                        <Link
                            key={tag.slug}
                            href={route('tags.show', tag.slug)}
                            className="text-white hover:bg-blue-600 bg-blue-500 transition duration-200 px-2 py-1 rounded-md"
                            >
                            {tag.name}
                        </Link>
                        ))}
                    </div> 
                    : null}
                    <Link href={route('articles.show', article.slug)}>
                        <h1 className="text-gray-800 md:line-clamp-1 text-sm font-semibold tracking-tight">
                            {article.title}
                        </h1>
                    </Link>
                    <small className="mt-2 text-xs text-gray-500 md:mt-4">
                    {article.created_at} by <Link className='underline' href={`/${article.author.username}`}>{article.author.name}</Link>
                    </small>
                </div>
        </div>
    );
}