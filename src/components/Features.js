import React from 'react'
import { MdKeyboardArrowRight, MdOutlineCreditCard, MdOutlineSecurity } from 'react-icons/md'
import phone from '../assets/phone.png'
import masterCard from '../assets/mastercard.svg'
import visa from '../assets/visa.svg'
import facebook from '../assets/facebook.svg'
import slack from '../assets/slack.svg'
import shopify from '../assets/shopify.svg'
import stripe from '../assets/stripe.svg'
import paypal from '../assets/paypal.svg'

const Features = () => {
    return (
        <div>
            <div className='px-4 lg:px-24 lg:mb-44'>
                <div className='flex flex-col'>
                    <div className='border mx-auto rounded-2xl px-2 text-cyan-500 bg-indigo-50 text-xs font-semibold text-center'>
                        FEATURES
                    </div>
                    <div className='mt-4'>
                        <p className='text-3xl text-center font-bold leading-snug'>
                            Features designed for you
                        </p>
                    </div>
                    <div className='my-2 lg:flex lg:justify-center lg:px-96'>
                        <p className='text-xs text-center text-gray-600 self-center leading-loose'>
                            Growth-accelerating products for startups, ecommerce stores, angel investors, & more
                        </p>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='my-7 lg:flex lg:flex-row lg:gap-8 lg:justify-center'>
                        <div className='flex mb-4 bg-gray-50 p-4 rounded-lg lg:h-full lg:p-8 lg:rounded-3xl'>
                            <div className='lg:w-56'>
                                <h2 className='font-bold text-xl'>Pay with PAY, quick, simple and easy</h2>
                                <p className='my-4 text-xs text-gray-600'>Use Pay to pay to a merchant and enjoy optimal payment user experience</p>
                                <div className=''>
                                    <button className='flex flex-row items-center bg-cyan-600 self-start text-gray-100 px-3 py-2 rounded-2xl text-xs font-bold lg:mt-6'>
                                        Learn More
                                        <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={phone}
                                    alt=""
                                    className='lg:w-64'
                                />
                                <div className='relative flex justify-between'>
                                    <div className='absolute bottom-20 lg:bottom-1 right-30 lg:right-24 flex flex-row items-center bg-white px-2 lg:px-1 py-1 rounded-lg gap-2 '>
                                        <div className='bg-gray-50 rounded-full p-1'>
                                            <img
                                                src={masterCard}
                                                alt=""
                                                className='h-7 w-7'
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='w-14 h-2 mb-1 rounded-2xl border bg-gray-200'></div>
                                            <div className='w-12 h-2 border rounded-2xl bg-gray-200'></div>
                                        </div>
                                        <p className='text-sm font-semibold'>+$200</p>
                                    </div>
                                    <div className='absolute bottom-20 right-0 lg: flex flex-row items-center bg-white px-2 py-1 rounded-lg gap-2'>
                                        <div className='bg-gray-50 rounded-full p-1'>
                                            <img
                                                src={visa}
                                                alt=""
                                                className='h-7 w-7'
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='w-12 h-2 mb-1 rounded-2xl border bg-gray-200'></div>
                                            <div className='w-12 h-2 border rounded-2xl bg-gray-200'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col bg-gray-50 p-4 lg:p-8 lg:rounded-3xl'>
                                <div className='bg-gray-100 rounded-full self-start p-4 lg:mb-8'>
                                    <MdOutlineSecurity />
                                </div>
                                <div>
                                    <h2 className='font-bold text-lg'>Bank-level Security</h2>
                                    <p className='my-4 text-xs text-gray-600 lg:w-64'>Personal information is encrypted and protected by industry standrd banking security.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row lg:gap-8 lg:justify-center'>
                        <div>
                            <div className='flex flex-col bg-gray-50 p-4 lg:h-full lg:p-8 lg:rounded-3xl'>
                                <div className='bg-gray-100 rounded-full self-start p-4 lg:mb-8'>
                                    <MdOutlineCreditCard />
                                </div>
                                <div>
                                    <h2 className='font-bold text-lg'>Cost Reduction</h2>
                                    <p className='my-4 text-xs text-gray-600 lg:w-64'>Pay Reduced Payments maintenance and processing fees. No hidden fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative flex mt-4 lg:mt-0 bg-gray-50 p-4 rounded-lg justify-between lg:p-8 lg:rounded-3xl lg:gap-3'>
                            <div className='lg:w-56'>
                                <h2 className='font-bold text-xl'>Integrates with best of breed solution</h2>
                                <p className='my-4 text-xs text-gray-600'>Integrate with best of payment processors and accounting software</p>
                                <div >
                                    <button className='flex flex-row items-center bg-cyan-600 self-start text-gray-100 px-3 py-2 rounded-2xl text-xs font-bold lg:mt-6'>
                                        Learn More
                                        <MdKeyboardArrowRight />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-evenly lg:justify-between lg:gap-10'>
                                <div className='flex justify-between'>
                                    <div className='h-10 w-10 bg-gray-200 rounded-lg'>
                                        <img
                                            src={facebook}
                                            alt=""
                                            className='h-6 w-6 m-2'
                                        />
                                    </div>
                                    <div className='flex gap-10'>
                                        <div className='h-10 w-10 bg-gray-200 rounded-lg'></div>
                                        <div className='h-10 w-10 bg-gray-200 rounded-lg'></div>
                                    </div>
                                </div>
                                <div className='flex justify-between ml-8'>
                                    <div className='flex gap-2 relative'>
                                        <div className='h-10 w-10 bg-gray-200 rounded-lg'></div>
                                        <div className='h-10 w-10 bg-gray-200 rounded-lg'></div>
                                        <div className='h-10 w-10 bg-gray-200 rounded-lg'>
                                            <div className='absolute right-6 bottom-7 bg-white p-2 rounded-lg'>
                                                <img
                                                    src={slack}
                                                    alt=""
                                                    className='h-6 w-6'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-10 w-10 bg-gray-200 rounded-lg ml-6'>
                                        <div className='absolute right-10 top-32 z-50 bg-white p-2 rounded-lg'>
                                            <img
                                                src={paypal}
                                                alt=""
                                                className='h-6 w-6'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-evenly relative'>
                                    <div className='h-10 w-10 bg-gray-200 rounded-lg'>
                                        <div className='absolute left-8 bottom-10 bg-white p-2 rounded-lg'>
                                            <img
                                                src={stripe}
                                                alt=""
                                                className='h-6 w-6'
                                            />
                                        </div>
                                    </div>
                                    <div className='h-10 w-10 bg-gray-200 rounded-lg'>
                                        <img
                                            src={shopify}
                                            alt=""
                                            className='h-6 w-6 m-2'
                                        />
                                    </div>
                                    <div className='h-10 w-10 bg-gray-200 rounded-lg'></div>
                                </div>
                            </div>
                            <div>
                                {/* <img
                                    src={facebook}
                                    alt=""
                                    className='absolute h-6 w-6 left-56 top-12'
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features