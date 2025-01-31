import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState} from 'react'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/LocalStorage'


const App = () => {

  useEffect(()=>{
    setLocalStorage()
  })
  
  const [user, setUser] = useState(null)

  const {userData, isLogin, setIsLogin, setEmployee} = useContext(AuthContext)

  const handleLogin = (email, password)=>{
    const {admin, employees} = userData
    const isAdmin = admin.some(e => e.email == email && e.password == password)
    console.log(isAdmin)
    const isEmployee = employees.find(e => e.email == email && e.password == password)
    console.log(isEmployee)
    if(isAdmin){
        setUser('admin')
        setIsLogin(true)
    }
    else if(isEmployee){ 
        setUser('employee')
        setIsLogin(true)
        setEmployee(isEmployee)
    }else{
      alert("Invalid Information")
    }
  }

  return (
    <>
    
      {
        user == 'admin' && isLogin == true ?(
          <AdminDashboard/>
        ): user == 'employee' && isLogin == true ?(
          <EmployeeDashboard/>
        ):<Login handleLogin={handleLogin}/>
      }
      
    </>
  )
}

export default App