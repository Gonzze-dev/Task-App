import { useState } from 'react'

import './App.css'

import ListTask from './components/ListTask/ListTask'
import { TaskProvider } from './providers/TaskProvider'
import { DarkModeProvier } from './providers/DarkModeProvier'

import TitleApp from './components/TitleApp/TitleApp'

function App() {

  return (
    <>
      <DarkModeProvier>
        <TaskProvider>
          <TitleApp/>
          <ListTask/>
        </TaskProvider>
      </DarkModeProvier>
    </>
  )
}

export default App
