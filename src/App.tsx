import React from "react";

const App = () => {
  return (
    <div className="h-full text-white Parent bg-slate-900">
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
      {/* <hr /> */}
      {/* <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello long sentences</p>
   <p>Hello long sentences</p>
   <p>Another long sentences</p>
   <p className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl">Lorem ipsum dolor sit amet.</p> */}

      {/* TYPOGRAPHY */}
      {/* <hr /> */}
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
      {/* <hr /> */}
      {/* <div>
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
      </div> */}

      {/* flex  */}
      {/* <div className="Parent">
        <div>Header</div>
        <div className="flex items-center justify-evenly">
            <div>Sidebar</div>
            <div>
              <div>Main Content</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iusto.</p>
            </div>
            <div>Another sidebar</div>
          </div>

        <div className="flex flex-row">
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">01</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">02</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">01</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">02</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-col mb-10">
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">01</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">02</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-col-reverse">
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">01</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">02</div>
          <div className="bg-pink-500 h-10 w-10 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-nowrap mt-10">
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">01</div>
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">02</div>
          <div className="basis-1/2 bg-pink-500 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-wrap mt-10">
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">01</div>
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">02</div>
          <div className="basis-1/2 bg-pink-500 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex flex-wrap-reverse mt-10">
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">01</div>
          <div className="basis-1/4 bg-pink-500 p-2 m-2 rounded">02</div>
          <div className="basis-1/2 bg-pink-500 p-2 m-2 rounded">03</div>
        </div>

        <div className="flex items-baseline mt-10">
          <div className="bg-pink-500 m-2 pt-2 pb-6 px-4 rounded">01</div>
          <div className="bg-pink-500 m-2 pt-8 pb-12 px-4 rounded">02</div>
          <div className="bg-pink-500 m-2 pt-12 pb-4 px-4 rounded">03</div>
        </div>
      </div> */}

      {/* grid */}
      <hr />
      {/* <div className="h-full text-white Parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-sky-500 p-6 rounded-lg">1</div>
            <div className="bg-sky-500 p-6 rounded-lg">2</div>
            <div className="bg-sky-500 p-6 rounded-lg">3</div>
            <div className="bg-red-500 p-6 rounded-lg col-span-3">4</div>
            <div className="bg-sky-500 p-6 rounded-lg">5</div>
            <div className="bg-sky-500 p-6 rounded-lg">6</div>
          </div>

          <div className="grid grid-cols-6 gap-4 mb-4 ">
            <div className="p-6 rounded-lg col-start-2 col-span-4 bg-sky-500">01</div>
            <div className="p-6 rounded-lg col-start-1 col-end-3 bg-sky-500">02</div>
            <div className="p-6 rounded-lg col-end-7 col-span-2 bg-sky-500">03</div>
            <div className="p-6 rounded-lg col-start-1 col-end-7 bg-sky-500">04</div>
          </div> 

          <div className="grid grid-flow-col auto-cols-max gap-4 mb-4">
            <div className="p-6 rounded-lg bg-sky-500">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
          </div>

          <div className="grid grid-rows-4 grid-flow-col gap-4 mb-4">
            <div className="p-6 rounded-lg bg-sky-500">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>   
            <div className="p-6 rounded-lg bg-sky-500">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
            <div className="p-6 rounded-lg bg-sky-500">07</div>
            <div className="p-6 rounded-lg bg-sky-500">08</div>
            <div className="p-6 rounded-lg bg-sky-500">09</div>
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-4 mb-4">
            <div className="row-span-3 p-6 rounded-lg bg-sky-500">01</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
            <div className="row-span-2 col-span-2 p-6 rounded-lg bg-sky-500">03</div>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500">05</div>
          </div>
        </div>
      </div> */}

      {/* layout  */}
      <hr />
      <div className="container px-2">
        <img className="w-64 float-left" src="https://images.unsplash.com/photo-1725308468426-9b5e227dc15c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className="w-32 float-right" src="https://images.unsplash.com/photo-1725308468426-9b5e227dc15c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Hello</h1>
        <p className="clear-both">Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugiat!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam velit facilis quis? Obcaecati, modi fuga.</p>

        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32 mb-4">
          <div className="absolute top-0 -left-2 w-24 h-24 bg-green-500 rounded-lg"></div>
        </div>

        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32 mb-4">
          <div className="absolute inset-2 w-24 h-24 bg-green-500 rounded-lg"></div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-500">01</div>
          <div className="invisible bg-blue-500">02</div>
          <div className="bg-blue-500">03</div>
        </div>
        <img className="w-64 h-64 object-center mb-4" src="https://images.unsplash.com/photo-1725308468426-9b5e227dc15c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="container flex">
        <div className="bg-red-500 z-40 p-3 rounded-full border border-white">05</div>
        <div className="bg-red-500 z-30 p-3 rounded-full border border-white">04</div>
        <div className="bg-red-500 z-20 p-3 rounded-full border border-white">03</div>
        <div className="bg-red-500 z-10 p-3 rounded-full border border-white">02</div>
        <div className="bg-red-500 z-0 p-3 rounded-full border border-white">01</div>
      </div>
    </div>
  );
};

export default App;

// text-3xl font-bold underline


