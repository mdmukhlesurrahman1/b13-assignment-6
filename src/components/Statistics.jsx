import React from 'react';

const Statistics = () => {
    return (
        <div className='w-full max-w-400 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 lg:py-15'>
            <div className='w-[95%] md:w-[85%] max-w-300 mx-auto grid grid-cols-3 text-white text-center'>

                <div className='border-r-3 border-gray-300'>
                    <h2 className='font-extrabold text-3xl lg:text-6xl mb-2'>50K+</h2>
                    <p className='text-xs lg:text-xl'>Active Users</p>
                </div>

                <div className='border-r-3 border-gray-300'>
                    <h2 className='font-extrabold text-3xl lg:text-6xl mb-2'>200+</h2>
                    <p className='text-xs lg:text-xl'>Premium Tools</p>
                </div>

                <div>
                    <h2 className='font-extrabold text-3xl lg:text-6xl mb-2'>4.9</h2>
                    <p className='text-xs lg:text-xl'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;