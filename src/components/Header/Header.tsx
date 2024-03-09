import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='w-full h-[70px] flex items-center border-b border-zinc-800 bg-zinc-950'>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className='w-[200px] h-[50px]'>
            <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          {/* start component navbar */}
          <Navbar containerStyle='hidden md:flex' />
          {/* end component navbar */}
          <div className=''>
            {/* start menu bar */}
            <button className='text-xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars />
            </button>
            {/* end menu bar */}
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Header
