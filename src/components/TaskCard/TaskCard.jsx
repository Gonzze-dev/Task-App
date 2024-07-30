import React, { useContext, useEffect, useState } from 'react'
import {TaskContext} from '../../providers/TaskProvider'
import './TaskCard.css'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import { findById } from '../../utilities/findById'

const TaskCard = ({id, showTaskData, setShowTaskData}) => {
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

    const {task, setTask} = useContext(TaskContext)

    const findResult = findById(task, id)
    const {title, description} = findResult

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
                <div className={`TaskCard${colorMode}`}>
                    <div className='TitleBar'>
                        <h3 className='Title'>Informacion <span className='ExitButton' onClick={hideForm}>X</span></h3> 
                    </div>
                    <div className='TaskCard-Content'>
                        <h3>{title}</h3>

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