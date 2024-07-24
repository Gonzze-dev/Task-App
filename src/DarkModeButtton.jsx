import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvier'

const DarkModeButtton = () => {
    const {isDark, setIsDark, colorMode, setColorMode} = useContext(DarkModeContext)

    const handlerSetDarkMode = () =>{
        setIsDark(!isDark)
    }

    return (
        <button className='DarkModeButton' onClick={handlerSetDarkMode}>
            darkMode
        </button>
    )
}

export default DarkModeButtton