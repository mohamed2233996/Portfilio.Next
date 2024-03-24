import React from 'react';
import TimeLIne from './componant/timeLine/timeLIne';
import Skills from './componant/Skills/skills';

const MainList = () => {
    return (
        <div  className="scetionP">
            <div className="container m-auto">
                <div className='flex flex-row'>
                    <div className='hidden md:block basis-1/4'>
                        <ul className='sticky pl-10 top-[120px]'>
                            <li className='mb-4'>
                                <a href="#education">Education</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#exprience">Experience</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#skills">Skills</a>
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
