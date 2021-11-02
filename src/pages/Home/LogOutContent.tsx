import { VscBracketDot } from 'react-icons/vsc'

export const LogOutContent = () => {
  const GITHUB_CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
  const PATH = import.meta.env.VITE_PATH

  const URI = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}?path=${PATH}&scope=user:email`

  const githubLogIn = () => {
    console.log(URI)
    window.location.href = URI
  }

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
        className="mt-10 md:mt-16 bg-green-500 w-60 h-16 md:w-80 md:h-20 rounded-full text-2xl font-semibold"
        onClick={githubLogIn}
      >
        Get Started
      </button>
    </main>
  )
}
