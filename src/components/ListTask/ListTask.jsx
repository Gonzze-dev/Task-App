import React, { useContext } from 'react'
import './ListTask.css'

import TaskCardPrev from '../TaskCardPrev/TaskCardPrev'
import AddTaskButton from '../AddTaskButton/AddTaskButton'
import { TaskContext } from '../../providers/TaskProvider'
import { DarkModeContext } from '../../providers/DarkModeProvier'

const ListTask = () => {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  const {task, setTask} = useContext(TaskContext)

  return (
    <div className={`listTaskContainer${colorMode}`}>
      <AddTaskButton/>
      {task.map(({title, description, isDone}, index) => 
        <TaskCardPrev
        key={index}
        id={index}
        title={title}
        taskDone={isDone}/>)}
    </div>
  )
}

export default ListTask