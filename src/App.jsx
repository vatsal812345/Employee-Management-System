import React, { use, useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {

  const navigate = useNavigate()
  const [userData, setUserData] = useContext(AuthContext)

  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser)
      return parsedData.role
    }
    return null
  })

  const [loggedInuserData, setLoggedInUserData] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser)
      return parsedData.data
    }
    return null
  })


  // Sync logged-in employee data with context updates
  useEffect(() => {
    if (user === 'employee' && loggedInuserData && userData) {
      const updatedEmployee = userData.find(emp => emp.email === loggedInuserData.email)
      if (updatedEmployee) {
        setLoggedInUserData(updatedEmployee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
      }
    }
  }, [userData])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      navigate('/dashboard')

    } else if (userData) {
      const employee = userData.find(emp => emp.email == email && emp.password == password)
      if (employee) {
        setUser('employee')

        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        navigate('/dashboard')
      } else {
        alert('Invalid credentials')
      }
    } else {
      alert('Invalid credentials')
    }

    console.log(email, password)
  }

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)

  return (
    <Routes>
      <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          user === 'admin' ? (
            <AdminDashboard changeUser={setUser} />
          ) : user === 'employee' ? (
            <EmployeeDashboard changeUser={setUser} data={loggedInuserData} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  )
}

export default App

