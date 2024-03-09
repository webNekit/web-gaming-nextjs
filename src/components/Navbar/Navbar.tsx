import React from 'react';

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-center gap-4"></menu>
    </nav>
  )
}

export default Navbar;
