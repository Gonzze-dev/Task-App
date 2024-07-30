import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'
import {sendError} from '../../utilities/sendError'




const AddTaskForm = ({showAddForm, setShowAddForm}) => {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errorInput, setErrorInput] = useState('')
  const [errorTextArea, setErrorTextArea] = useState('')
  
  const {task, setTask} = useContext(TaskContext)

  const [showForm, setShowForm] = useState(showAddForm)

  const listErrorInput = [{
    condition: title == '',
    message: 'error, el campo "titulo" no puede estar vacio',
    setFunction: setErrorInput
  },
  {
    condition: description == '',
    message: 'error, el campo "descripcion" no puede estar vacio',
    setFunction: setErrorTextArea
  }]

  useEffect(() =>
  {
      setShowForm(showAddForm)
  }, [showAddForm])

  

  const handlerTitle = (e) => {
    setTitle(e.target.value)
    setErrorInput('')
  }

  const handlerDescription = (e) => {
    setDescription(e.target.value)
    setErrorTextArea('')
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

    const haveError = sendError(listErrorInput)

    if(!haveError)
    {
      setTask(newTask)
      setShowAddForm(false)
    }
  }

  const hideForm = () => {
    setShowAddForm(false)

    setErrorInput('')
    setErrorTextArea('')
    setTitle('')
    setDescription('')
  }

  return (
    <>
      {showForm && 
          <div className='PopUp'>
              <div className={`TaskFormContainer${colorMode}`}>
                  <Input className={`inputTaskTitle${colorMode}`} type="text" onChange={handlerTitle} value={title} placeholder='Titulo'/>
                  {errorInput && <span>{errorInput}</span>}
                  <TextArea className={`TextAreaTaskDescription${colorMode}`} type="text" onChange={handlerDescription} value={description} placeholder='Descripcion'/>
                  {errorTextArea && <span>{errorTextArea}</span>}
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