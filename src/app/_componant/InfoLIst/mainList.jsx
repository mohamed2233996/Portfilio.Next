'use client'
import React, { useEffect } from 'react';
import TimeLIne from './componant/timeLine/timeLIne';
import Skills from './componant/Skills/skills';

const MainList = () => {
    useEffect(() => {
    const skillsSction = document.querySelectorAll('.skillsSction')
    const skillsLinks = document.querySelectorAll('.skillsLinks a')
        function handelActive() {
            console.log(skillsSction)
            window.onscroll = () => {
                skillsSction.forEach(sec => {
                    let top = window.scrollY;
                    let offest = sec.offsetTop - 100;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');
                    console.log(`top ${top}`)
                    console.log(`offest ${offest}`)
                    console.log(`height ${height}`)
                    if (top >= offest && top < offest + height) {
                        console.log("fdhsfrdrh")
                        skillsLinks.forEach(link => {
                            link.classList.remove("active-link");
                            let activeLink = document.querySelector('.skillsLinks a[href*=' + id + ']');
                            activeLink.classList.add("active-link-list")
                        })
                    }
                })
            }
        }
        return () => {
        handelActive()
        };
    },[]);

    
    return (
        <div className="scetionP scetionDiv" id='Timeline'>
            <div className="container m-auto">
                <div className='flex flex-row'>
                    <div className='hidden md:block basis-1/4'>
                        <ul className='sticky pl-10 top-[120px] skillsLinks'>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary'
                                    href="#education">Education</a>
                            </li>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary'
                                    href="#exprience">Experience</a>
                            </li>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary'
                                    href="#skills">Skills</a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:basis-3/4'>
                        <TimeLIne />
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainList;
