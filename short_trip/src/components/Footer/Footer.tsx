import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p className="text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Short Trip. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer