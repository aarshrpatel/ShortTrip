import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import facebook from '@/assets/facebook-icon.png'
import instagram from '@/assets/instagram-icon.png'
import linkedin from '@/assets/linkedin-icon.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center space-y-4'>
      {/* Line that separates footer from rest of page */}
      <hr className='w-full'/>

      {/* Short Trip Icon Logo */}
      <Image src={logo} alt={"logo"} width={45} height={45}/>

      {/* Links to other pages */}
      <div className="flex space-x-4 text-xs"> 
        <Link href="/" className="hover:text-red hover:underline transition-colors">Home</Link>
        <Link href="/about" className="hover:text-red hover:underline transition-colors">Our Story</Link>
        <Link href="/locations" className="hover:text-red hover:underline transition-colors">Locations</Link>
        <Link href="/contact" className="hover:text-red hover:underline transition-colors">Contact Us</Link>
        <Link href="/career" className="hover:text-red hover:underline transition-colors">Career</Link>
      </div>

      {/* Social Media Icons & Links */}
      <div className="flex space-x-4 text-xs">
        <Link href="https://www.facebook.com/shorttripstores/" target='_blank'><Image src={facebook} alt={"facebook logo"} className='w-8'/></Link>
        <Link href="https://www.instagram.com/shorttripstore/" target='_blank'><Image src={instagram} alt={"instagram logo"} className='w-8'/></Link>
        <Link href="https://www.linkedin.com/company/short-trip-stores/" target='_blank'><Image src={linkedin} alt={"linkedin logo"} className='w-8'/></Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Short Trip. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer