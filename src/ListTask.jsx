import React, { useContext } from 'react'
import './ListTask.css'

import TaskCardPrev from './TaskCardPrev'
import AddTaskButton from './AddTaskButton'
import { TaskContext } from './TaskProvider'
import { DarkModeContext } from './DarkModeProvier'

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