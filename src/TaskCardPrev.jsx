import React, { useContext, useEffect, useState } from 'react'
import './TaskCardPrev.css'

import crossSvg from './assets/cross.svg'
import editSvg from './assets/edit.svg'
import deleteSvg from './assets/delete.svg'
import okSvg from './assets/ok-v2.svg'
import { TaskContext } from './TaskProvider'
import EditTaskForm from './EditTaskForm'

const changeCheckTaskSvg = (checkTask) => checkTask ? okSvg : crossSvg
const changeCheckTaskAlt = (checkTask) => checkTask ? 'task done button' : 'task undone button'

const TaskCardPrev = ({id, title = "", taskDone=false}) => {
    const [checkTask, setCheckTask] = useState(taskDone)
    const [checkTaskSvg, setCheckTaskSvg] = useState(changeCheckTaskSvg(taskDone))
    const [checkTaskAlt, setCheckTaskAlt] = useState(changeCheckTaskAlt(taskDone))
    const {task, setTask} = useContext(TaskContext)
    const [showForm, setShowForm] = useState(false)
  
    const hanlderCheckTask = () =>
    {
      const changeStateCheckTask = !checkTask

      setCheckTask(changeStateCheckTask)
      setCheckTaskSvg(changeCheckTaskSvg(changeStateCheckTask))
      setCheckTaskAlt(changeCheckTaskAlt(changeStateCheckTask))
    }

    const deleteTask = () =>
    {
        const newTasks = [...task];
        newTasks.splice(id, 1);
        setTask(newTasks)
    }

    const handlerShowForm = () => setShowForm(true)

    return (
      <>
        <div className='TaskCardPrevContainer'>
                <p className='TaskCardPrevTitle'>{title}</p>

                <div className='TaskCardPrev-ButtonList'>
                    <img className='TaskCardPrev-ButtonList-Button' 
                    src={checkTaskSvg} alt={checkTaskAlt} width={18} height={18} onClick={hanlderCheckTask}/>
                    
                    <img className='TaskCardPrev-ButtonList-Button'
                    src={editSvg} alt={editSvg} width={20} height={20} onClick={handlerShowForm}/>

                    <img className='TaskCardPrev-ButtonList-Button'
                    src={deleteSvg} alt={deleteSvg} width={20} height={20} onClick={deleteTask}/>
                </div>
          </div>

        <EditTaskForm id={id} showEditForm={showForm} setShowEditForm={setShowForm}/>
      </>
        
    )
}

export default TaskCardPrev