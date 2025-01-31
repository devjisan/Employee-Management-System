import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function TaskListNumber() {
    const {employee} = useContext(AuthContext)
    console.log(employee.taskNumbers)
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w[45%] py-6 px-9  bg-red-400'>
            <h2 className='text-3xl font-semibold'>{employee.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>   
        <div className='rounded-xl w[45%] py-6 px-9  bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{employee.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div> 
        <div className='rounded-xl w[45%] py-6 px-9  bg-green-400'>
            <h2 className='text-3xl font-semibold'>{employee.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div> 
        <div className='rounded-xl w[45%] py-6 px-9  bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{employee.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div> 
    </div>
  )
}

export default TaskListNumber