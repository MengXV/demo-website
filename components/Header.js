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
                <div className="flex space-x-4">
                    <div className="hidden md:flex lg:flex  bg-gray-700 rounded-full text-md outline-none px-4 h-8">
                        <input type="text" name="search" id="search" placeholder="Search ..."  className=" bg-gray-700 text-white outline-none"/>
                        <img src="icons8-search.svg" className="w-4 cursor-pointer"/>
                    </div>

                    {/* <button className="hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest"><Link href="/login">Login</Link></button> */}
                          <button onClick={() => signOut()} className='hidden md:flex lg:flex bg-blue-500 hover:bg-blue-400 uppercase text-white font-semibold hover:text-white py-1 px-4 
                                    border border-blue-500 hover:border-transparent rounded tracking-widest'>Sign out</button>
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