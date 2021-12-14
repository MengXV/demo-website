import Link from 'next/link';
import { useState } from 'react';

export const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='md:hidden lg:hidden flex items-center'>

        <button
          className=' rounded lg:hidden text-white hover:text-white outline-none transition-all hover:bg-gray-600 '
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

      <div className={`${
            active ? '' : 'hidden'}
            `}>
        <div className='absolute mt-6 h-48 right-0 w-full bg-gray-900 border-b-2 border-gray-800 '>
          <div className='my-5 flex flex-col items-center justify-center '>
            <div className=" bg-gray-700 rounded-full outline-none px-4 h-8 flex items-center text-xs">
              <input type="text" name="search" id="search" placeholder="Search ..."  className=" bg-gray-700 text-white outline-none"/>
                <img src="icons8-search.svg" className="w-4 cursor-pointer"/>
            </div>
              <Link href='/event'>
                <a className='mt-4 text-sm md:text-base lg:text-lg  text-white w-full flex justify-center hover:text-red-600 hover:bg-gray-800 transition-all duration-200 ease-in-out'>
                  Events
                </a>
              </Link>
              <Link href='/featured'>
                <a className='my-2 text-sm md:text-base lg:text-lg text-white w-full flex justify-center hover:text-red-600 hover:bg-gray-800 transition-all duration-200 ease-in-out'>
                  Featured 
                </a>
              </Link>
              <Link href='/rank'>
                <a className='  text-sm md:text-base lg:text-lg text-white w-full flex justify-center hover:text-red-600 hover:bg-gray-800 transition-all duration-200 ease-in-out'>
                  Rankings 
                </a>
              </Link>
          </div>
        </div>
        </div>
        
      </nav>
    </>
  );
};

