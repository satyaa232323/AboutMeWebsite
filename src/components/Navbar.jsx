import { func } from 'prop-types'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl items-center flex justify-between py-4'>
       <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-white text-3xl'>Satya</h1>
       </div>
       <div className='m-8 flex justify-center gap-4 items-center text-2xl text-white'>
        <a href="https://www.linkedin.com/in/muhammad-attala-aryasatya-82a6002a3/">
        <FaLinkedin/>
        </a>
        <a href="https://www.instagram.com/attalasatya/">
        <FaInstagram/>
        </a>
        <a href="https://github.com/satyaa232323/">
        <FaGithub/>
        </a>
        
       </div>
    </div>
  )
}

