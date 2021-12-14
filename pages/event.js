import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { Menu } from '../components/Menu'
import NavbarLogo from '../components/NavbarLogo'
import EventPage from '../components/EventPage'
import Footer from '../components/Footer'
import Policy from '../components/Policy'


function event() {
    return (
        <div className="border-gray-800 min-h-screen">
           <div className="w-full mx-auto border-b border-gray-800 px-4">
     <div className="max-w-5xl mx-auto ">
     <NavbarLogo/>
     </div>
     </div>

     <div className="header w-full mx-auto border-b border-gray-800 items-start sticky top-0 z-20 py-1 shadow-xl px-4">
        <div className="flex max-w-5xl mx-auto  items-center ">
            <Header/>
            <div className="">
            <Menu/>
              </div>
        </div>
    </div>

        <div className="w-full mx-auto my-8">
            <div className="max-w-5xl mx-auto px-4">
            <EventPage/>
            </div>
        </div>


        <div className="w-full mx-auto border-t border-gray-700 h-72 bg-gray-900">
            <div className="max-w-5xl mx-auto my-8 px-4 md:px-10 lg:px-0">
              <Footer/>
            </div>
          </div>

          <div className="w-full mx-auto border-t border-gray-700 py-2 bg-gray-900">
            <div className="max-w-5xl mx-auto" >
              <Policy/>
            </div>
          </div>
        </div>
    )
}

export default event
