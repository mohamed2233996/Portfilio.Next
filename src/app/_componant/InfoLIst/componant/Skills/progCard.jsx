import React from 'react';

const ProgCard = (props) => {
    return (
        <div className='w-[200px] shadow-lg rounded-sm h-[250px] mb-10 flex items-center justify-center flex-col'>
            <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">{props.value}</div>
            <h2 className='mt-3 text-[20px]'>{props.title}</h2>
            <div className='flex flex-row justify-center my-2 py-3'>
                <div className='flex items-center flex-col'>
                    <span className='mb-2'>{props.lastW}</span>
                    <span className="text-gray-400 text-[10px]">Last Week</span>
                </div>
                <div className='w-[1px] mx-4 h-full bg-gray-400'></div>
                <div className='flex items-center flex-col'>
                    <span className='mb-2'>{props.lastM}</span>
                    <span className='text-gray-400 text-[10px]'>Last month</span>
                </div>
            </div>
        </div>
    );
}

export default ProgCard;
