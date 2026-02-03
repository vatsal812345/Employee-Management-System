import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        navigate('/')
    }

    return (
        <header className='flex items-center justify-between py-6 animate-fade-in'>
            <div className='space-y-1'>
                <h1 className='text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold'>
                    Welcome Back
                </h1>
                <div className='flex items-center gap-3'>
                    <span className='text-3xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent'>
                        Hello, {props.data?.firstName || 'User'}
                    </span>
                    <span className='text-3xl animate-bounce-slow'>👋</span>
                </div>
            </div>

            <button
                onClick={logOutUser}
                className='group relative px-6 py-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-xl font-semibold transition-all duration-300 active:scale-95 flex items-center gap-2 overflow-hidden shadow-lg shadow-rose-500/10'
            >
                <svg className='w-4 h-4 transition-transform group-hover:rotate-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                </svg>
                <span>Log Out</span>
                <div className='absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover:opacity-100 -z-10 transition-opacity'></div>
            </button>
        </header>
    )
}

export default Header

