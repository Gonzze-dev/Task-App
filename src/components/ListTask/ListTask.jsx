import React, { useContext, useEffect, useState } from 'react'
import Input from '../../UI/Input/Input'
import './ListTask.css'

import TaskCardPrev from '../TaskCardPrev/TaskCardPrev'
import AddTaskButton from '../AddTaskButton/AddTaskButton'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'
import searchSVG from '../../assets/search.svg'
import searchDarkSVG from '../../assets/search-dark.svg'
import InputImg from '../../UI/InputImg/InputImg'

const objImg = {
  'search': searchSVG,
  'search-dark': searchDarkSVG
}
const ListTask = () => {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  const {task, setTask} = useContext(TaskContext)
  const [search, setSearch ]= useState(task)

  useEffect(() => {
    setSearch(task)
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

      <InputImg className={`InputSearch`} src={objImg['search'+colorMode]} alt={searchSVG} 
      type="text" placeholder={`Buscar tarea`} onChange={searchByTitle}/>  

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