import React from 'react'

const App = () => {
  return (
   <div>
    <h1 className="text-3xl font-bold underline">
    Hello, World!
   </h1>
    <h1 className="bg-green-600 text-white border-4 border-red-600">
    Hello, World!
   </h1>
   <h1 className="text-yellow-600">
    Hello, World!
   </h1>
   <h1 className="text-932">
    Hello, World!
   </h1>
   <h1 className="text-100">
    Hello, World!
   </h1>

   <hr />
   <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello long sentences</p>
   <p>Hello long sentences</p>
   <p>Another long sentences</p>
   <p className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl">Lorem ipsum dolor sit amet.</p>
   </div>
  )
}

export default App

// text-3xl font-bold underline