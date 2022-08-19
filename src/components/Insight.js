import React from 'react'

const Insight = () => {
    return (
        <div>
            <div className='px-4 py-12 bg-gray-50 lg:px-24 lg:py-24'>
                <div className='flex flex-col'>
                    <div className='border mx-auto rounded-2xl px-2 text-cyan-500 bg-indigo-50 text-xs font-semibold text-center'>
                        INSIGHT
                    </div>
                    <div className='mt-4'>
                        <p className='text-3xl text-center font-bold leading-snug'>
                            Magazine
                        </p>
                    </div>
                    <div className='px-8 my-2'>
                        <p className='text-xs text-center text-gray-600'>
                            Find growth insight in our blog
                        </p>
                    </div>
                </div>
                <div className='mt-6 lg:flex lg:flex-row lg:gap-10 md:flex md:gap-2'>
                    <div>
                        <div className='w-full h-56 bg-slate-900 rounded-3xl'></div>
                        <div className='my-4'>
                            <h2 className='font-semibold text-sm w-3/4'>Online Payment Failure: Why it happens and how to prevent it.</h2>
                            <p className='mt-2 text-xs text-gray-600'>January 4, 2022</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-72 bg-slate-900 rounded-3xl'></div>
                        <div className='my-4'>
                            <h2 className='font-semibold text-sm w-3/4'>Business strategy converging into a new approach for solving business.</h2>
                            <p className='mt-2 text-xs text-gray-600'>June 24, 2022</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-56 bg-slate-900 rounded-3xl'></div>
                        <div className='my-4'>
                            <h2 className='font-semibold text-sm w-3/4'>Some of trategies for quickly expanding your business</h2>
                            <p className='mt-2 text-xs text-gray-600'>August 12, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-cyan-600 self-start text-gray-100 px-3 py-2 rounded-2xl text-sm font-bold'>Read More Article</button>
                </div>
            </div>
        </div>
    )
}

export default Insight