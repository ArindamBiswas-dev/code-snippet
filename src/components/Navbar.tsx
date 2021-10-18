import { useState } from 'react'
import { VscBracketDot, VscClose, VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

type NavbarProps = {
  isLoggedIn?: boolean
}

export const Navbar = ({ isLoggedIn = true }: NavbarProps) => {
  const [show, setShow] = useState(false)

  return (
    <nav className="py-4 flex items-center sticky top-0 bg-gray-900 z-50">
      <Link to="/">
        <div className="flex align-center items-center">
          <VscBracketDot className="text-3xl md:text-5xl text-green-300" />
          <h2 className="pl-2 text-xl md:text-3xl">CodeSnippet</h2>
        </div>
      </Link>
      <ul className="ml-auto gap-5 hidden md:flex text-lg">
        {isLoggedIn ? (
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
              <Link to="/logout">Log Out</Link>
            </li>
          </>
        ) : (
          <li
            className="px-4 py-2 rounded-md bg-green-500
              cursor-pointer 
              transition-all duration-300 ease-in-out"
          >
            Log In with Github
          </li>
        )}
      </ul>
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
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
