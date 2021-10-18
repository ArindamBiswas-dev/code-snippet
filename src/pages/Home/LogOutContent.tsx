import { VscBracketDot } from 'react-icons/vsc'

export const LogOutContent = () => {
  return (
    <main
      className="py-5 px-2 mt-10 md:mt-16 h-full w-full 
        flex flex-col align-center items-center justify-center"
    >
      <VscBracketDot className="text-5xl md:text-6xl text-green-300" />
      <h1
        className="text-4xl md:text-6xl font-semibold mt-2 tracking-wide 
        text-gray-200"
      >
        CodeSnippet
      </h1>
      <p
        className="text-center mt-5 md:mt-10 
        text-lg md:text-2xl text-gray-400"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button
        className="mt-10 md:mt-16 bg-green-500 w-60 h-16 md:w-80 md:h-20 
            rounded-full text-2xl font-semibold"
      >
        Get Started
      </button>
    </main>
  )
}
