import React from 'react'
import NavbarLogo from '../components/NavbarLogo'
import Header from '../components/Header'
import { Menu } from '../components/Menu'
import FeaturedPage from '../components/FeaturedPage'
import EventTest from '../components/EventTest'

function featured() {


    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
            <div className="w-full mx-auto border-b border-gray-800">
                <NavbarLogo/>
            </div>

            <div className="w-full mx-auto border-b border-gray-800 items-start bg-gray-900 sticky top-0 z-50 py-1 shadow-2xl">
                <div className="flex max-w-5xl mx-auto  items-center space-x-56 ">
                    <Header/>
                    <Menu/>
                </div>
            </div>

            <div className="w-full mx-auto">
                <div className="max-w-5xl mx-auto my-10 ">
                <FeaturedPage/>
                </div>
            </div>

            <div>
                <EventTest/>
            </div>


        </div>
    )
}

export default featured
