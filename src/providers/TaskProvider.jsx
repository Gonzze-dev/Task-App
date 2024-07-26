import React, { createContext, useState } from 'react'
import { tasks } from '../task'

const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [task, setTask] = useState([...tasks])

    return (
        <TaskContext.Provider value={{task, setTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskContext, TaskProvider}