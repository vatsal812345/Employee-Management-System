import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className='p-8 glass-effect rounded-2xl mt-5 animate-fade-in'>
      <h2 className='text-xl font-bold mb-6 text-zinc-100'>Employee Overview</h2>

      <div className='overflow-x-auto'>
        <div className='min-w-[700px]'>
          <div className='grid grid-cols-5 px-6 py-4 bg-zinc-800/50 rounded-xl mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500'>
            <div>Employee</div>
            <div className='text-center'>New</div>
            <div className='text-center'>Active</div>
            <div className='text-center'>Completed</div>
            <div className='text-center'>Failed</div>
          </div>

          <div className='space-y-3'>
            {userData ? userData.map((elem, idx) => (
              <div key={idx} className='grid grid-cols-5 px-6 py-4 glass-effect border-zinc-800/50 hover:border-zinc-700/50 rounded-xl transition-all duration-300 group'>
                <div className='font-bold text-zinc-200 group-hover:text-indigo-400 transition-colors'>
                  {elem.firstName}
                </div>
                <div className='text-center font-bold text-blue-400/80'>
                  {elem.taskNumbers.newTask}
                </div>
                <div className='text-center font-bold text-amber-400/80'>
                  {elem.taskNumbers.active}
                </div>
                <div className='text-center font-bold text-emerald-400/80'>
                  {elem.taskNumbers.completed}
                </div>
                <div className='text-center font-bold text-rose-400/80'>
                  {elem.taskNumbers.failed}
                </div>
              </div>
            )) : (
              <div className='text-center py-10'>
                <div className='animate-pulse text-zinc-500 font-medium'>Initialising system data...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllTask
