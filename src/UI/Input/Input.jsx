import React, { useContext } from 'react'
import './Input.css'

import { DarkModeContext } from '../../providers/DarkModeProvier'

const Input = ({...props}) =>{
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  return (
    <input id={`InputUI${colorMode}`} {...props}/>
  )
}

export default Input