import React from 'react'

const SubBanner = () => {
    return (
        <div className=' bg-[#ECEAE3] ' >
            <div className='max-w-4xl mx-auto  py-8 ' >
                <div className='flex justify-center items-center gap-16 ' >
                    {/* item 1 */}
                    <div className='' >
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948695/1_1_ebz5io.png" alt="" />
                        <h1  className='text-[#331A15] text-[30px] '  >Awesome Aroma</h1>
                        <p className=' text-justify  text-[#1B1A1A] ' >You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948694/3_1_g3v3ze.png" alt="" />
                        <h1 className='text-[#331A15] text-[30px] ' >High Quality</h1>
                        <p className=' text-justify  text-[#1B1A1A] ' >We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948695/2_1_egpxgl.png" alt="" />
                        <h1 className='text-[#331A15] text-[30px] ' >Pure Grades</h1>
                        <p className=' text-justify text-[#1B1A1A]  ' >The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948694/4_1_qpwzuq.png" alt="" />
                        <h1 className='text-[#331A15] text-[30px] ' >Proper Roasting</h1>
                        <p className=' text-justify  text-[#1B1A1A]  ' >Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default SubBanner
