import React from 'react'

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute inset-0 flex flex-col justify-center items-start p-6 text-white z-10'>

      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg  w-1/2'>{overview}</p>
      <div className="pt-36">
        <button className='bg-gray-400 text-black p-4 px-10 text-center rounded-lg hover:bg-amber-400'>Play</button>
        <button>More info</button>
      </div>
    </div>
  )
}
