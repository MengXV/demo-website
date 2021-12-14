import React, {Component} from 'react'
import { useState } from 'react'
import EventCalendar from './EventCalendar'
import EventUpcoming from './EventUpcoming'

function EventSection() {

   

    return (
        <div>

            <div className="event-title text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase px-4 md:px-4 lg:px-4 tracking-widest">
                    <h1 ><span className="text-4xl md:text-5xl lg:text-6xl text-red-500">E</span>vents</h1>
            </div>

           <div className="sub-title pt-8 flex text-gray-500 text-xs md:text-base lg:text-lg uppercase font-semibold tracking-widest px-4 md:px-4 lg:px-4 ">
                <div className="border-r border-gray-500 pr-1">
                    <button className="ongoing-btn font-semibold uppercase tracking-widest text-center">Ongoing</button>        
                </div>
                <div className="border-r border-gray-500 pl-2 pr-1">
                    <button  className="upcoming-btn font-semibold uppercase tracking-widest" onClick={() => setShow(show)}>Upcoming</button>            
                </div>
                <div className="border-r border-gray-500 pl-2 pr-1">
                    <button  className="past-btn font-semibold uppercase tracking-widest">Past</button>            
                </div>
                <div className=" pl-2 pr-1 ">
                    <button  className="all-btn font-semibold uppercase tracking-widest">All</button>            
                </div>
            </div>


            <div>
                    <EventCalendar/>
            </div>
            {/* <div>
               <EventUpcoming/>
                
            </div> */}
    </div>
    );
};


export default EventSection
