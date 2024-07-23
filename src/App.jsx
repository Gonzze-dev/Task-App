import { useState } from 'react'

import './App.css'

import ListTask from './ListTask'
import { TaskProvider } from './TaskProvider'

function App() {

  return (
    <>
      <TaskProvider>
        <ListTask/>
      </TaskProvider>
    </>
  )
}

export default App
