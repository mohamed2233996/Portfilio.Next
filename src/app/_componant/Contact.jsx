import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFacebook } from "react-icons/ai";

const Contact = () => {
    return (
        <div id='Contact' className=' pt-[7em] pb-0 scetionDiv'>
            <div className='container m-auto'>
                <h1 className='text-center text-5xl font-extrabold mb-4'>Contact Me</h1>
                <p className='text-center text-gray-500'>Here all means of communication are available</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className='p-6 shadow-2xl flex justify-center items-center flex-col'>
                        <div className='mb-4 w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center text-white text-[30px]'><AiOutlinePhone /></div>
                        <h2 className='mb-4'>Phone</h2>
                        <p className='text-gray-500'>01025402633</p>
                    </div>
                    <div className='p-6 shadow-2xl flex justify-center items-center flex-col'>
                        <div className='mb-4 w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center text-white text-[30px]'><AiOutlineMail /></div>
                        <h2 className='mb-4'>Email</h2>
                        <p className='text-gray-500'>Medomano771@gmail.com</p>
                    </div>
                    <div className='p-6 shadow-2xl flex justify-center items-center flex-col'>
                        <div className='mb-4 w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center text-white text-[30px]'><AiOutlineHome /></div>
                        <h2 className='mb-4'>Address</h2>
                        <p className='text-gray-500'>Menof Monofia</p>
                    </div>
                    <div className='p-6 shadow-2xl flex justify-center items-center flex-col'>
                        <div className='mb-4 w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center text-white text-[30px]'><AiOutlineFacebook /></div>
                        <h2 className='mb-4'>Name</h2>
                        <p className='text-gray-500'>Mhamed Gamal</p>
                    </div>
                </div>
                <div className="flex lg:flex-row md:justify-center mt-6 flex-col items-center">
                    <div className="order-last lg:-order-1 w-fill-available lg:w-1/2 h-[750px] bg-no-repeat bg-cover bg-center bg-[url('/about.png')]"></div>
                    <div className='p-8'>
                        <form action="">
                            <div className="mb-4">
                                <input
                                    className="shadow-md mb-6 border rounded w-full py-2 px-3 text-gray-700 dark:text-white focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                                <input
                                    className="shadow-md mb-6 border rounded w-full py-2 px-3 text-gray-700 dark:text-white focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                                <input
                                    className="shadow-md mb-6 border rounded w-full py-2 px-3 text-gray-700 dark:text-white focus:outline-none focus:shadow-outline"
                                    id="supject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <textarea
                                    className="shadow-md mb-6 border rounded w-full py-2 px-3 text-gray-700 dark:text-white focus:outline-none focus:shadow-outline"
                                    id="message"
                                    type="text"
                                    placeholder="Your Message"
                                />
                                <button
                                    className="shadow-md  rounded-full py-2 px-3 border-[1px] border-primary text-white bg-primary hover:bg-white hover:text-primary"
                                    type="submit">Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
