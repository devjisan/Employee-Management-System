import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard({
  isLogin
}) {
  return (
    <div className='h-screen w-full p-10 '>
        <Header isLogin= {isLogin}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard