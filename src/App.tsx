import React from 'react'

const App = () => {
  return (
   <div>
    {/* COLORS  */}
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

    {/* CUSTOMIZATION  */}
   <hr />
   <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello long sentences</p>
   <p>Hello long sentences</p>
   <p>Another long sentences</p>
   <p className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl">Lorem ipsum dolor sit amet.</p>

    {/* TYPOGRAPHY */}
   <hr />
    <h1 className="text-9xl italic underline decoration-red-500 decoration-dotted decoration-4 underline-offset-8">Title 1</h1>
    <h2 className="text-2xl overline decoration-green-500 decoration-solid decoration-2 uppercase">title 2</h2>
    <h3 className="text-xl line-through decoration-blue-500 decoration-double decoration-1 lowercase">Title 3</h3>
    <p className="text-base leading-normal underline decoration-yellow-500 decoration-wavy decoration-1 underline-offset-8 capitalize">a regular paragraph</p>
    <p className="text-sm">A description paragraph</p>
    <p className="text-xs note">A little note</p>

    <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis! Nihil, dolores ratione ab aut veritatis vitae nulla itaque voluptatum?</p>
    <p className="break-words">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magni itaque aliquid deserunt a consequatur aliquam reiciendis. Repudiandae, temporibus dolor!</p>
    <p className="break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt qui ipsam. Laboriosam at quidem fugit pariatur provident veritatis sint.</p>
   </div>
  )
}

export default App

// text-3xl font-bold underline