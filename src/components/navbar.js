import React from 'react'
import { useState } from "react"

function Navbar() {
     const[is,setIS] = useState(true);
  return (
    <header className='bg-white sticky top-0  shadow-lg pb-4'>
     
   
    {is?(
     <div className="relative flex justify-between items-center bg-gradient-to-r from-cyan-400 to-blue-500 px-4 h-2 pb-4 p-4">
           <div className='text-white tracking-widest'>
    Give a gift. Change a life
    </div>
    <div className='text-4xl rounded-sm text-white cursor-pointer hover:text-blue-200 duration-200'><span onClick={()=>setIS(false)}>&times;</span></div>
          </div>



    ):null}
    

     <nav className='flex flex-col md:flex-row mx-8 z-10  items-center h-sreen md:h-16 justify-between'>
          <div className=' inline capitalize text-3xl text-blue-600'>
               help children
          </div>
          <div className='flex flex-col md:flex-row'>
          <ul className='flex flex-col md:flex-row font-medium transition-all duration-500  items-center gap-12 mr-12'>
               <li className='hover:underline hover:text-blue-700 underline-offset-4'><a href="/">Home</a></li>
               <li className='hover:underline hover:text-blue-700 underline-offset-4'><a href="#about">About</a></li>
               <li className='hover:underline hover:text-blue-700 underline-offset-4'><a href="/">Project</a></li>
               <li className='hover:underline hover:text-blue-700 underline-offset-4'><a href="#contact">Contact</a></li>
          </ul>
          <button className='
          border hover:outline-solid
           bg-blue-600 px-8 py-2 rounded-md text-white outline-4
            ring-offset-blue-600
            hover:text-blue-600 hover:bg-transparent transition-all duration-500'>Donate</button>
          </div>
     </nav>
    </header>

  )
}

export default Navbar