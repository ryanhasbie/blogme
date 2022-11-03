import React from 'react'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/inertia-react'
import Header from '@/Components/Header'
import Container from '@/Components/Container'
import Input from '@/Components/Input'
import InputLabel from '@/Components/InputLabel'
import InputFile from '@/Components/InputFile'
import Textarea from '@/Components/Textarea'
import Editor from '@/Components/Editor'
import PrimaryButton from '@/Components/PrimaryButton'
import Select from '@/Components/Select'
import MultipleSelect from '@/Components/MultipleSelect'
import { Inertia } from '@inertiajs/inertia'
import Error from '@/Components/Error'

export default function Create({tags, categories, errors}) {
    const {data, setData} = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]],
    })
    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.store'), {
            ...data, 
            category_id: data.category_id.id,
            tags: data.tags.map(t => t.id)
        })
    }
    return (
        <div>
            <Head title={'Create New Article'}></Head>
            <Header>
                <Header.Title>
                    {data.title || 'The title...'}
                </Header.Title>
                <Header.Subtitle>
                    {data.teaser || 'The Teaser'}
                </Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel forInput='title' value='Title' />
                        <Input name='title' id='title' onChange={onChange} value={data.title} />
                        {errors.title ? <Error value={errors.title}/> : null}
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput='teaser' value='Teaser' />
                        <Textarea name='teaser' id='teaser' onChange={onChange} value={data.teaser} />
                        {errors.teaser ? <Error value={errors.teaser}/> : null}
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput='picture' value='Picture' />
                        <InputFile name='picture' id='picture' onChange={(e) => setData('picture', e.target.files[0])} />
                        {errors.picture ? <Error value={errors.picture}/> : null}
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <div>
                                <InputLabel forInput='category_id'>Category</InputLabel>
                                <Select value={data.category_id} data={categories} onChange={(e) => setData('category_id', e)} />
                                {errors.category_id ? <Error value={errors.category_id}/> : null}
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div>
                                <InputLabel forInput='tags'>Tags</InputLabel>
                                <MultipleSelect selectedItem={data.tags} data={tags} onChange={(e) => setData('tags', e)} />
                                {errors.tags ? <Error value={errors.tags}/> : null}
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput='body' value='Body' />
                        <Editor name='body' id='body' onChange={onChange} value={data.body} />
                        {errors.body ? <Error value={errors.body}/> : null}
                    </div>
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Create.layout = page => <App children={page}/>
