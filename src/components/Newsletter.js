import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <div className='lg:relative px-4 my-10 lg:px-24'>
                <div className='lg:absolute lg:-top-20 flex bg-cyan-500 gap-4 px-4 py-8 rounded-3xl lg:p-12 lg:justify-between lg:gap-16 lg:ml-44'>
                    <p className='text-xl font-bold lg:w-72 lg:text-3xl'>Get started today for better future finance</p>
                    <div className='lg:w-80'>
                        <p className='text-xs text-gray-300 lg:leading-loose'>Pay is a compass for business leaders, scale with checking and savings accounts, custom tools, and access to our investor network</p>
                        <div>
                            <div className='relative mt-8 flex items-center'>
                                <div className='border rounded-3xl px-4 py-3 pr-14 outline-none text-xs bg-white'>
                                    <input
                                        type="email"
                                        placeholder='Your work email'
                                        className='py-1 outline-none text-2xs w-3/4'
                                    />
                                </div>
                                <button className='bg-cyan-600 text-white rounded-3xl p-3 absolute text-2xs right-1 lg:right-12 font-bold'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter