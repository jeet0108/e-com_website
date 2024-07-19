import React from 'react';
import { FcGoogle } from "react-icons/fc";


const Login = () =>{
    return(
        <div className='min-h-screen flex bg-gray-200 justify-center items-center '>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div className='mb-4'>
                    <label htmlFor="email" className=''>Email</label>
                    <input 
                        type="email" 
                        id='email'
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className=''>Password</label>
                    <input 
                        type="text"
                        id='password'
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'    
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login
                </button>
                <h1 className='pt-1'>Don't have an account? <a href="Sign up" className=' underline'>Sign up</a></h1>
                <div className=' flex w-full justify-center items-center py-3'>
                    <div className='  border-b-2 w-full'></div>
                    <div className=' px-1 w-full'>Or continue with</div>
                    <div className=' border-b-2 w-full'></div>
                </div>
                <button className='w-full rounded-3xl border-2 border-black py-2 px-3 flex justify-center items-center'>
                    <FcGoogle className=''/>
                    <h1 className='pl-1'>countinue with google</h1>
                </button>
            </form>

            </div>
        </div>

    )
}
export default Login;
