import React from 'react'

const Navbar = () => {
  return (
    <div className=" w-full mx-auto shadow-lg rounded-lg">
    <div className="bg-blue-300 px-5 py-5 flex justify-between items-center border-b-2">
      <div className="font-serif font-medium text-2xl tracking-normal hover:underline hover:uppercase">Chat App</div>
      <div className="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search message"
          className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div
        className="h-12 w-12 p-2 bg-red-400 rounded-full text-white font-semibold flex items-center justify-center"
      >
        NA
      </div>
    </div>
    </div>
  )
}

export default Navbar