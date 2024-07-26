import React, { useContext, useEffect, useState } from 'react'
import './TaskCardPrev.css'

import crossSvg from '../../assets/cross.svg'
import editSvg from '../../assets/edit.svg'
import deleteSvg from '../../assets/delete.svg'
import okSvg from '../../assets/ok-v2.svg'

import { TaskContext } from '../../providers/TaskProvider'
import EditTaskForm from '../TaskForm/EditTaskForm'
import TaskCard from '../TaskCard/TaskCard'
import { DarkModeContext } from '../../providers/DarkModeProvier'

const changeCheckTaskSvg = (checkTask) => checkTask ? okSvg : crossSvg
const changeCheckTaskAlt = (checkTask) => checkTask ? 'task done button' : 'task undone button'

const TaskCardPrev = ({id, title = "", taskDone=false}) => {
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

    const [checkTask, setCheckTask] = useState(taskDone)
    const [checkTaskSvg, setCheckTaskSvg] = useState(changeCheckTaskSvg(taskDone))
    const [checkTaskAlt, setCheckTaskAlt] = useState(changeCheckTaskAlt(taskDone))
    const {task, setTask} = useContext(TaskContext)
    const [showForm, setShowForm] = useState(false)
    const [showTaskData, setShowTaskData] = useState(false)
  
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
    const handlerShowTaskData = () => setShowTaskData(true)

    return (
      <>
        <div className = {`TaskCardPrevContainer${colorMode}`}>
                <p className='TaskCardPrevTitle' onClick={handlerShowTaskData}>{title}</p>

                <div className='TaskCardPrev-ButtonList'>
                    <img className='TaskCardPrev-ButtonList-Button' 
                    src={checkTaskSvg} alt={checkTaskAlt} width={18} height={18} onClick={hanlderCheckTask}/>
                    
                    <img className='TaskCardPrev-ButtonList-Button'
                    src={editSvg} alt={editSvg} width={20} height={20} onClick={handlerShowForm}/>

                    <img className='TaskCardPrev-ButtonList-Button'
                    src={deleteSvg} alt={deleteSvg} width={20} height={20} onClick={deleteTask}/>
                </div>
          </div>
        <TaskCard id={id} showTaskData={showTaskData} setShowTaskData={setShowTaskData}/>
        <EditTaskForm id={id} showEditForm={showForm} setShowEditForm={setShowForm}/>
      </>
        
    )
}

export default TaskCardPrev