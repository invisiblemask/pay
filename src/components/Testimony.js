import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import client from '../assets/client.jpg'
import rating from '../assets/rating.svg'

const Testimony = () => {
    return (
        <div>
            <div className='my-32 lg:px-24 lg:my-48'>
                <div className='px-4 my-12 lg:flex lg:flex-row lg:justify-between 2xl:justify-evenly md:flex md:gap-4'>
                    <div className='flex flex-col lg:w-96'>
                        <div className='border self-start rounded-2xl px-2 text-cyan-500 bg-indigo-50 text-xs font-semibold'>
                            TESTIMONY
                        </div>
                        <div className='mt-4'>
                            <p className='flex flex-col text-3xl font-bold leading-snug'>
                                What others are saying about us
                            </p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-600 w-3/4 mt-2 lg:mt-6 lg:leading-loose'>
                                Join hundreds of companies embracing Strategic Finance with Pay
                            </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <img
                                    src={rating}
                                    alt=""
                                    className='h-16'
                                />
                                <span className='text-xs'>4.9</span>
                            </div>
                            <p className='text-sm text-gray-600 mt-0'>REVIEW FROM TRUSTPILOT</p>
                        </div>
                    </div>
                    <div>
                        <div className='relative flex flex-col lg:flex-row md:flex-row gap-8 lg:gap-1 p-4 shadow-xl rounded-2xl border mt-8 lg:mt-0'>
                            <img
                                src={client}
                                alt=""
                                className='rounded-2xl lg:h-56 h-72'
                            />
                            <div className='lg:px-10'>
                                <h2 className='font-bold mb-2'>stripe</h2>
                                <p className='text-sm font-semibold lg:w-56 lg:leading-loose'>"Simple, seamless processing. Payroll reduces the number of third parties we work with."</p>
                                <h3 className='mt-3 text-xs'>Maria Evelyn</h3>
                                <h4 className='mt-1 text-xs text-gray-600'>Project Manager at Stripe</h4>
                            </div>
                            <div className='lg:absolute h-10 w-10 bg-transparent hover:bg-white cursor-pointer text-black rounded-full hidden lg:block text-2xl -right-4 lg:bottom-28 md:bottom-36 shadow-3xl border border-gray-300 p-2 md:absolute md:block'>
                                <BiRightArrowAlt />
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mt-10 justify-center lg:mt-12'>
                            <div className='w-3 h-3 ring-1 ring-cyan-400 bg-gray-100 rounded-full flex items-center justify-center'>
                                <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
                            </div>
                            <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                            <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony