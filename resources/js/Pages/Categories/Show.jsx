import React from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import Header from '@/Components/Header'
import Container from '@/Components/Container'
import ArticleBlock from '@/Components/ArticleBlock'
import Grid from '@/Components/Grid'
import Pagination from '@/Components/Pagination'

export default function Show({category, ...props}) {
    const {data: articles, meta,  links} = props.articles
    return (
        <>
            <Head title={category.name}/>
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page can show you more beautifull articles about {category.name}.
                </Header.Subtitle>
            </Header>
            <Container>
                {articles.length ? 
                <>
                    <Grid>
                        {articles.map((article) => (
                            <ArticleBlock article={article} key={article.slug}/> 
                        ))}
                    </Grid>
                    <Pagination {...{meta, links}}/>
                </>
                :
                <p>No aticles yet.</p>
                }
            </Container>
        </>
    )
}

Show.layout = page => <App children={page}/>
