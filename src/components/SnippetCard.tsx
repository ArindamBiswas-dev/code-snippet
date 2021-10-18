import { AiFillPushpin } from 'react-icons/ai'

type SnippetCardProps = {
  isPinned?: boolean
}

export const SnippetCard = ({ isPinned }: SnippetCardProps) => {
  return (
    <div className="p-4 rounded-md bg-gray-800 text-gray-50">
      <div className="flex justify-between">
        <h4 className="text-base md:text-lg font-medium">
          It is a dummy Heading
        </h4>
        <button
          className={`${isPinned ? `text-green-300` : ``} cursor-pointer`}
        >
          <AiFillPushpin className="text-2xl" />
        </button>
      </div>
      <div className="mt-2 italic flex gap-4 items-center">
        <div className="px-1 bg-purple-500 text-sm w-min rounded-sm">React</div>
        <div className="px-1 bg-pink-500 text-sm w-min rounded-sm">
          Typescript
        </div>
      </div>
      <p className="text-sm md:text-base mt-5 pt-2 text-gray-300 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <hr className="border-gray-600" />
      <div
        className="flex justify-end pt-4 gap-4 
            text-sm pb-2 md:text-base"
      >
        <button
          className="border px-4 py-1 rounded-md
              text-gray-300 border-gay-300"
        >
          View
        </button>
        <button
          className="border px-4 py-1 rounded-md
              text-gray-900 border-gay-300 bg-gray-300"
        >
          Copy Code
        </button>
      </div>
    </div>
  )
}
