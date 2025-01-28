import React, { createContext, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
export const AuthContext = createContext()
import { useState } from 'react'

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
       
      setUserData(getLocalStorage())
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={userData}> 
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider