import React from 'react';
import TimeLIne from './componant/timeLine/timeLIne';
import Skills from './componant/Skills/skills';


const MainList = () => {
    return (
        <div  className="scetionP" id='Timeline'>
            <div className="container m-auto">
                <div className='flex flex-row'>
                    <div className='hidden md:block basis-1/4'>
                        <ul className='sticky pl-10 top-[120px]'>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary
                                active:before:w-4
                                active:before:mr-2
                                active:before:h-1
                                active:before:bg-primary ' href="#education">Education</a>
                            </li>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary
                                active:before:w-4
                                active:before:mr-2
                                active:before:h-1
                                active:before:bg-primary ' href="#exprience">Experience</a>
                            </li>
                            <li className='mb-4'>
                                <a className='flex justify-start items-center hover:text-primary
                                active:before:w-4
                                active:before:mr-2
                                active:before:h-1
                                active:before:bg-primary ' href="#skills">Skills</a>
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
