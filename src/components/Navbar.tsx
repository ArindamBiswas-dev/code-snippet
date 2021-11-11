import axios from 'axios'
import { useState } from 'react'
import { VscBracketDot, VscClose, VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { setUserId } from '../features/userSlice'

export const Navbar = () => {
  const userId = useAppSelector(state => state.user.id)
  const dispatch = useAppDispatch()
  const [show, setShow] = useState(false)

  const GITHUB_CLIENT_ID = import.meta.env.VITE_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
  const PATH = import.meta.env.VITE_PATH

  const URI = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}?path=${PATH}&scope=user:email`

  const logout = async () => {
    dispatch(setUserId(''))

    axios
      .get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        console.log('logged out')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const githubLogIn = () => {
    console.log(URI)
    window.location.href = URI
  }

  return (
    <nav className="py-4 flex items-center sticky top-0 bg-gray-900 z-50">
      <Link to="/">
        <div className="flex align-center items-center">
          <VscBracketDot className="text-3xl md:text-5xl text-green-300" />
          <h2 className="pl-2 text-xl md:text-3xl">CodeSnippet</h2>
        </div>
      </Link>
      <ul className="ml-auto gap-5 hidden md:flex text-lg">
        {userId ? (
          <>
            <li
              className="px-4 py-2 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="px-4 py-2 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
            >
              <Link to="/snippets">Snippets</Link>
            </li>
            <li
              className="px-4 py-2 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
            >
              <Link to="/add">Add</Link>
            </li>
            <li
              className="px-4 py-2 rounded-md bg-red-500 
              cursor-pointer 
              transition-all duration-300 ease-in-out"
            >
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <li
            className="px-4 py-2 rounded-md bg-green-500
              cursor-pointer 
              transition-all duration-300 ease-in-out"
            onClick={githubLogIn}
          >
            Log In with Github
          </li>
        )}
      </ul>
      {userId ? (
        <>
          <ul className="ml-auto gap-5 md:hidden text-lg">
            <button
              className="bg-gray-800 px-3 py-2 rounded-md"
              onClick={() => setShow(!show)}
            >
              <VscMenu className="text-2xl" />
            </button>
          </ul>
          <div
            className={`fixed top-0
      bg-gray-900 h-screen pt-4 pl-4 
      ${
        !show ? `-right-96 w-0` : 'right-0 w-full'
      } transition-all duration-300 ease-in`}
          >
            <button
              className="bg-red-500 px-2 py-2 rounded-md ml-4 mt-4"
              onClick={() => setShow(!show)}
            >
              <VscClose className="text-2xl" />
            </button>
            <ul className="pr-4 mt-5">
              <li
                className="px-4 py-4 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
              >
                Home
              </li>
              <li
                className="px-4 py-4 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
              >
                Snippets
              </li>
              <li
                className="px-4 py-4 rounded-md hover:bg-gray-700 
            hover:text-green-300 cursor-pointer 
            transition-all duration-300 ease-in-out"
              >
                Add
              </li>
              <li
                className="px-4 py-2 rounded-md bg-red-500 
              cursor-pointer 
              transition-all duration-300 ease-in-out"
              >
                <button onClick={logout}>Log Out</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <button
          className="ml-auto px-4 py-2 md:hidden rounded-md bg-green-500
          cursor-pointer 
          transition-all duration-300 ease-in-out text-sm"
          onClick={githubLogIn}
        >
          Log In with Github
        </button>
      )}
    </nav>
  )
}
