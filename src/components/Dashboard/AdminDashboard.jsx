import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen bg-zinc-950 p-6 md:p-10'>
      <div className='max-w-7xl mx-auto space-y-8'>
        <Header changeUser={props.changeUser} data={{ firstName: 'Admin' }} />
        <CreateTask />
        <AllTasks />
      </div>
    </div>
  )
}

export default AdminDashboard