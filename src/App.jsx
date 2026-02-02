import React, { use, useContext, useEffect, useState } from 'react'
import  Login  from './components/Auth/Login'
import  EmployeeDashboard  from './components/Dashboard/EmployeeDashboard'
import  AdminDashboard  from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {AuthContext}  from './context/AuthProvider.jsx'


const App = () => {

    const [user,setUser] = useState(null)
    const [loggedInuserData,setLoggedInUserData] = useState(null)
    const [userData,setUserData] = useContext(AuthContext)
   
      useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser')
        if(loggedInUser){
          const userData = JSON.parse(loggedInUser)
          setUser(userData.role)
          setLoggedInUserData(userData.data)
        }

      }, [])
  

    const handleLogin = (email,password) => {
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
       
      }else if(userData){
        let localStorageEmployee = localStorage.getItem('employees');
        console.log("localStorageEmployee:", JSON.parse(localStorageEmployee));
        let parsedData = JSON.parse(localStorageEmployee);
        const employee = parsedData.find(emp => emp.email == email && emp.password == password)
        if(employee){
        setUser('employee')

        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
        }
      }else{
        alert('Invalid credentials')
      }

      console.log(email,password)
    }

  

  
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)

  return (
  <>
  {/* {!user ? <Login handleLogin={handleLogin} /> : ''}
  {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />} */}
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard changeUser={setUser}  />}

    {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInuserData} />}
  
  
  </>
)
}

export default App

