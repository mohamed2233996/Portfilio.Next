'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { PiListFill } from "react-icons/pi";
// import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [open, setOpen] = useState(false);

    // dark mod
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    // dark mod

    ///////
    useEffect(() => {
        const scetionDiv = document.querySelectorAll('.scetionDiv')
        const linksitems = document.querySelectorAll('.links a')
        function handelactive() {
            window.onscroll = () => {
                scetionDiv.forEach(sec => {
                    let top = window.scrollY;
                    let offest = sec.offsetTop - 100;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');
                    if (top >= offest && top < offest + height) {
                        linksitems.forEach(link => {
                            link.classList.remove("active-link");
                            let activeLink = document.querySelector('.links a[href*=' + id + ']');
                            activeLink.classList.add("active-link")
                        })
                    }
                })
            }
        }
        return () => {
            handelactive();
        };
    });



    return (
        <header className="bg-black md:bg-white dark:bg-darkbg dark:border-b-2 dark:text-white shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block tracking-wider text-white md:text-black dark:text-white text-[30px] font-black" href="#">
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
                            <ul className="flex items-center gap-6 text-sm links">
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#About"> About </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#Timeline"> Timeline </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#Services"> Services </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#Projects"> Projects </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#Hire"> Hire Me </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 dark:text-white transition hover:border-b-primary hover:border-b-[3px]" href="#Contact"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {open ?
                        <div className="Dropdown links md:hidden absolute w-full h-auto top-[65px] right-0 z-10 bg-black rounded-b-md shadow-md">
                            <ul className="flex flex-col pr-3 text-sm p-3">
                                <li className='mb-5'>
                                    <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#About"> About </a>
                                </li>
                                <li className='mb-5'>
                                    <a className="text-white transition  hover:border-b-primary hover:border-b-[3px]" href="#Timeline"> Timeline </a>
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
                        </div> : <div></div>}

                    {/* dark mod */}

                    <button onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
                        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="fill-primary block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    {/* ///// */}
                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button onClick={() => { setOpen(!open) }}>
                                <PiListFill className='text-white text-[22px] openbtn' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
