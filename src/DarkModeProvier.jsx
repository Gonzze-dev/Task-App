import React, { createContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

const DarkModeProvier = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const [colorMode, setColorMode] = useState('')

    useEffect(() => {
        const mode = colorMode == '' ? '-dark' : ''
        const modeBody = colorMode == '' ? "dark" : "ligth"
        
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