import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import NavbarLogo from '../components/NavbarLogo';
import Carousel from '../components/Carousel';
import YoutubeVideo from '../components/YoutubeVideo';
import EventSection from '../components/EventSection';
import EventCalendar from '../components/EventCalendar';
import FeaturedSection from '../components/FeaturedSection';
import FeaturedCarousel from '../components/FeaturedCarousel';
import RankSection from '../components/RankSection';
import RankTable from '../components/RankTable';
import Footer from '../components/Footer';
import Policy from '../components/Policy';

import Link from 'next/link';
import { Menu } from '../components/Menu';
import VideoSection from '../components/VideoSection';
import { useSession } from 'next-auth/react';







export default function Home() {


 
  return (
    <>
   <div className="">
     
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

      <Carousel/>

      <div className="w-full mx-auto mt-20 pt-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
        <VideoSection/>
        </div>
        <div className="max-w-5xl mx-auto py-8">
        <YoutubeVideo/>
        </div>
     </div>
     


        <div id="events" className="w-full mx-auto pt-8">
          <div className="max-w-5xl mx-auto">
            <EventSection/>
          </div>
        </div>
    
          {/* <div id="ongoing_hide" className="ongoing">
            <EventCalendar/>
          </div> */}

          <div id="featured" className="w-full mx-auto pt-8 bg-gray-900">
            <div className="max-w-5xl mx-auto">
            <FeaturedSection/>
            </div>
              <div className="max-w-screen-xl mx-auto py-10  ">
                <FeaturedCarousel/>
              </div>
          </div>

          <div className="max-w-5xl mx-auto pt-8">
            <RankSection/>
              <div className="w-full mx-auto py-8">
                <div className=" mx-auto flex justify-center items-center">
                  <RankTable/>
                </div>
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
   </>
  );
}
