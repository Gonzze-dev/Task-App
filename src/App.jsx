import { useState } from 'react'

import './App.css'

import ListTask from './components/ListTask/ListTask'
import { TaskProvider } from './providers/TaskProvider'
import { DarkModeProvier } from './providers/DarkModeProvier'
import DarkModeButton from './components/DarkModeButton/DarkModeButton'

function App() {

  return (
    <>
      <DarkModeProvier>
        <TaskProvider>
          <DarkModeButton/>
          <ListTask/>
        </TaskProvider>
      </DarkModeProvier>
    </>
  )
}

export default App
