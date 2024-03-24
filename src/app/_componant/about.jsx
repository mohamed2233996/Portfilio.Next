import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='about' id='About'>
            <div className='container m-auto'>
                <div className="flex md:justify-center">
                    <div className="hidden md:block w-1/2 h-[750px] bg-no-repeat bg-cover bg-center bg-[url('/about.png')]">
                    </div>
                    <div className="md:w-1/2 pl-8 p-3 py-12">
                        <h1 className="text-5xl mb-6">About Me</h1>
                        <p className="text-xl mb-6 text-gray-500">My name is Mohamed, I am a 22 years old web developer based in Egypt.</p>
                        <ul>
                            <li className='flex mb-4 '>
                                <strong className='w-[80px]'>Name :</strong> <span className='text-gray-400'>Mohamed Gamal Ragap</span>
                            </li>
                            <li className='flex mb-4 '>
                                <strong className='w-[80px]'>Age :</strong> <span className='text-gray-400'>22 Years Old</span>
                            </li>
                            <li className='flex mb-4 '>
                                <strong className='w-[80px]'>Address :</strong> <span className='text-gray-400'>Menof ,Menofia</span>
                            </li>
                            <li className='flex mb-4 '>
                                <strong className='w-[80px]'>Phone :</strong> <span className='text-gray-400'>01025302633</span>
                            </li>
                            <li className='flex mb-4 '>
                                <strong className='w-[80px]'>Email :</strong> <span className='text-gray-400'>medomano771@gmail.com</span>
                            </li>
                        </ul>
                        <p className='text-[20px] mt-12 mb-4'><span className=' mr-2 text-primary'>23</span>Project complete</p>
                        <button className='bg-primary rounded-full p-3 text-white hover:bg-sky-900'><a href="https://drive.google.com/file/d/1I9M0zu6W0uWZdMCAENaCWUVAhHVTG2xP/view?usp=drive_link">Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
