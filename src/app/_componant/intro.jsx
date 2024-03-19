'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div className='intro h-[1000px] relative'>
            <div className='bg-scwhite absolute w-1/2 h-full -z-10'></div>
            <div className='container mx-auto h-full flex flex-col justify-center items-center'>
                <div className='p-2 text-center'>
                    <h4 className='text-primary text-[30px] mb-3'>Hi! ,I am</h4>
                    <h1 className='text-[50px] font-bold mb-3'>Mohamed Gamal</h1>
                    <h4 className='text-primary text-[35px] mb-3'>
                        <Typewriter
                            options={{
                                strings: ['Web developer', 'Web designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Intro;
