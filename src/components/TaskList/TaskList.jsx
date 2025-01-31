import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList() {
  return (
    <div id='tasklist' className=' h-[50%] overflow-auto w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/>
    </div>
  )
}

export default TaskList