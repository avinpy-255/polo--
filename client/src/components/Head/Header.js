import React from 'react'

const Header = () => {
  return (
    <div className='bg-lime-800' >
        <div className='flex justify-center'>
            <h1 className='font-semibold text-xl px-1 py-1 subpixel-antialiased'>
             <a className='text-lime-500 font-bold px-1 py-1 rounded-lg'>Polo</a> <a className='text-sm italic border-solid border-2 border-lime-200 rounded-lg px-1 text-lime-200'>Manage task in one place</a>
            </h1>
        </div>
    </div>
  )
}

export default Header