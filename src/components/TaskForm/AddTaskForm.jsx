import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'

const AddTaskForm = ({showAddForm, setShowAddForm}) => {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
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
    const id = task.length + 1
    const objTask = {
      id: id,
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
              <div className={`TaskFormContainer${colorMode}`}>
                  <Input className={`inputTaskTitle${colorMode}`} type="text" onChange={handlerTitle} value={title} placeholder='Titulo'/>
                  <TextArea className={`TextAreaTaskDescription${colorMode}`} type="text" onChange={handlerDescription} value={description} placeholder='Descripcion'/>
                  <div className='TaskForm-buttonsList'>
                      <button className={`buttonSend${colorMode}`} onClick={addTask}>Agregar</button>
                      <button className={`buttonCancel${colorMode}`} onClick={hideForm}>Cancelar</button>
                  </div>
              </div>
          </div>
      }
    </>
  )
}

export default AddTaskForm