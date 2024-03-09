import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Главная', url: '/' },
  { label: 'О нас', url: '/about' },
  { label: 'Акции', url: '/sales' },
  { label: 'Каталог', url: '/catalog' },
  { label: 'Контакты', url: '/contacts' }
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            </>
          );
        })}
      </menu>
    </nav>
  )
}

export default NavbarMobile
