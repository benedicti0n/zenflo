'use client'

import { useState } from 'react'
import { convertHtmlToNotionBlock } from '../utils/HTMLtoNotionBlocks'
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

    const sendData = () => {
        const htmlString: string = content.toString()
        const notionBlock = convertHtmlToNotionBlock(htmlString)
        console.log(notionBlock);
    }

    return (
        <div className='mt-6 flex max-w-2xl flex-col gap-4'>
            <Editor initialValue={defaultValue} onChange={setContent} />
            <button onClick={sendData}>Click me</button>
        </div>
    )
}