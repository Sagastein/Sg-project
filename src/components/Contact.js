import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='h-sreen'>
      <h1 className='text-center text-7xl py-2'>Contact</h1>
      <div className='flex justify-center items-center'>
          <form action="/" className='m-10'>
               <div className='flex flex-col'>
                    <label htmlFor="fullname">Full Name</label>
                    <input className='border p-2 my-1' type="text" name='fullname'/>
               </div>
               <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className='border p-2 my-1' type="email" name="email" id="email"/>
               </div>
               <div className='flex flex-col w-full'>
                    <label htmlFor="message">Message</label>
                    <textarea cols="40" className='border p-2 my-1' type="text"></textarea>
               </div>
               <div className='m-2 rounded-md'>
                    <button className='bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 duration-300 rounded-md p-2 border-2 w-full' type="submit">Send</button>
               </div>
          </form>
      </div>
    </div>
  )
}

export default Contact