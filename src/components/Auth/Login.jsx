import React from 'react'
import { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log("Email is:", email)
        console.log("Password is:", password)

        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900'>
            {/* Decorative background elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
                <div className='absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
            </div>

            {/* Login Card */}
            <div className='relative z-10 w-full max-w-md mx-4'>
                <div className='backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl font-bold text-white mb-2 tracking-tight'>Welcome Back</h1>
                        <p className='text-gray-300 text-sm'>Sign in to continue to your dashboard</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className='space-y-6'>
                        {/* Email Input */}
                        <div className='relative group'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full text-white bg-white/5 border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 rounded-xl py-3.5 px-4 outline-none transition-all placeholder:text-gray-500 hover:bg-white/10'
                                type='email'
                                placeholder='you@example.com'
                            />
                        </div>

                        {/* Password Input */}
                        <div className='relative group'>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className='w-full text-white bg-white/5 border border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 rounded-xl py-3.5 px-4 outline-none transition-all placeholder:text-gray-500 hover:bg-white/10'
                                type='password'
                                placeholder='••••••••'
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/75 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Footer */}
                    <div className='mt-8 text-center'>
                        <p className='text-sm text-gray-400'>
                            Protected by enterprise-grade security
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login