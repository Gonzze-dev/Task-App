import React, { useContext, useEffect, useState } from 'react'
import './TaskForm.css'
import { TaskContext } from './TaskProvider'

const EditTaskForm = ({id, showEditForm, setShowEditForm}) => {
    const {task, setTask} = useContext(TaskContext)

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
                    <div className='TaskFormContainer'>
                        <input className='inputTaskTitle' type="text" onChange={handlerTitle} value={title} placeholder='Titulo'/>
                        <textarea className='TextAreaTaskDescription' type="text" onChange={handlerDescription} value={description} placeholder='Descripcion'/>
                        <div className='TaskForm-buttonsList'>
                            <button className='buttonSend' onClick={addTask}>Editar</button>
                            <button className='buttonCamcel' onClick={hideForm}>Cancelar</button>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}

export default EditTaskForm