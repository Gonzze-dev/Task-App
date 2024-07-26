import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'

const EditTaskForm = ({id, showEditForm, setShowEditForm}) => {
    const {task, setTask} = useContext(TaskContext)
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
    
    const {title: titleTask, description: descriptionTask} = task[id]

    const [title, setTitle] = useState(titleTask)
    const [description, setDescription] = useState(descriptionTask)

    const [showForm, setShowForm] = useState(showEditForm)
    
    useEffect(() =>
    {
        setShowForm(showEditForm)
    }, [showEditForm])

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

        const newTask = [...task]
        newTask[id] = objTask

        setTask(newTask)
        setShowEditForm(false)
    }

    const hideForm = () => setShowEditForm(false)

    return (
        <>
            {showForm && 
                <div className='PopUp'>
                    <div className={`TaskFormContainer${colorMode}`}>
                        <input className={`inputTaskTitle${colorMode}`} type="text" onChange={handlerTitle} value={title} placeholder='Titulo'/>
                        <textarea className={`TextAreaTaskDescription${colorMode}`} type="text" onChange={handlerDescription} value={description} placeholder='Descripcion'/>
                        <div className='TaskForm-buttonsList'>
                            <button className={`buttonSend${colorMode}`} onClick={addTask}>Editar</button>
                            <button className={`buttonCancel${colorMode}`} onClick={hideForm}>Cancelar</button>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}

export default EditTaskForm