import React from 'react'
import Link from 'next/link';



const Login = () => {

    


    return (
        <div className="w-full mx-auto text-white">
            <div className="max-w-5xl mx-auto ">
                <div className="flex items-center justify-center mx-20 mb-8 mt-12">
                    <img src="EGU-logo.png" className="w-14"/>
                </div>
                <div className="text-white tracking-wider max-w-md mx-auto text-center mb-8">
                    <h1 className="text-2xl">Sign in to your account</h1>
                    <p>Or <span className="text-blue-400 cursor-pointer">create a new account</span></p>
                </div>
                <div className="max-w-md mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 tracking-wider">

                <div className="flex items-center justify-center mb-4">
                    <button className="flex items-center justify-center space-x-4 w-full bg-blue-800 hover:bg-blue-400 uppercase 
                                     text-white font-semibold hover:text-white   px-4 py-2 
                                        border border-blue-500 hover:border-transparent rounded tracking-widest">
                                        <img src="facebook-icon.svg" className="w-8"/>
                                        <p className="text-xs">Sign in with Facebook</p>
                    </button>
                    </div>


                    <div className="flex items-center justify-center mb-4">
                    <button className="flex items-center justify-center space-x-4 w-full bg-red-500 hover:bg-blue-400 uppercase 
                                     text-white font-semibold hover:text-white   px-4 py-2 
                                        border border-blue-500 hover:border-transparent rounded tracking-widest">
                                        <img src="google-icon.svg" className="w-8"/>
                                        <p className="text-xs">Sign in with Google</p>
                    </button>
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700  font-bold mb-2 text-lg" for="email">
                    Email Address:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                                  leading-tight focus:outline-none focus:shadow-outline" 
                                  id="email" type="text" placeholder="Email">
                    </input>
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700  font-bold mb-2 text-lg" for="password">
                    Password:
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-snug focus:outline-none focus:shadow-outline" 
                                id="password" type="password" placeholder="******************">
                    </input>
                    <p className="text-gray-700 text-xs italic">Please choose a password.</p>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-xs">
                        <div className="space-x-2 flex items-center">
                        <input className="cursor-pointer" type="checkbox"></input>
                        <label>Remember me</label>
                        </div>
                        <div className="cursor-pointer text-blue-600">
                            <p>Forgot your password?</p>
                        </div>
                    </div>


                    <div className="flex justify-between items-center space-x-2 mb-4">
                    <button className=" bg-blue-800 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white w-48 justify-center px-4 py-1 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest" type="submit" >Login</button>

                    <button className=" bg-gray-900 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white w-48 justify-center px-4 py-1 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest">Create Account</button>

                    </div>

                    <div className="flex items-center justify-center space-x-2 mt-6 cursor-pointer">
                    <Link href="/index">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" 
                        className="svg-inline--fa fa-arrow-left w-3 fill-current text-blue-600" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"><path fill="currentColor" 
                        d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path>
                    </svg>
                    </Link> 
                    <Link href="/">
                        <h1 className="text-xs text-blue-600">Back to homepage</h1>
                    </Link>

                    </div>
                    
                   
                  
                </form>
                </div>
            </div>
        </div>

        
   
    );


}


export default Login