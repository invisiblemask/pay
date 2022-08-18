import React from 'react'

const Stats = () => {
    return (
        <div>
            <div className='bg-gray-50 my-20 lg:my-24'>
                <div className='flex p-6 lg:py-24 justify-center gap-12'>
                    <div>
                        <div className='text-3xl font-bold'>10%</div>
                        <span className='text-xs flex text-gray-700'>Beneficial Cashback</span>
                    </div>
                    <div>
                        <div className='text-3xl font-bold'>7M</div>
                        <span className='text-xs flex text-gray-700'>Satisfied Customer</span>
                    </div>
                    <div>
                        <div className='text-3xl font-bold'>40+</div>
                        <span className='text-xs flex text-gray-700'>Country Available</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats