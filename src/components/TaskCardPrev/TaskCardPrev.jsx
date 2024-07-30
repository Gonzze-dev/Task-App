import React, { useContext, useEffect, useState } from 'react'
import './TaskCardPrev.css'

import unCheck from '../../assets/unCheck.svg'
import editSvg from '../../assets/edit.svg'
import deleteSvg from '../../assets/delete.svg'
import check from '../../assets/check.svg'

import unCheckDark from '../../assets/unCheck-dark.svg'
import editSvgDark from '../../assets/edit-dark.svg'
import deleteSvgDark from '../../assets/delete-dark.svg'
import checkDark from '../../assets/check-dark.svg'

import { TaskContext } from '../../providers/TaskProvider'
import EditTaskForm from '../TaskForm/EditTaskForm'
import TaskCard from '../TaskCard/TaskCard'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import { findIndexById } from '../../utilities/findIndexById'

const changeCheckTaskSvg = (checkTask) => checkTask ? 'check': 'unCheck'
const changeCheckTaskAlt = (checkTask) => checkTask ? 'task done button' : 'task undone button'

const objImg = {
  'check': check,
  'unCheck': unCheck,
  'editSvg': editSvg,
  'deleteSvg': deleteSvg,
  'check-dark': checkDark,
  'unCheck-dark': unCheckDark,
  'editSvg-dark': editSvgDark,
  'deleteSvg-dark': deleteSvgDark
}

const TaskCardPrev = ({id, title = "", taskDone=false}) => {
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)
    
    const [checkTask, setCheckTask] = useState(taskDone)
    const [checkTaskAlt, setCheckTaskAlt] = useState(changeCheckTaskAlt(taskDone))
    const {task, setTask} = useContext(TaskContext)
    const [showForm, setShowForm] = useState(false)
    const [showTaskData, setShowTaskData] = useState(false)

    const hanlderCheckTask = () =>
    {
      const changeStateCheckTask = !checkTask
      const newTask = [...task];
        
      const index = findIndexById(newTask, id);
      const objTask = newTask[index]

      objTask.isDone = !objTask.isDone

      newTask[index]  = objTask

      setTask([...newTask])
      setCheckTask(changeStateCheckTask)
      setCheckTaskAlt(changeCheckTaskAlt(changeStateCheckTask))
    }

    const deleteTask = () =>
    {
      const newTasks = [...task];
        
      const index = findIndexById(newTasks, id);
      
      if (index !== -1)
      {
        newTasks.splice(index, 1);
        setTask(newTasks)
      }
    }

    const handlerShowForm = () =>{
      setShowForm(true)
    }

    const handlerShowTaskData = () => {
      setShowTaskData(true)
    }

    return (
      <>
        <div className = {`TaskCardPrevContainer${colorMode}`} onClick={handlerShowTaskData}>
              <p className='TaskCardPrevTitle' >{title}</p>

              <div className='TaskCardPrev-ButtonList'>
                  <img className='TaskCardPrev-ButtonList-Button' 
                  src={objImg[changeCheckTaskSvg(taskDone)+colorMode]} 
                  alt={checkTaskAlt}
                  width={20}
                  height={20}
                  onClick={(e) => {e.stopPropagation(); hanlderCheckTask()}}
                  />
                  
                  <img className='TaskCardPrev-ButtonList-Button'
                  src={objImg[`editSvg${colorMode}`]}
                  alt={editSvg}
                  width={20}
                  height={20}
                  onClick={(e) => {e.stopPropagation(); handlerShowForm()}}/>

                  <img className='TaskCardPrev-ButtonList-Button'
                  src={objImg[`deleteSvg${colorMode}`]}
                  alt={deleteSvg}
                  width={20}
                  height={20}
                  onClick={(e) => {e.stopPropagation(); deleteTask()}}/>
              </div>
        </div>

        <TaskCard id={id} showTaskData={showTaskData} setShowTaskData={setShowTaskData}/>
        <EditTaskForm id={id} showEditForm={showForm} setShowEditForm={setShowForm}/>
      </>
    )
}

export default TaskCardPrev