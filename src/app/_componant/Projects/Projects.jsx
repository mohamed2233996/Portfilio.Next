'use client'
import React from 'react';
import { projects } from './myproject';
import { AiOutlineSelect } from "react-icons/ai";

const Projects = () => {
    return (

        <div id='Projects' className='scetionP'>
            <div className='container m-auto'>
                <h1 className='text-center text-5xl font-extrabold mb-4'>Projects</h1>
                <p className='text-center text-gray-500'>In this section, our previous work and projects will be revealed</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {projects.projects.map((item) =>{
                        return(
                            <a href={item.link} key={item.id} style={item.style} className='relative transition ease-in-out delay-300 overflow-hidden w-full h-[300px] bg-cover bg-no-repeat bg-center flex justify-center items-center prog-cont'>
                                <div className='hidden over w-full h-full absolute bg-primary opacity-90 transition ease-in-out delay-300'></div>
                                <div className='hidden over-text transition ease-in-out delay-300 z-10 text-center'>
                                    <h2 className='text-2xl text-white mb-3'>{item.title}</h2>
                                    <p className=' text-white'>{item.desc}</p>
                                    <span className='text-white text-[30px]'><AiOutlineSelect className='m-auto mt-6' /></span>
                                </div>
                            </a>
                        )
                    }
                    )}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
                    {projects.mydone.map((item) =>{
                        return(
                            <div key={item.id} className='shadow-lg rounded-lg flex justify-center items-center flex-col p-2'>
                                <h2 className='mb-4 text-3xl font-black text-primary'>{item.cont}</h2>
                                <h3 className='text-gray-500'>{item.title}</h3>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
