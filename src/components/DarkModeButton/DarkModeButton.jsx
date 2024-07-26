import React, { useContext } from 'react'
import './DarkModeButton.css'
import { DarkModeContext } from '../../providers/DarkModeProvier'

const DarkModeButton = () => {
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

    const handlerSetDarkMode = () =>{
        setIsDark(!isDark)
    }

    return (
        <button className={`DarkModeButton${colorMode}`} onClick={handlerSetDarkMode}>
        </button>
    )
}

export default DarkModeButton