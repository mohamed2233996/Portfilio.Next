import React from 'react';
import { BsCalendar2Heart } from "react-icons/bs";


const TimLineLi = (props) => {
    return (
        <div className='flex justify-start'>
            <div className='bg-primary rounded-full mr-4 min-w-[55px] h-[55px] text-white flex items-center justify-center text-[20px]'>
                <BsCalendar2Heart />
            </div>
            <div className='pl-2 mb-10'>
                <p className='text-primary'><span> {props.datafrom}</span> -<span> {props.datato}</span></p>
                <h2 className='text-2xl'>{props.expra}</h2>
                <p className='text-gray-600'>
                    {props.company}
                </p>
                <p className='text-gray-400'>{props.describe}</p>
            </div>
        </div>
    );
}

export default TimLineLi;
