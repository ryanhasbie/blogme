import React from 'react'
import App from '@/Layouts/App'
import Container from '@/Components/Container'
import { Link } from '@inertiajs/inertia-react'
import Pagination from '@/Components/Pagination'
import Table from '@/Components/Table'

export default function ArticleTable(props) {
    const {data: articles, meta, links} = props.articles
    return (
        <Container>
            <Table>
                <Table.Thead>
                    <tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Tags</Table.Th>
                        <th></th>
                    </tr>
                </Table.Thead>
                <Table.Tbody>
                    {articles.length ?
                        articles.map((article, i) => (
                            <tr key={article.id}>
                                <Table.Td>{meta.from + i}</Table.Td>
                                <Table.Td><Link href={article.url}>{article.title}</Link></Table.Td>
                                <Table.Td><Link href={article.category.url}>{article.category.name}</Link></Table.Td>
                                <Table.Td>
                                    {article.tags.map((tag, i) => (
                                        <Link key={i} href={tag.url}>{tag.name}</Link>
                                    ))}
                                </Table.Td>
                                <td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem className='hover:bg-green-50 hover:text-green-500'href={route('articles.show', article.slug)}>View</Table.DropdownItem>
                                        <Table.DropdownItem className='hover:bg-yellow-50 hover:text-yellow-500' href={route('articles.edit', article.slug)}>Edit</Table.DropdownItem>
                                        <Table.DropdownItem className='hover:bg-rose-50 hover:text-rose-500' href={'#'}>Delete</Table.DropdownItem>
                                    </Table.Dropdown>
                                </td>
                            </tr>
                        ))
                    : <p>No articles yet.</p>
                    }
                </Table.Tbody>
            </Table>
            <Pagination {...{meta, links}}/>
        </Container>
    )
}

ArticleTable.layout = page => <App children={page}/>
