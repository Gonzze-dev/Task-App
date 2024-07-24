import React, { useContext, useEffect, useState } from 'react'
import {TaskContext} from './TaskProvider'
import './TaskCard.css'

const TaskCard = ({id, showTaskData, setShowTaskData}) => {
    const {task, setTask} = useContext(TaskContext)
    const {title, description} = task[id]
    const [showForm, setShowForm] = useState(showTaskData)
        
    useEffect(() =>
    {
        setShowForm(showTaskData)
    }, [showTaskData])

    const hideForm = () => setShowTaskData(false)

    return (
        <>
            {showForm && 
            <div className='PopUp'>
                <div className='TaskCard'>
                    <div className='TitleBar'>
                        <p className='Title'>Informacion <span className='ExitButton' onClick={hideForm}>X</span></p> 
                    </div>
                    <div className='TaskCard-Content'>
                        <h3>{title} </h3>
                        <p id='description' className='description'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default TaskCard