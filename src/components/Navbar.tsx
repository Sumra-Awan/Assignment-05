import React from 'react';
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>SUMRA AWAN</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menulink'><a href='#hero'>HOME</a></li>
            <li className='menulink'><a href='#about'>ABOUT</a></li>
            <li className='menulink'><a href='#projects'>PROJECTS</a></li>
            <li className='menulink'><a href='#skills'>SKILLS</a></li>
            <li className='menulink'><a href='#contact'>CONTACT</a></li>
        </ul>
        <CgMenuRound className='md:hidden' size={30} />
        </div>

    </div>
  )
}

export default Navbar