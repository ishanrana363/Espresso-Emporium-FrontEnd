import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1731947888/Rectangle_2_pnbols.png')] bg-cover bg-center h-[50vh] md:h-[75vh] lg:h-screen">
                <div className="flex justify-center items-center h-[50vh] md:h-[75vh] lg:h-screen">
                    {/* Empty Space (for layout balance) */}
                    <div className="w-1/3 hidden lg:block"></div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 w-full p-6 my-16 text-center lg:text-left">
                        <h1 className="text-white text-[20px] lg:text-[40px]">
                            Would you like a Cup of Delicious Coffee?
                        </h1>
                        <p className="text-white text-justify text-[10px] lg:text-[17px]">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your
                            companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="bg-[#E3B577] text-[10px] lg:text-[16x] px-3 my-2 py-2 shadow-2xl rounded-md text-white font-semibold hover:bg-[#c68c5c] transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
