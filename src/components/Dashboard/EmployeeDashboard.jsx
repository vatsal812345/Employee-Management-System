import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ changeUser, data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, status) => {
    const updatedData = [...userData]

    // Find the current employee
    const employeeIndex = updatedData.findIndex(emp => emp.email === data.email)

    if (employeeIndex !== -1) {
      const employee = updatedData[employeeIndex]
      const task = employee.tasks[taskIndex]

      if (status === 'completed') {
        if (task.newTask) {
          employee.taskNumbers.newTask = Math.max(0, employee.taskNumbers.newTask - 1)
        }
        task.active = false
        task.newTask = false
        task.completed = true
        task.failed = false

        employee.taskNumbers.active = Math.max(0, employee.taskNumbers.active - 1)
        employee.taskNumbers.completed = employee.taskNumbers.completed + 1
      } else if (status === 'failed') {
        if (task.newTask) {
          employee.taskNumbers.newTask = Math.max(0, employee.taskNumbers.newTask - 1)
        }
        task.active = false
        task.newTask = false
        task.completed = false
        task.failed = true

        employee.taskNumbers.active = Math.max(0, employee.taskNumbers.active - 1)
        employee.taskNumbers.failed = employee.taskNumbers.failed + 1
      } else if (status === 'accepted') {
        task.active = true
        task.newTask = false
        task.completed = false
        task.failed = false

        employee.taskNumbers.active = employee.taskNumbers.active + 1
        employee.taskNumbers.newTask = Math.max(0, employee.taskNumbers.newTask - 1)
      }

      // Update localStorage
      localStorage.setItem('employees', JSON.stringify(updatedData))

      // Dispatch custom event to notify about localStorage update
      window.dispatchEvent(new Event('localStorageUpdated'))

      // Update context
      setUserData(updatedData)

      // Update current user in localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    }
  }

  return (
    <div className='min-h-screen bg-zinc-950 p-6 md:p-10'>
      <div className='max-w-7xl mx-auto'>
        <Header changeUser={changeUser} data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} updateTaskStatus={updateTaskStatus} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
