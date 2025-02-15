import React from 'react'
import Logo from '../../assets/logo.png'
import Navbar from './Navbar'

const mainNavBar: React.FC = () => {
    return (
        <div className='flex w-full bg-stone-50 border-b border-stone-200 py-3 px-5'>
            {/*need to fix this*/}
            <Logo />
            <Navbar />
        </div>
    );
}