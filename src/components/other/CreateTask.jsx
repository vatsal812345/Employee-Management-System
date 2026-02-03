import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const data = [...userData]
    let taskAssigned = false

    data.forEach(function (elem) {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
        taskAssigned = true
      }
    })

    if (!taskAssigned) {
      alert('Employee not found. Please check the name.')
      return
    }

    localStorage.setItem('employees', JSON.stringify(data))
    window.dispatchEvent(new Event('localStorageUpdated'))
    setUserData(data)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

    alert('Task created successfully!')
  }

  return (
    <div className='p-8 glass-effect rounded-2xl mt-5 animate-fade-in'>
      <h2 className='text-xl font-bold mb-6 text-zinc-100'>Create New Task</h2>
      <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        <div className='space-y-5'>
          <div className='group'>
            <label className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-indigo-400 transition-colors'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className='w-full text-zinc-100 placeholder:text-zinc-600'
              type="text"
              placeholder='e.g. Design Dashboard'
            />
          </div>

          <div className='group'>
            <label className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-indigo-400 transition-colors'>Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className='w-full text-zinc-100'
              type="date"
            />
          </div>

          <div className='group'>
            <label className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-indigo-400 transition-colors'>Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className='w-full text-zinc-100 placeholder:text-zinc-600'
              type="text"
              placeholder='Employee Name'
            />
          </div>

          <div className='group'>
            <label className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-indigo-400 transition-colors'>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className='w-full text-zinc-100 placeholder:text-zinc-600'
              type="text"
              placeholder='Design, Dev, etc'
            />
          </div>
        </div>

        <div className='flex flex-col h-full'>
          <div className='group flex-1 flex flex-col'>
            <label className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-indigo-400 transition-colors'>Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              className='w-full flex-1 min-h-[160px] text-zinc-100 placeholder:text-zinc-600 resize-none'
              placeholder='Describe the task in detail...'
            />
          </div>

          <button className='w-full mt-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 relative overflow-hidden group/btn'>
            <span className='relative z-10'>Create Task</span>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
