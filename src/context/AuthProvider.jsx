import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [employee, setEmployee] = useState(null)
    
    useEffect(() => {
       setLocalStorage();
       const storeData = getLocalStorage()
      setUserData(storeData);
    
    },[])

    console.log(employee)
    
  return (
    <div>
        <AuthContext.Provider value={{userData,isLogin, setIsLogin, setEmployee, employee}}> 
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider