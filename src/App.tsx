import React from "react";

const App = () => {
  return (
    <div>
      {/* COLORS  */}
      {/* <h1 className="text-3xl font-bold underline">
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
   </h1> */}

      {/* CUSTOMIZATION  */}
      <hr />
      {/* <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello long sentences</p>
   <p>Hello long sentences</p>
   <p>Another long sentences</p>
   <p className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl">Lorem ipsum dolor sit amet.</p> */}

      {/* TYPOGRAPHY */}
      <hr />
      {/* <h1 className="text-9xl italic underline decoration-red-500 decoration-dotted decoration-4 underline-offset-8">Title 1</h1>
    <h2 className="text-2xl overline decoration-green-500 decoration-solid decoration-2 uppercase">title 2</h2>
    <h3 className="text-xl line-through decoration-blue-500 decoration-double decoration-1 lowercase">Title 3</h3>
    <p className="text-base leading-normal underline decoration-yellow-500 decoration-wavy decoration-1 underline-offset-8 capitalize">a regular paragraph</p>
    <p className="text-sm">A description paragraph</p>
    <p className="text-xs note">A little note</p>
    <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis! Nihil, dolores ratione ab aut veritatis vitae nulla itaque voluptatum?</p>
    <p className="break-words">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magni itaque aliquid deserunt a consequatur aliquam reiciendis. Repudiandae, temporibus dolor!</p>
    <p className="break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia incidunt qui ipsam. Laboriosam at quidem fugit pariatur provident veritatis sint.</p> */}

      {/* space-size */}
      <hr />
      <div>
        <div className="bg-red-500 text-white font-bold p-4 m-4">hello</div>
        <div>
          <div className="w-24 bg-blue-500 p-2 m-4 rounded">w-24</div>
          <div className="w-32 bg-blue-500 p-2 m-4 rounded">w-32</div>
          <div className="w-40 bg-blue-500 p-2 m-4 rounded">w-40</div>
          <div className="w-48 bg-blue-500 p-2 m-4 rounded">w-48</div>
          <div className="w-64 bg-blue-500 p-2 m-4 rounded">w-64</div>
          <div className="w-80 bg-blue-500 p-2 m-4 rounded">w-80</div>
          <div className="w-96 bg-blue-500 p-2 m-4 rounded">w-96</div>
        </div>

        <div className="flex m-4">
          <div className="w-1/2 h-10 bg-red-500 mr-4 rounded">1/2</div>
          <div className="w-1/2 h-10 bg-blue-500 rounded">1/2</div>
        </div>
        <div className="flex m-4">
          <div className="w-2/5 h-10 bg-red-500 rounded p-2 mr-4">2/5</div>
          <div className="w-3/5 h-10 bg-blue-500 rounded p-2">3/5</div>
        </div>
        <div className="flex m-4">
          <div className="w-1/3 h-10 bg-red-500 rounded p-2 mr-4">1/3</div>
          <div className="w-2/3 h-10 bg-blue-500 rounded p-2">2/3</div>
        </div>
        <div className="flex m-4">
          <div className="w-1/4 h-10 bg-red-500 rounded p-2 mr-4">1/4</div>
          <div className="w-3/4 h-10 bg-blue-500 rounded p-2">3/4</div>
        </div>
        <div className="flex m-4">
          <div className="w-1/5 h-10 bg-red-500 rounded p-2 mr-4">1/5</div>
          <div className="w-4/5 h-10 bg-blue-500 rounded p-2">4/5</div>
        </div>
        <div className="flex m-4">
          <div className="w-1/6 h-10 bg-red-500 rounded p-2 mr-4">1/6</div>
          <div className="w-5/6 h-10 bg-blue-500 rounded p-2">5/6</div>
        </div>
        <div className="m-4">
          <div className="w-full h-10 bg-blue-500 rounded p-2">w-full</div>
        </div>

        <div className="flex">
          <div className="h-96 w-14 bg-blue-500 p-2 m-4 rounded">h-96</div>
          <div className="h-80 w-14 bg-blue-500 p-2 m-4 rounded">h-80</div>
          <div className="h-64 w-14 bg-blue-500 p-2 m-4 rounded">h-64</div>
          <div className="h-48 w-14 bg-blue-500 p-2 m-4 rounded">h-48</div>
          <div className="h-40 w-14 bg-blue-500 p-2 m-4 rounded">h-40</div>
          <div className="h-32 w-14 bg-blue-500 p-2 m-4 rounded">h-32</div>
          <div className="h-24 w-14 bg-blue-500 p-2 m-4 rounded">h-24</div>
        </div>
      </div>
    </div>
  );
};

export default App;

// text-3xl font-bold underline
