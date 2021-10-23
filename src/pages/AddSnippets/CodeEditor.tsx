import Editor from '@monaco-editor/react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { onChangeHandler } from '../../features/addSnippetSlice'

type CodeEditorPropsType = {
  lang: string
}

export const CodeEditor = ({ lang }: CodeEditorPropsType) => {
  const value = useAppSelector(state => state.addSnippet.code)
  const dispatch = useAppDispatch()

  function handleEditorChange(value?: string) {
    console.log(value)

    dispatch(onChangeHandler({ type: 'code', value: value }))
  }

  return (
    <div>
      <Editor
        height="500px"
        defaultLanguage="javascript"
        language={lang}
        theme="vs-dark"
        className="rounded-lg"
        onChange={handleEditorChange}
        value={value}
      />
    </div>
  )
}
