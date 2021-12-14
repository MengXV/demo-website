import React from 'react'
import EventGrid from './EventGrid'
import Footer from './Footer'
import Policy from './Policy'
import Header from './Header'
import { Menu } from './Menu'

function EventPage() {
    return (
        <div className="">
            
            <div className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase ml-10 md:ml-10 lg:ml-0 tracking-widest">
                <h1 ><span className="text-4xl md:text-5xl lg:text-6xl text-red-500">E</span>vents</h1>
            </div>
            <div className="w-full mx-auto ">
                <EventGrid/>
            </div>
            
        </div>
    )
}

export default EventPage
