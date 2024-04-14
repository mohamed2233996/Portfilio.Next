import React from 'react';
import ProgCard from './progCard';

const Skills = () => {
    return (
        <div className='skillsSction' id='skills'>
            <h2  className='text-primary mb-4 mt-3 text-2xl'>Skills</h2>
            <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4'>
                <ProgCard
                title='HTML'
                lastW="100%"
                lastM="60%"
                value="90%"/>
                <ProgCard
                title='CSS'
                lastW="90%"
                lastM="95%"
                value="90%"/>
                <ProgCard
                title='Javascript'
                lastW="80%"
                lastM="91%"
                value="88%"/>
                <ProgCard
                title='React'
                lastW="90%"
                lastM="90%"
                value="60%"/>
                <ProgCard
                title='Redux'
                lastW="90%"
                lastM="80%"
                value="89%"/>
                <ProgCard
                title='Bootstrap'
                lastW="70%"
                lastM="90%"
                value="80%"/>
                <ProgCard
                title='Git'
                lastW="90%"
                lastM="70%"
                value="80%"/>
            </div>
        </div>
    );
}

export default Skills;
