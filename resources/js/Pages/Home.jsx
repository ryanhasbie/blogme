import React from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import Container from '@/Components/Container'
import Header from '@/Components/Header'
import Grid from '@/Components/Grid'
import ArticleBlock from '@/Components/ArticleBlock'

export default function Home({articles}) {
    return (
        <div>
            <Head title="Blogme"/>
            <Header>
                <Header.Title>
                    Hi, Dear! Welcome to Myblog
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur et quaerat aliquid facilis mollitia quasi velit asperiores cumque eius incidunt.
                </Header.Content>
            </Header>
            <Container>
                {articles.length ? <Grid>
                    {articles.map((article) => (
                        <ArticleBlock article={article} key={article.slug}/> 
                    ))}
                </Grid>
                :
                <p>No aticles yet.</p>
                }
            </Container>
        </div>
    )
}

Home.layout = page => <App children={page} />
