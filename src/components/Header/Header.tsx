import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='w-full bg-zinc-950'>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className='w-[200px] h-[50px]'>
            <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <Navbar containerStyle='' />
        </div>
      </div> 
    </header>
  )
}

export default Header
