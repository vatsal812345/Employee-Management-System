import React from 'react'

const TaskListNumbers = ({ data }) => {
    const stats = [
        {
            label: 'New Tasks',
            value: data.taskNumbers.newTask,
            gradient: 'from-blue-500 to-indigo-600',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                </svg>
            )
        },
        {
            label: 'Active Tasks',
            value: data.taskNumbers.active,
            gradient: 'from-amber-400 to-orange-500',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
            )
        },
        {
            label: 'Completed',
            value: data.taskNumbers.completed,
            gradient: 'from-emerald-400 to-teal-500',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            )
        },
        {
            label: 'Failed Tasks',
            value: data.taskNumbers.failed,
            gradient: 'from-rose-500 to-red-600',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            )
        }
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 animate-fade-in'>
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group`}
                >
                    <div className='absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500'></div>

                    <div className='relative z-10'>
                        <div className='mb-4 p-3 bg-white/20 w-fit rounded-xl backdrop-blur-md border border-white/20'>
                            {stat.icon}
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-4xl font-bold tracking-tight'>{stat.value}</h2>
                            <p className='text-sm font-semibold uppercase tracking-wider opacity-80'>{stat.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskListNumbers
