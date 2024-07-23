import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from './TaskProvider'

const AddTaskForm = ({showAddForm, setShowAddForm}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const {task, setTask} = useContext(TaskContext)

  const [showForm, setShowForm] = useState(showAddForm)
    
    useEffect(() =>
    {
        setShowForm(showAddForm)
    }, [showAddForm])

  const handlerTitle = (e) => {
    setTitle(e.target.value)
  }

  const handlerDescription = (e) => {
    setDescription(e.target.value)
  }

  const addTask = () => {
    const objTask = {
      title: title,
      description: description,
      isDone: false
    }

    const newTask = [...task, objTask]

    setTask(newTask)
    setShowAddForm(false)
  }

  const hideForm = () => setShowAddForm(false)

  return (
    <>
      {showForm && 
          <div className='PopUp'>
              <div className='TaskFormContainer'>
                  <input className='inputTaskTitle' type="text" onChange={handlerTitle} value={title} placeholder='Titulo'/>
                  <textarea className='TextAreaTaskDescription' type="text" onChange={handlerDescription} value={description} placeholder='Descripcion'/>
                  <div className='TaskForm-buttonsList'>
                      <button className='buttonSend' onClick={addTask}>Agregar</button>
                      <button className='buttonCamcel' onClick={hideForm}>Cancelar</button>
                  </div>
              </div>
          </div>
      }
    </>
  )
}

export default AddTaskForm