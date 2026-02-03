import React, { createContext, useEffect } from 'react'
export const AuthContext = createContext()
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const { employees } = getLocalStorage()
        return employees
    })


    useEffect(() => {
        setLocalStorage()
    }, [])

    // Reload data from localStorage when it changes
    useEffect(() => {
        const handleStorageChange = () => {
            const { employees } = getLocalStorage()
            setUserData(employees)
        }

        // Listen for custom event when localStorage is updated
        window.addEventListener('localStorageUpdated', handleStorageChange)

        return () => {
            window.removeEventListener('localStorageUpdated', handleStorageChange)
        }
    }, [])



    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
