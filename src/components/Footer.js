import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='bg-slate-900 text-white p-8 lg:pt-60 md:pt-60'>
                <div className='lg:flex lg:flex-row lg:justify-between 2xl:justify-around md:flex md:flex-row md:justify-between lg:px-32'>
                    <div className='font-bold text-2xl mb-4'>
                        <a href="/">Pay</a>
                    </div>
                    <div className='flex flex-col gap-4 mb-4 lg:flex-row md:flex-row lg:gap-36 md:gap-28'>
                        <div>
                            <h2 className='text-base'>Platform</h2>
                            <ul className='text-xs text-gray-400 flex flex-col gap-2 mt-2'>
                                <li>Why Pay?</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-base'>Features</h2>
                            <ul className='text-xs text-gray-400 flex flex-col gap-2 mt-2'>
                                <li>Payments</li>
                                <li>API</li>
                                <li>Ecommerce</li>
                                <li>Business</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-base'>Company</h2>
                            <ul className='text-xs text-gray-400 flex flex-col gap-2 mt-2'>
                                <li>About Us</li>
                                <li>Career</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center gap-8 text-xl'>
                        <div><FaFacebookF /></div>
                        <div><FaLinkedin /></div>
                        <div><FaTwitterSquare /></div>
                    </div>
                </div>
                <div className='h-0.5 my-8 w-full bg-gray-300'></div>
                <div className='text-center text-xs text-gray-400'>@Pay Copyright 2022. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer