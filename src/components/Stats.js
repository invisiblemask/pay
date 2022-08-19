import React from 'react'

const Stats = () => {
    return (
        <div>
            <div className='bg-gray-50 my-20 lg:my-24 2xl:mt-44'>
                <div className='flex p-6 lg:py-24 justify-center gap-12'>
                    <div>
                        <div className='text-3xl font-bold 2xl:text-5xl'>10%</div>
                        <span className='text-xs flex text-gray-700 2xl:text-xl'>Beneficial Cashback</span>
                    </div>
                    <div>
                        <div className='text-3xl font-bold 2xl:text-5xl'>7M</div>
                        <span className='text-xs flex text-gray-700 2xl:text-xl'>Satisfied Customer</span>
                    </div>
                    <div>
                        <div className='text-3xl font-bold 2xl:text-5xl'>40+</div>
                        <span className='text-xs flex text-gray-700 2xl:text-xl'>Country Available</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats