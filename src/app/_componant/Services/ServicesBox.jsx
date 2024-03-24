import React from 'react';

const ServicesBox = (props) => {
    return (
        <div className='flex justify-center items-center flex-col p-4'>
            <div className="text-[35px] text-primary my-6 icon transition  ease-in delay-250">{props.icon}</div>
            <div className='text-center flex justify-center items-center flex-col'>
                <h2 className='text-[18px] text-gray-800'>{props.title}</h2>
                <span className='w-[50px] h-[1px] my-4 bg-primary span '></span>
                <p className='text-gray-400'>{props.text}</p>
            </div>
        </div>
    );
}

export default ServicesBox;
