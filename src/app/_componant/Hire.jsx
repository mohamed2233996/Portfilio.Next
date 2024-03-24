import React from 'react';

const Hire = () => {
    return (
        <div className="scetionP relative bg-[url('/b.jpg')] bg-cover bg-center bg-no-repeat">
            <div className='w-full h-full absolute bg-primary opacity-70 top-0 left-0'></div>
            <div className='container m-auto flex justify-center items-center flex-col relative text-center'>
                <h1 className='text-5xl text-white font-black my-6'>I'm <span className='text-green-500'>Available</span> for freelancing</h1>
                <p className='text-white mb-6 text-[18px]'>Available for any job, all you have to do is contact us to start immediately</p>
                <button className='text-white text-[18px] bg-primary rounded-full px-5 py-2 hover:bg-white hover:text-primary'>HIRE ME</button>
            </div>
        </div>
    );
}

export default Hire;
