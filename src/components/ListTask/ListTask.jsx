import React, { useContext, useEffect, useState } from 'react'
import Input from '../../UI/Input/Input'
import './ListTask.css'

import TaskCardPrev from '../TaskCardPrev/TaskCardPrev'
import AddTaskButton from '../AddTaskButton/AddTaskButton'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'


const ListTask = () => {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  const {task, setTask} = useContext(TaskContext)
  const [search, setSearch ]= useState(task)

  useEffect(() => {
    setSearch(task)
    console.log(search)
  }, [task])

  const searchByTitle = (e) => {
    const searchValue = e.target.value
    const regex = new RegExp(searchValue, 'i');

    const searchResult = task.filter(objTask => regex.test(objTask.title))
    setSearch(searchResult)
   }

  return (
    <>
    <div className='TaskContainer'>
      <Input className={`InputSearch${colorMode}`} type="text" placeholder='buscar tarea' onChange={searchByTitle}/>
      <div className={`listTaskContainer${colorMode}`}>
        <AddTaskButton/>
        {search.map(({id, title, description, isDone}, index) => 
          <TaskCardPrev
          key={index}
          id={id}
          title={title}
          taskDone={isDone}/>)}
      </div>
    </div>
    
    </>
   
  )
}

export default ListTask