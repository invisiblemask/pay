import React from 'react'
import { IoCheckmark } from 'react-icons/io5'
import stars from '../assets/stars.svg'
import uber from '../assets/uber.svg'
import amazon from '../assets/amazon.svg'
import ebay from '../assets/ebay.svg'
import walmart from '../assets/walmart.svg'
import airbnb from '../assets/airbnb.svg'

const Pricing = () => {
    return (
        <div>
            <div className='px-4 my-10 lg:px-24'>
                <div className='flex flex-col'>
                    <div className='border mx-auto rounded-2xl px-2 text-cyan-500 bg-indigo-50 text-xs font-semibold text-center'>
                        PRICING PLAN
                    </div>
                    <div className='mt-4'>
                        <p className='text-3xl text-center font-bold leading-snug'>
                            Choose Package
                        </p>
                    </div>
                    <div className='px-8 my-2'>
                        <p className='text-xs text-center text-gray-600'>
                            Join our pro features for unlimited without any contract and cancel anytime.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='flex items-center gap-2'>
                        <div className='text-gray-600 text-xs lg:text-sm'>Monthly</div>
                        <div className='flex relative items-center'>
                            <div className='w-10 h-5 border bg-gray-200 rounded-3xl'></div>
                            <div className='w-4 h-4 border bg-cyan-600 rounded-full absolute right-1'></div>
                        </div>
                        <div className='text-cyan-500 text-xs lg:text-sm'>Yearly</div>
                    </div>
                </div>
                <div className='mt-8 lg:flex lg:flex-row lg:items-start md:flex md:flex-row'>
                    <div className='flex flex-col bg-gray-50 p-4 sm:rounded-3xl md:h-1/2 lg:rounded-l-3xl md:rounded-l-3xl mb-6 lg:mb-0 md:mb-0 md:mt-10 lg:mt-10 lg:p-6 md:p-6 md:gap-6 lg:gap-5'>
                        <h2 className='font-bold lg:text-xl'>Basic</h2>
                        <p className='text-gray-600 text-xs lg:text-sm md:text-sm mt-2'>Kickstart product research in your business at no cost</p>
                        <p className='mt-2'>
                            <span className='font-bold text-xl'>$199</span>
                            <span className='text-xs lg:text-sm md:text-sm text-gray-600'>/month</span>
                        </p>
                        <button className='ring-1 ring-cyan-600 px-4 py-2 rounded-3xl mt-5 self-center w-3/4 bg-white font-bold'>Book demo</button>
                    </div>
                    <div className='bg-slate-900 rounded-3xl mb-6'>
                        <div className='bg-slate-700 rounded-t-3xl flex justify-center items-center gap-2 py-2'>
                            <img
                                src={stars}
                                alt=""
                                className='h-3 w-3'
                            />
                            <span className='text-white text-sm'>MOST POPULAR</span>

                        </div>
                        <div className='p-4 flex flex-col lg:px-6'>
                            <h2 className='text-white lg:text-xl'>Pro</h2>
                            <p className='text-gray-400 font-bold text-xs mt-2 w-3/4 leading-loose lg:text-sm md:text-sm'>Fuel your product workflow with more advanced research features</p>
                            <p className='mt-2'>
                                <span className='font-bold text-xl text-white'>$250</span>
                                <span className='text-xs text-gray-600'>/month</span>
                            </p>
                            <button className='px-4 py-2 rounded-3xl mt-5 self-center w-3/4 bg-cyan-600 text-white font-bold'>Book demo</button>
                        </div>
                        <div className='p-4 flex flex-col gap-4 pb-10'>
                            <div className='flex items-center text-gray-600'>
                                <div className='h-4 w-4 rounded-full bg-gray-700 mr-3 text-black'>
                                    <IoCheckmark />
                                </div>
                                <span className='text-sm'>Unlimited workspace</span>
                            </div>
                            <div className='flex items-center text-gray-600'>
                                <div className='h-4 w-4 rounded-full bg-gray-700 mr-3 text-black'>
                                    <IoCheckmark />
                                </div>
                                <span>Access to RestAPI</span>
                            </div>
                            <div className='flex items-center text-gray-600'>
                                <div className='h-4 w-4 rounded-full bg-gray-700 mr-3 text-black'><IoCheckmark /></div>
                                <span className='text-sm'>48 hours support response time</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-50 p-4 rounded-3xl mb-6 lg:mb-0 md:mb-0 md:mt-10 md:p-6 md:gap-5 md:h-1/2 lg:mt-10 lg:p-6 lg:gap-5'>
                        <h2 className='font-bold lg:text-xl md:text-xl'>Enterprise</h2>
                        <p className='text-gray-600 text-xs mt-2 lg:text-sm md:text-sm lg:w-80'>Scale product research and learning across your company</p>
                        <p className='mt-2'>
                            <span className='font-bold text-xl'>$499</span>
                            <span className='text-xs text-gray-600'>/month</span>
                        </p>
                        <button className='ring-1 ring-cyan-600 px-4 py-2 rounded-3xl mt-5 self-center w-3/4 bg-white font-bold'>Book demo</button>
                    </div>
                </div>
                <div>
                    <p className='text-center text-sm text-gray-600 mt-4 lg:text-base'>Join these amazing companies who already use Pay</p>
                </div>
                <div className='mt-8 flex lg:gap-8 gap-4 items-center justify-center'>
                    <img src={uber} alt="" className='w-12 lg:w-20 md:w-20' />
                    <img src={amazon} alt="" className='w-12 lg:w-20 md:w-20' />
                    <img src={ebay} alt="" className='w-12 lg:w-20 md:w-20' />
                    <img src={walmart} alt="" className='w-12 lg:w-20 md:w-20' />
                    <div className='flex items-center'>
                        <img src={airbnb} alt="" />
                        <span className='font-bold text-sm'>airbnb</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing