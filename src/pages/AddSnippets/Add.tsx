import { useState } from 'react'
import { CodeEditor } from './CodeEditor'
import { DocumentationEditor } from './DocumentationEditor'
import { Input } from './Input'
import { LangOption } from './LangOption'

export const Add = () => {
  const [selectedlang, setSelectedlang] = useState('javascript')

  return (
    <div>
      <h2
        className="
        text-sm md:text-lg font-medium text-gray-300 tracking-wider -mt-5"
      >
        ADD SNIPPETS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="border border-gray-400 rounded-md p-4 w-full">
          <form className="flex flex-col space-y-4">
            <Input label="Title" type="text" id="title" />
            <Input
              label="Short Description"
              type="text"
              id="shortDescription"
            />
            <Input label="Tags" type="text" id="tags">
              <p className="text-gray-400 text-sm">
                Tags should be seperated by commas
              </p>
            </Input>
            <label htmlFor="documentation">
              Documentation{' '}
              <span className="italic font-medium tracking-wider text-sm">
                (MDX Enabled)
              </span>
            </label>
            <DocumentationEditor />
          </form>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Snippet Code</p>
            <LangOption
              selectedlang={selectedlang}
              setSelectedlang={setSelectedlang}
            />
          </div>
          <div className="py-2"></div>
          <CodeEditor lang={selectedlang} />
        </div>
      </div>
      <div className="flex mt-10">
        <button
          className="p-2 w-40 h-10 bg-green-500 
        rounded-md ml-auto font-medium"
        >
          Add Snippet
        </button>
      </div>
    </div>
  )
}
