import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <div className='lg:relative md:relative px-4 my-10 lg:px-24 2xl:flex'>
                <div className='lg:absolute md:absolute md:-top-20 lg:-top-20 flex bg-cyan-500 gap-4 px-4 py-8 rounded-3xl lg:p-12 md:p-12 lg:justify-between lg:gap-16 lg:ml-44 md:ml-3 2xl:left-14 2xl:w-3/4'>
                    <p className='text-xl font-bold lg:w-72 md:w-72 2xl:w-full lg:text-3xl md:text-3xl 2xl:text-4xl'>Get started today for better future finance</p>
                    <div className='lg:w-80 md:w-80 2xl:w-full'>
                        <p className='text-xs text-gray-300 lg:leading-loose 2xl:text-base'>Pay is a compass for business leaders, scale with checking and savings accounts, custom tools, and access to our investor network</p>
                        <div>
                            <div className='relative mt-8 flex items-center'>
                                <div className='border rounded-3xl px-4 py-3 pr-14 outline-none text-xs bg-white 2xl:w-full 2xl:py-6 2xl:rounded-5xl 2xl:pl-8'>
                                    <input
                                        type="email"
                                        placeholder='Your work email'
                                        className='py-1 outline-none text-2xs lg:text-xs w-3/4 md:w-1/2 md:text-xs 2xl:py-2 2xl:text-sm'
                                    />
                                </div>
                                <button className='bg-cyan-600 text-white rounded-3xl p-3 lg:p-4 absolute text-2xs lg:text-xs 2xl:text-sm 2xl:p-7 2xl:rounded-5xl 2xl:right-1 md:text-xs right-1 lg:right-4 md:right-4 font-bold'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter