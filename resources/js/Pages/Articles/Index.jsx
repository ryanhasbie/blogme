import React from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import Header from '@/Components/Header'
import Container from '@/Components/Container'
import ArticleBlock from '@/Components/ArticleBlock'
import Grid from '@/Components/Grid'
import Pagination from '@/Components/Pagination'

export default function Index({category, ...props}) {
    const {data: articles, meta,  links} = props.articles
    return (
        <>
            <Head title="The Articles"/>
            <Header>
                <Header.Title>The Articles</Header.Title>
                <Header.Subtitle>
                    if you needs, plese get read!
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

Index.layout = page => <App children={page}/>
