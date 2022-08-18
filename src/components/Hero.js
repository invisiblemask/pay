import React from 'react'
import uber from '../assets/uber.svg'
import amazon from '../assets/amazon.svg'
import ebay from '../assets/ebay.svg'
import walmart from '../assets/walmart.svg'
import masterCard from '../assets/mastercard.svg'

const Hero = () => {
    return (
        <div>
            <div className='mt-14'>
                <div className='lg:flex lg:px-24 lg:gap-10 px-4'>
                    <div className='lg:w-2/5'>
                        <div className='flex flex-col'>
                            <div className='border self-start rounded-2xl px-2 text-cyan-500 bg-indigo-50 text-xs font-semibold'>
                                BEST CHOICE
                            </div>
                            <div className='mt-4'>
                                <p className='flex flex-col text-5xl font-bold leading-snug'>
                                    Future strategic finance for
                                    <span className='text-cyan-500'>Entreprenuers</span>
                                </p>
                            </div>
                            <div>
                                <p className='text-sm text-gray-600'>
                                    Scale with checking and saving accounts, custom tools, and access to our investor network
                                </p>
                            </div>
                            <div>
                                <div className='relative mt-8 flex items-center'>
                                    <div className='border rounded-4xl px-4 py-4 pr-14 w-full lg:w-4/5 text-2xs lg:text-xs'>
                                        <input
                                            type="email"
                                            placeholder='Your work email'
                                            className='outline-none w-3/4 lg:w-10/12'
                                        />
                                    </div>
                                    <button className='bg-cyan-600 text-white rounded-4xl p-3 absolute text-xs right-1 lg:right-24 font-bold'>Get Started</button>
                                </div>
                            </div>
                            <div className='mt-8 flex gap-8 items-center justify-center'>
                                <img src={uber} alt="" className='w-16 lg:w-20 object-contain self-center' />
                                <img src={amazon} alt="" className='w-16 lg:w-20 object-contain self-center mt-2' />
                                <img src={ebay} alt="" className='w-16 lg:w-20 object-contain self-center' />
                                <img src={walmart} alt="" className='w-16 lg:w-20 object-contain self-center' />
                            </div>
                        </div>
                    </div>
                    <div className='relative flex-1 flex justify-center mt-32'>
                        <div className='rounded-tl-lg rounded-br-[400px] rounded-tr-[100px] rounded-r-2xl w-full h-screen lg:h-full bg-gray-50'></div>
                        <div className=''>
                            <div className=''>
                                <div className='absolute left-5 bg-white flex flex-col shadow-2xl rounded-lg p-6 -top-32'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-xs'>CARD NUMBER</h2>
                                        <div className='border px-4 py-1 rounded-md mt-1 flex items-center w-80 justify-between'>
                                            <div>**** **** **** 1253</div>
                                            <img
                                                src={masterCard}
                                                alt=""
                                                className='h-8 w-8'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div>
                                            <h2 className='text-xs'>DATE</h2>
                                            <div className='border px-4 py-1 rounded-md mt-1 w-24'>12/2022</div>
                                        </div>
                                        <div>
                                            <h2 className='text-xs'>SERIAL</h2>
                                            <div className='border px-4 py-1 rounded-md mt-1 w-24'>7689</div>
                                        </div>
                                    </div>
                                    <div className='mt-2 flex items-center'>
                                        <div className='h-3 w-3 border'></div>
                                        <span className='ml-2'>Save card</span>
                                    </div>
                                    <div className='text-white text-center bg-gray-900 text-sm p-2 rounded-2xl mt-4 font-bold'>Get Started</div>
                                </div>
                            </div>
                            <div className=''>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero