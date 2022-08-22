import React from 'react'
import uber from '../assets/uber.svg'
import amazon from '../assets/amazon.svg'
import ebay from '../assets/ebay.svg'
import walmart from '../assets/walmart.svg'
import masterCard from '../assets/mastercard.svg'
import creditCard from '../assets/credit.png'
import blackCredit from '../assets/creditblack.png'

const Hero = () => {
    return (
        <div>
            <div className='mt-14'>
                <div className='lg:flex lg:px-24 lg:gap-10 md:gap-10 px-4 md:flex'>
                    <div className='lg:w-2/5 md:w-1/2'>
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
                                    <div className='border rounded-4xl px-4 py-4 lg:py-5 pr-14 w-full lg:w-4/5 text-2xs lg:text-xs'>
                                        <input
                                            type="email"
                                            placeholder='Your work email'
                                            className='outline-none w-3/4 lg:w-10/12'
                                        />
                                    </div>
                                    <button className='bg-cyan-600 text-white rounded-4xl p-3 lg:p-4 absolute text-xs right-1 lg:right-24 font-bold'>Get Started</button>
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
                    <div className='relative flex-1 lg:flex justify-center mt-32 hidden md:flex'>
                        <div className='rounded-tl-[200px] rounded-br-[400px] rounded-tr-[200px] w-3/4 h-screen md:h-full lg:h-full bg-gray-50 rounded-l-4xl'></div>
                        <div className=''>
                            <div className=''>
                                <div className='bg-opacity-60 backdrop-filter backdrop-blur-lg absolute lg:left-36 left-0 flex flex-col shadow-xl rounded-2xl border p-6 -top-32'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-xs lg:text-xs md:text-2xs 2xl:text-base'>CARD NUMBER</h2>
                                        <div className='border px-4 py-1 rounded-md mt-1 flex items-center w-80 lg:w-80 2xl:w-96 md:w-60 justify-between'>
                                            <div className='lg:text-sm md:text-2xs 2xl:text-base'>**** **** **** 1253</div>
                                            <img
                                                src={masterCard}
                                                alt=""
                                                className='h-8 w-8'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-4'>
                                        <div>
                                            <h2 className='lg:text-xs text-xs md:text-2xs 2xl:text-base'>DATE</h2>
                                            <div className='border px-4 py-1 rounded-md mt-1 w-24 md:text-2xs lg:text-xs 2xl:text-base'>12/2022</div>
                                        </div>
                                        <div>
                                            <h2 className='text-xs md:text-2xs lg:text-xs 2xl:text-base'>SERIAL</h2>
                                            <div className='border px-4 py-1 rounded-md mt-1 w-24 md:text-2xs lg:text-xs 2xl:text-base'>7689</div>
                                        </div>
                                    </div>
                                    <div className='mt-2 flex items-center'>
                                        <div className='lg:h-3 lg:w-3 h-3 w-3 border md:h-2 md:w-2 2xl:h-4 2xl:w-4'></div>
                                        <span className='ml-2 md:text-2xs lg:text-xs 2xl:text-sm'>Save card</span>
                                    </div>
                                    <div className='text-white text-center bg-gray-900 text-sm p-2 rounded-2xl mt-4 font-bold md:text-2xs lg:text-sm 2xl:text-base'>Get Started</div>
                                </div>
                                <img
                                    src={creditCard}
                                    alt=""
                                    className='absolute md:w-3/4 2xl:w-2/5 md:top-32 md:left-6 left-0 top-44 2xl:mt-8 2xl:left-96 lg:w-3/5 lg:left-80 lg:-bottom-20'
                                />
                                <img
                                    src={blackCredit}
                                    alt=""
                                    className='absolute left-0 top-80 2xl:w-2/4 lg:w-3/4 lg:-left-32 lg:top-20 md:top-32 md:left-6'
                                />
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