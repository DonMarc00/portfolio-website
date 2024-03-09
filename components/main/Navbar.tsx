"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Socials } from "@/constants";
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 px-10'>
        <nav className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          {/* FIXME: If I change the anchor to a Link, the root page changes to some sort of light mode */}
            <a href="/" className="h-auto w-auto flex flex-row items-center">
                <Image src="/NavLogo.png" width={70} height={70} alt="Logo" className='cursor-pointer hover:animate-slowspin'/>
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Marc Novak
                </span>
            </a>
            <button className='menu md:hidden block hamburger text-white' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close" : "Menu"}
            </button>
            {menuOpen ? (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-[500px] h-auto md:h-full md:visible bg-[#030014e8] md:bg-transparent py-4 md:py-0 absolute top-full left-0 z-50 md:static md:shadow-none shadow-md text-white">
                <Link href="/" className="py-2 md:py-0 md:mx-2 block text-center hover:text-blue-500">Home</Link>
                <Link href="/timeline" className="py-2 md:py-0 md:mx-2 block text-center">Timeline</Link>
                <a href="#skills" className="py-2 md:py-0 md:mx-2 block text-center">Skills</a>
                <Link href="/projects" className="py-2 md:py-0 md:mx-2 block text-center">Projects</Link>
              </div>
           ) : (
             <div className="hidden md:flex md:w-[500px] h-full md:flex-row items-center justify-between md:mr-20 md:visible">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                    <Link href="/">Home</Link>
                    <Link href="/timeline">Timeline</Link>
                    <a href="#skills">Skills</a>
                    <Link href="/projects">Projects</Link>
                </div>
             </div>
           )}
           <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
        </nav>
    </div>
  );
}

export default Navbar