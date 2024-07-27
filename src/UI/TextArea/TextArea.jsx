import React, { useContext } from 'react'
import './TextArea.css'

import { DarkModeContext } from '../../providers/DarkModeProvier'

function TextArea({...props}) {
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  return (
    <textarea id={`TextAreaUI${colorMode}`} {...props}/>
  )
}

export default TextArea