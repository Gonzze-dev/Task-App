import React, { useContext, useRef, useState } from 'react'
import './AddTaskButton.css'

import { TaskContext } from './TaskProvider'
import AddTaskForm from './AddTaskForm'

const AddTaskButton = () => {
  const {task, setTask} = useContext(TaskContext)

  const [showForm, setShowForm] = useState(false)
  
  const buttonStyle = task.length == 0 ? {height : '100%' } : {height : '58px' }

  const handlerShowForm = () => {
    setShowForm(true)
  }

  return (
    <>
      <div className='AddTaskButton' style={buttonStyle} onClick={handlerShowForm}>
        <p>+</p>
      </div>

      <AddTaskForm showAddForm={showForm} setShowAddForm={setShowForm}/>
      
    </>
    
    
  )
}

export default AddTaskButton