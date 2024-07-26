import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import { findById } from '../../utilities/findById'
import { findIndexById } from '../../utilities/findIndexById'

const EditTaskForm = ({id, showEditForm, setShowEditForm}) => {
    const {task, setTask} = useContext(TaskContext)
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
    
    const findResult = findById(task)

    const {id: idTask,
            title: titleTask, 
            description: descriptionTask,
             isDone: isDone} = findResult

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