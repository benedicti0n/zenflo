'use client'

import { useState } from 'react'

import Editor from '@/components/editor/editor'

export const defaultValue = {
    type: 'doc',
    content: [
        {
            type: 'paragraph',
            content: []
        }
    ]
}

export default function ContentForm() {
    const [content, setContent] = useState<string>('')

    return (
        <div className='mt-6 flex max-w-2xl flex-col gap-4'>
            <Editor initialValue={defaultValue} onChange={setContent} />
        </div>
    )
}