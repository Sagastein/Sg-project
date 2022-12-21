import React from 'react'

function hero() {
  return (
    <div className='h-screen  relative bg-cover bg-no-repeat hero bg-slate-300'>
      <div>
          <div className='absolute  px-8 flex-col inset-0 flex items-center w-1/2 justify-center'>
         <p className=' py-2 font-bold text-pink-200 w-full text-center italic bg-gradient-to-r from-indigo-500 text-4xl'> Give a gift. Change a life.</p>
<p className='font-medium text-white hidden md:block p-2 tracking-wider capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' >your charitable donation HELPS CHILDREN IN POVERTY
There are many layers to poverty and many ways you can help break the barriers that
 trap children and families in its
  vicious cycle for generations.</p>
  
          </div>
      </div>
    </div>
  )
}

export default hero
