import React, { useContext, useEffect, useState } from 'react'
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
    <input type="text" placeholder='buscar tarea' onChange={searchByTitle}/>
    <div className={`listTaskContainer${colorMode}`}>
      <AddTaskButton/>
      {search.map(({id, title, description, isDone}) => 
        <TaskCardPrev
        key={id}
        id={id}
        title={title}
        taskDone={isDone}/>)}
    </div>
    </>
   
  )
}

export default ListTask