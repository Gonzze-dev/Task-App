import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../custom-hooks/useLocalStorage'

const DarkModeContext = createContext()

const DarkModeProvier = ({children}) => {
    const [isDark, setIsDark] = useLocalStorage('theme', false)
    const [colorMode, setColorMode] = useState('')

    useEffect(() => {
        const mode = isDark == false ? '' : '-dark'
        const modeBody = isDark == false ? 'ligth' : 'dark'
        
        document.getElementById('body').className = modeBody
        setColorMode(mode)
    }, [isDark])


    return (
        <DarkModeContext.Provider value={{isDark, setIsDark, colorMode, setColorMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export  {DarkModeContext, DarkModeProvier}