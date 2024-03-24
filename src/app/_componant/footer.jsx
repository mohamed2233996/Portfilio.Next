import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pt-14 px-4 bg-black">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className='pr-4'>
                        <h3 className="text-white text-2xl font-bold mb-4">About</h3>
                        <p className="text-gray-500">My name is Mohamed, I am a 22 years old web developer based in Egypt.</p>
                        <p className="text-gray-500">I love to learn new things and I am always looking for new opportunities.</p>
                        <div className='my-4 flex justify-start items-center flex-row'>
                            <a className='text-[20px] text-white mr-3 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center hover:text-primary' href='https://www.facebook.com/profile.php?id=100009619593004'><FaFacebookF /></a>
                            <a className='text-[20px] text-white mr-3 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center hover:text-primary' href='https://www.linkedin.com/in/m7amed-gamal-1152992a4/'><FaLinkedinIn /></a>
                            <a className='text-[20px] text-white mr-3 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center hover:text-primary' href='https://www.instagram.com/m7amed_gamal1/'><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='pr-4'>
                        <h3 className="text-white text-2xl font-bold mb-4">Links</h3>
                        <ul>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#About"> About </a>
                            </li>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#Resume"> Resume </a>
                            </li>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#Services"> Services </a>
                            </li>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#Projects"> Projects </a>
                            </li>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#MyBlog"> My Blog </a>
                            </li>
                            <li className='flex justify-start flex-row items-center text-white hover:text-primary w-fit'>
                                <AiOutlineArrowRight className=' mr-2' />
                                <a className="text-gray-500" href="#Contact"> Contact </a>
                            </li>
                        </ul>
                    </div>
                    <div className='pr-4'>
                        <h3 className="text-white text-2xl font-bold mb-4">Contact</h3>
                        <div>
                            <div className='mb-2 flex justify-start items-center flex-row'>
                                <div className='mr-2 text-white'><AiOutlinePhone /></div>
                                <p className='text-gray-500'>01025402633</p>
                            </div>
                            <div className='mb-2 flex justify-start items-center flex-row'>
                                <div className='mr-2 text-white'><AiOutlineMail /></div>
                                <p className='text-gray-500'>Medomano771@gmail.com</p>
                            </div>
                            <div className='mb-2 flex justify-start items-center flex-row'>
                                <div className='mr-2 text-white'><AiOutlineHome /></div>
                                <p className='text-gray-500'>Menof Monofia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='scetionP text-white text-center'>Copyright ©2024 All rights reserved | This template is made with❤️by Mohamed Gamal</p>
            </div>
        </footer>
    );
}

export default Footer;
