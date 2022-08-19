import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const handleNavClick = () => {
        setShowNav(!showNav)
    }

    return (
        <nav>
            <div className='relative lg:flex lg:flex-col'>
                <div className='bg-black text-white text-center text-3xs font-bold py-4 lg:text-sm'>
                    <span className='bg-white text-black px-1 rounded-lg'>New</span> We are excited to announce our brand new product. <span className='underline cursor-pointer'>Learn More.</span>
                </div>
                <div className='flex justify-between p-4 lg:px-24'>
                    <div className='lg:flex lg:items-center lg:justify-between lg:gap-20 md:flex md:items-center md:justify-between md:gap-20'>
                        <div>
                            <a className='text-2xl text-cyan-500 font-bold' href='/'>
                                Pay
                            </a>
                        </div>

                        <div className='hidden lg:flex lg:gap-10 text-sm lg:text-sm md:flex md:gap-10 md:text-xs'>
                            <a
                                href='/'
                                className='flex flex-row items-center gap-1'
                            >
                                Features <IoIosArrowDown />
                            </a>
                            <a href='/'>Pricing</a>
                            <a href='/'>About Us</a>
                            <a href='/'>Blog</a>
                        </div>
                    </div>
                    <div className='hidden lg:flex lg:flex-row gap-4 md:flex md:flex-row'>
                        <button className='border text-cyan-600 font-bold rounded-3xl px-4 py-2 text-sm lg:text-sm lg:py-2 md:text-xs md:py-1'>Sign In</button>
                        <button className='border bg-cyan-600 text-gray-50 font-bold rounded-3xl px-4 py-2 text-sm lg:text-sm lg:py-2 md:text-xs md:py-1'>Free trial</button>
                    </div>
                    <div
                        className='text-xl lg:hidden md:hidden cursor-pointer'
                        onClick={handleNavClick}
                    >
                        <AiOutlineMenu />
                    </div>
                </div>
                <div className={showNav ? 'bg-white absolute right-0 top-0 shadow-xl h-screen z-50 w-3/4 lg:hidden md:hidden' : 'hidden'}>
                    <div
                        className='text-xl float-right p-4 cursor-pointer'
                        onClick={handleNavClick}
                    >
                        <AiOutlineClose />
                    </div>
                    <ul className='mt-14 px-14 flex flex-col gap-6'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Blog</li>
                    </ul>
                    <div className='mt-44 px-14 flex flex-col gap-4'>
                        <button className='border text-cyan-600 font-bold rounded-3xl px-4 py-2'>Sign In</button>
                        <button className='border bg-cyan-600 text-gray-50 font-bold rounded-3xl px-4 py-2'>Free trial</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar