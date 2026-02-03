import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-6 glass-effect rounded-2xl relative overflow-hidden group animate-fade-in border-l-4 border-l-blue-500'>
            <div className='absolute -right-10 -top-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500'></div>

            <div className='relative z-10 h-full flex flex-col'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20'>
                        {data.category}
                    </span>
                    <span className='text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5'>
                        <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        {data.date}
                    </span>
                </div>

                <h2 className='text-xl font-bold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2'>{data.title}</h2>
                <p className='text-zinc-400 text-sm leading-relaxed flex-1 line-clamp-4'>"{data.description}"</p>

                <div className='mt-6 pt-6 border-zinc-800/50'>
                    <button
                        onClick={data.onAccept}
                        className='w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2'
                    >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
                        </svg>
                        Accept Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
