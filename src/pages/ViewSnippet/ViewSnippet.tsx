import Editor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { IoCopyOutline } from 'react-icons/io5'
import { GoThumbsup } from 'react-icons/go'
import { useAppSelector } from '../../app/hook'
import { useEffect, useState } from 'react'

export const ViewSnippet = () => {
  // const markdown = useAppSelector(state => state.addSnippet.documentation)
  // const code = useAppSelector(state => state.addSnippet.code)

  const markdown = ``
  const code = ``

  const [copied, setCopied] = useState(false)
  let timerId: number = -1

  useEffect(() => {
    return () => {
      console.log('SnippetCard unmounted')
      if (timerId !== -1) clearTimeout(timerId)
    }
  }, [])

  const copyCode = () => {
    // copy code
    navigator.clipboard.writeText(code)
    setCopied(true)

    timerId = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl space-y-3">
        <h1 className="text-3xl font-semibold">This is heading</h1>
        <div className="flex space-x-2 pt-5">
          <p className="px-2 py-1 bg-purple-500 rounded-md">#react</p>
          <p className="px-2 py-1 bg-green-500 rounded-md">#vue</p>
          <p className="px-2 py-1 bg-yellow-500 rounded-md">#js</p>
        </div>
        <p className="text-xl italic pt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mdx">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="pt-10 flex justify-end">
          <button
            className="bg-blue-500 p-3 rounded-md text-white text-xl"
            onClick={copyCode}
          >
            {copied ? <GoThumbsup /> : <IoCopyOutline />}
          </button>
        </div>
        <div className="pt-3">
          <Editor
            height="300px"
            defaultLanguage="javascript"
            theme="vs-dark"
            className="rounded-lg"
            value={code}
          />
        </div>
      </div>
    </div>
  )
}
