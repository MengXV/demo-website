import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'




export const Header = () => {
    const {data:session} = useSession()
    if(session){
        return(
            <>
             <div className="flex items-center mx-auto  justify-between w-full py-2 px-4">
                <div className="w-10 md:w-10  lg:w-12  cursor-pointer ">
                   <a href="/"> <img   src="EGU-logo.png" alt="web-logo" className="w-16 "/></a>
                   
                </div>
                
                <ul className="hidden md:flex lg:flex space-x-20 text-md md:text-lg lg:text-xl text-white font-semibold tracking-widest uppercase">
                    <li><Link href="/event"><a  className="transition-all hover:text-red-600 ease-in-out">Events</a></Link></li>
                    <li><Link href="/featured"><a  className="transition-colors hover:text-red-600 ease-in-out ">Featured</a></Link></li>
                    <li><Link href="/rank"><a  className="transition-colors hover:text-red-600 ease-in-out ">Rankings</a></Link></li>
 
                </ul>
                <div className="flex space-x-6 items-center ">
                    <div className="hidden md:flex lg:flex  bg-gray-700 rounded-full text-md outline-none px-4 h-8">
                        <input type="text" name="search" id="search" placeholder="Search ..."  className=" bg-gray-700 text-white outline-none"/>
                        <img src="icons8-search.svg" className="w-4 cursor-pointer"/>
                    </div>

                    {/* <button className="hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest"><Link href="/login">Login</Link></button> */}
                          {/* <button onClick={() => signOut()} className='hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest'>Sign out</button> */}

                        <Link href="/profile"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" 
                            viewBox="0 0 29 29"
                            className='w-8 fill-current text-white cursor-pointer'>
                        <path d="M14.5,2A12.51408,12.51408,0,0,0,2,14.5,12.52131,12.52131,0,0,0,14.5,27a12.5,12.5,0,0,0,0-25Zm7.60309,19.71283a8.48005,8.48005,0,0,0-15.19873.00824A10.36659,10.36659,0,0,1,4,14.5a10.5,10.5,0,0,1,21,0A10.36807,10.36807,0,0,1,22.10309,21.71283ZM14.5,7A4.5,4.5,0,1,0,19,11.5,4.5,4.5,0,0,0,14.5,7Z"/>
                        </svg></Link>
                    </div>
                   
            </div>
            </>
        )
    }
    
    return(
        <>
        <div className="flex items-center mx-auto  justify-between w-full py-2 px-4">
                <div className="w-10 md:w-10  lg:w-12  cursor-pointer ">
                   <a href="/"> <img   src="EGU-logo.png" alt="web-logo" className="w-16 "/></a>
                   
                </div>
                
                <ul className="hidden md:flex lg:flex space-x-20 text-md md:text-lg lg:text-xl text-white font-semibold tracking-widest uppercase">
                    <li><Link href="/event"><a  className="transition-all hover:text-red-600 ease-in-out">Events</a></Link></li>
                    <li><Link href="/featured"><a  className="transition-colors hover:text-red-600 ease-in-out ">Featured</a></Link></li>
                    <li><Link href="/rank"><a  className="transition-colors hover:text-red-600 ease-in-out ">Rankings</a></Link></li>
 
                </ul>
                <div className="flex space-x-4">
                    <div className="hidden md:flex lg:flex  bg-gray-700 rounded-full text-md outline-none px-4 h-8">
                        <input type="text" name="search" id="search" placeholder="Search ..."  className=" bg-gray-700 text-white outline-none"/>
                        <img src="icons8-search.svg" className="w-4 cursor-pointer"/>
                    </div>

                    {/* <button className="hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest"><Link href="/login">Login</Link></button> */}
                          <button className='hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest' onClick={() => signIn()}>Sign in</button>
                    </div>
                   
            </div>

        </>
    );
}

export default Header