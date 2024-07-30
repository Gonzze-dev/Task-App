import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import { findById } from '../../utilities/findById'
import { findIndexById } from '../../utilities/findIndexById'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'
import {sendError} from '../../utilities/sendError'

const EditTaskForm = ({id, showEditForm, setShowEditForm}) => {
    const {task, setTask} = useContext(TaskContext)
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
    
    const findResult = findById(task, id)

    const {id: idTask,
            title: titleTask, 
            description: descriptionTask,
             isDone: isDone} = findResult

    const [title, setTitle] = useState(titleTask)
    const [description, setDescription] = useState(descriptionTask)
    
    const [errorInput, setErrorInput] = useState('')
    const [errorTextArea, setErrorTextArea] = useState('')
    const [showForm, setShowForm] = useState(showEditForm)
    

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
        setShowForm(showEditForm)
    }, [showEditForm])

    const handlerTitle = (e) => {
        setTitle(e.target.value)
        setErrorInput('')
    }

    const handlerDescription = (e) => {
        setDescription(e.target.value)
        setErrorTextArea('')
    }

    const editTask = () => {
        const objTask = {
            id: idTask,
            title: title,
            description: description,
            isDone: isDone
        }

        const newTask = [...task]
        const index = findIndexById(newTask, id);

        newTask[index] = objTask

        const haveError = sendError(listErrorInput)

        if(!haveError)
        {
            setTask(newTask)
            setShowEditForm(false)
        }
        
    }

    const hideForm = () => {
        setShowEditForm(false)
        
        setTitle(titleTask)
        setDescription(descriptionTask)
        setErrorInput('')
        setErrorTextArea('')
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
                            <button className={`buttonSend${colorMode}`} onClick={editTask}>Editar</button>
                            <button className={`buttonCancel${colorMode}`} onClick={hideForm}>Cancelar</button>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}

export default EditTaskForm