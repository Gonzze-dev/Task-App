import React, { useContext } from 'react'
import './InputImg.css'

import { DarkModeContext } from '../../providers/DarkModeProvier'

const InputImg = ({src, alt, ...props}) =>{
  const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

  return (
    <div id={`InpuImgtUI-Container${colorMode}`}>
      <img id='InpuImgtUI-Img'
          src={src} alt={alt}/>
      <input id={`InpuImgtUI-Input`} {...props}/>
    </div>
    
  )
}

export default InputImg