import React from 'react';
import TimLineLi from './componant/timLineLi';

const TimeLIne = () => {
    return (
        <div>
            <ul className='list-none pl-3'>
                <h2 id='education' className='text-primary mb-4 mt-3 text-2xl'>EDUCATION</h2>
                <li className='border-b-[1px] border-gray-300 mb-8'>
                    <TimLineLi
                        expra="College student"
                        company="Menoufia University"
                        datafrom="2019"
                        datato="Current"
                        describe="I study in the College of Commerce and I am currently in my final year"
                    />
                </li>
                {/* /////////add more work experience here////////////////// */}
                <h2 id='exprience'  className='text-primary mb-4 mt-20 text-2xl'>WORK EXPERIENCE</h2>
                <li className='border-b-[1px] border-gray-300 mb-8'>
                    <TimLineLi
                        expra="Senior Developer"
                        company="Freelancer"
                        datafrom="2021"
                        datato="Current"
                        describe="Here I had mastered most of the programming languages ​​for the front-end of the site and had already started in the back-end languages"
                    />
                </li>
                <li className='border-b-[1px] border-gray-300 mb-8'>
                    <TimLineLi
                        expra="Junior Developer"
                        company="Freelancer"
                        datafrom="2019"
                        datato="2021"
                        describe="Here I actually started learning most of the basic languages that help me build a website"
                    />
                </li>
                <li className='border-b-[1px] border-gray-300 mb-8'>
                    <TimLineLi
                        expra="Beginner Developer"
                        company="Freelancer"
                        datafrom="2018"
                        datato="Current"
                        describe="I started my freelance business while I was continuing my university education, and I was good at simple jobs"
                    />
                </li>
            </ul>
        </div>
    );
}

export default TimeLIne;
