import React, { createContext, useState } from 'react'
import { tasks } from '../task'
import { useLocalStorage } from '../custom-hooks/useLocalStorage'

const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [task, setTask] = useLocalStorage('tasks', [])

    return (
        <TaskContext.Provider value={{task, setTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskContext, TaskProvider}