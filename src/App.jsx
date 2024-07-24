import { useState } from 'react'

import './App.css'

import ListTask from './ListTask'
import { TaskProvider } from './TaskProvider'
import { DarkModeProvier } from './DarkModeProvier'
import DarkModeButtton from './DarkModeButtton'

function App() {

  return (
    <>
      <DarkModeProvier>
        <TaskProvider>
          <DarkModeButtton/>
          <ListTask/>
        </TaskProvider>
      </DarkModeProvier>
    </>
  )
}

export default App
