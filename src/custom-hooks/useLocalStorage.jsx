import React, { useState } from 'react'

const searchValueInLocalStorage = (key, initValue) =>{
    let data = initValue

    try {
        const item = window.localStorage.getItem(key)
        data = item ? JSON.parse(item) : initValue
    } catch (e) {
        console.error(e)
    } finally
    {
        return data
    }
}

export function useLocalStorage(key, initValue) {
    const [storedValue, setStoredValue] = useState(searchValueInLocalStorage(key, initValue))

    const setValue = value => {
        try{
            const valueToString = JSON.stringify(value)

            setStoredValue(value)
            window.localStorage.setItem(key, valueToString)
        }catch(e){
            console.error(e)
        }
    }

    return [storedValue, setValue]
}