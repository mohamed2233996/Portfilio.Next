'use client'
import React, { useState } from 'react';
import { PiListFill } from "react-icons/pi";

const Header = () => {
        const[open, setOpen]= useState(false);

    return (
        <header className="bg-black md:bg-white shadow-md relative">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block tracking-wider text-white md:text-black text-[30px] font-black" href="#">
                            <span className="text-white relative z-10
                        after:content['*']
                        after:absolute
                        after:w-12
                        after:h-12
                        after:-z-10
                        after:right-[-2px]
                        after:rounded-full
                        after:bg-primary">M</span>edo
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#About"> About </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Resume"> Resume </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Services"> Services </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Projects"> Projects </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#MyBlog"> My Blog </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Contact"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {open ?
                    <div className="Dropdown md:hidden absolute w-full h-auto top-[65px] right-0 z-10 bg-black rounded-b-md shadow-md">
                        <ul className="flex flex-col pr-3 text-sm p-3">
                            <li className='mb-5'>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#About"> About </a>
                            </li>
                            <li className='mb-5'>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#Resume"> Resume </a>
                            </li>
                            <li className='mb-5'>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#Services"> Services </a>
                            </li>
                            <li className='mb-5'>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#Projects"> Projects </a>
                            </li>
                            <li className='mb-5'>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#MyBlog"> My Blog </a>
                            </li>
                            <li className=''>
                                <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#Contact"> Contact </a>
                            </li>
                        </ul>
                    </div> :<div></div>}

                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button onClick={()=>{setOpen(!open)}}>
                                <PiListFill className='text-white text-[22px] ' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
