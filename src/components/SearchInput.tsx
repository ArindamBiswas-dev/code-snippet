import React from 'react'

export const SearchInput = () => {
  return (
    <div className="w-full flex">
      <input
        type="text"
        className="bg-gray-700 border 
      border-gray-500 rounded-md w-full max-w-5xl
        text-sm md:text-xl px-4 py-3
      focus:border-green-300 outline-none mx-auto"
        placeholder="Search here..."
      />
    </div>
  )
}
