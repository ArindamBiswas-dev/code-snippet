import Editor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useAppSelector } from '../../app/hook'

export const ViewSnippet = () => {
  // const markdown = useAppSelector(state => state.addSnippet.documentation)
  // const code = useAppSelector(state => state.addSnippet.code)

  const markdown = ``
  const code = ``

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
        <div className="pt-10">
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
