import React from 'react'
import App from '@/Layouts/App'
import Container from '@/Components/Container'
import { Link } from '@inertiajs/inertia-react'
import Pagination from '@/Components/Pagination'

export default function ArticleTable(props) {
    const {data: articles, meta, links} = props.articles
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.length ?
                        articles.map((article, i) => (
                            <tr key={article.id}>
                                <td>{meta.from + i}</td>
                                <td><Link href={article.url}>{article.title}</Link></td>
                                <td><Link href={article.category.url}>{article.category.name}</Link></td>
                                {article.tags.map((tag, i) => (
                                    <td><Link key={i} href={tag.url}>{tag.name}</Link></td>
                                ))}
                            </tr>
                        ))
                    : <p>No articles yet.</p>
                    }
                </tbody>
            </table>
            <Pagination {...{meta, links}}/>
        </Container>
    )
}

ArticleTable.layout = page => <App children={page}/>
