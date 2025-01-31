import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
        <h4>27 Jan 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nulla perferendis illo accusamus repellendus eius molestias, labore laboriosam dolorem at?</p>
</div> 
  )
}

export default CompleteTask