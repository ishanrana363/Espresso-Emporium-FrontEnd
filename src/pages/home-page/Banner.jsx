import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1731947888/Rectangle_2_pnbols.png')] bg-cover bg-center h-screen ">
                <div className='flex justify-center items-center h-screen ' >
                    <div className='w-1/3' >

                    </div>
                    <div className='w-1/2' >
                        <h1 className='text-white text-[40px]  ' >Would you like a Cup of Delicious Coffee?</h1>
                        <p className='text-white text-justify ' >It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='bg-[#E3B577] px-3 py-2  shadow-2xl ' >Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
