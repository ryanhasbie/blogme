import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Editor from './Editor'
import Error from './Error'
import Input from './Input'
import InputFile from './InputFile'
import InputLabel from './InputLabel'
import MultipleSelect from './MultipleSelect'
import Select from './Select'
import Textarea from './Textarea'

export default function ArticleForm({data, setData}) {
    const {errors, tags, categories, statuses, auth} = usePage().props
    const onChange = (e) => setData(e.target.name, e.target.value);
    return (
        <>
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
                    {auth.user.isAdmin ? (
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <div className="mb-6">
                                <InputLabel forInput='category_id'>Status</InputLabel>
                                <Select value={data.status} data={statuses} onChange={(e) => setData('status', e)} />
                                {errors.status ? <Error value={errors.status}/> : null}
                            </div>
                        </div>
                    </div>
                    ): null}
        </>
    )
}
