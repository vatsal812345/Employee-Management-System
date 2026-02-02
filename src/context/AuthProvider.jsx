import React, {createContext, useEffect} from 'react'
export const AuthContext = createContext()
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData,setUserData] = useState(null)
    

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])

    
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
