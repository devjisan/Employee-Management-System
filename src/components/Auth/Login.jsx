import React from 'react'
import { useState } from 'react'

function Login() {

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log('Email is' , email)
        console.log('Password is', password)
        setEmail('')
        setPassword('')
        
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>submitHandler(e)}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required className=' outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-xl rounded-full placeholder:text-gray-400 mt-5' type="password" placeholder='Enter your password' />
                <button className='text-white outline-none   bg-emerald-600 py-2 px-8 text-xl rounded-full placeholder:text-white mt-5 hover:bg-emerald-700 font-semibold border-none w-full '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login