import React from 'react'
import NavbarItems from './navbarItems'

const navigationItems = [
    { label: 'Home', isActive: false },
    { label: 'Our Story', isActive: false },
    { label: 'Locations', isActive: false },
    { label: 'Contact Us', isActive: false },
];

const Navbar = () => {
    return (
        <div className='flex sm:hidden w-full bg-stone-50 border-b border-stone-200 py-3 px-5'>
            {navigationItems.map((item, index) => (
                <NavbarItems key={index} label={item.label} isActive={item.isActive} />
            ))}
        </div>
    );
};

export default Navbar;