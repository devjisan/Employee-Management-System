import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
function Header() {
  const {setIsLogin, employee} = useContext(AuthContext)
  const logOut = () =>{
    setIsLogin(false)
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>{employee.firstName} 👋</span>  </h1>
        <button onClick={()=>logOut()} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header