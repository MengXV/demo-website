import React from 'react'

function Footer() {
    return (
        <div className="footer-title">
            <div className="text-xs md:text-md lg:text-lg  font-semibold text-white">
                <h1 className="e-sport">E-Sport.</h1>
            </div>
            <div className="tracking-widest font-light text-xs  text-gray-400 mt-8 mb-2">
                <p>Stay Connected</p>
            </div>
            <div className="flex items-center space-x-3">
                <div className="w-6 md:w-6 lg:w-8 ">
                    <img src="icons8-facebook.svg" alt="" className="cursor-pointer transition duration-200 ease-in-out  transform hover:translate-y-1 hover:scale-110"/>
                </div>
                <div className="w-4 md:w-5 lg:w-6 ">
                    <img src="instagram-square-brands.svg" alt="" className="cursor-pointer transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110"/>
                </div>
                <div className="w-4 md:w-5 lg:w-6 ">
                    <img src="tiktok-brands.svg" alt="" className="cursor-pointer transition duration-200 ease-in-out  transform hover:translate-y-1 hover:scale-110"/>
                </div>
                <div className="w-4 md:w-5 lg:w-6 ">
                    <img src="linkedin-brands.svg" alt="" className="cursor-pointer transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110"/>
                </div>
            </div>
        </div>
  
    )
}

export default Footer
