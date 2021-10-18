export const Filter = () => {
  return (
    <div className="md:w-80">
      <div className="p-4 rounded-md bg-gray-800 text-gray-50">
        <h3 className="text-lg font-medium">ALL SNIPPETS</h3>
        <div className="flex justify-between mt-3 text-lg">
          <p>Total</p>
          <p>10</p>
        </div>
        <hr className="mt-5 border-gray-500 mb-2" />
        <h3 className="mt-5 text-lg">Filter by Tags</h3>
        <div className="max-h-64 overflow-y-scroll py-4 flex flex-col">
          <p className="hover:text-green-300 cursor-pointer py-1">React</p>
          <p className="hover:text-green-300 cursor-pointer py-1">React</p>
          <p className="hover:text-green-300 cursor-pointer py-1">React</p>
        </div>
        <button className="border border-gray-400 px-5 py-2 rounded-md w-full mt-5">
          Clear Filter
        </button>
      </div>
    </div>
  )
}
