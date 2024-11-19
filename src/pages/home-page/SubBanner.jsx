import React from 'react';

const SubBanner = () => {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="max-w-4xl mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {/* Item 1 */}
                    <div>
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948695/1_1_ebz5io.png"
                            alt="Awesome Aroma"
                            className="mx-auto"
                        />
                        <h1 className="text-[#331A15] text-[24px] md:text-[30px] mt-4">Awesome Aroma</h1>
                        <p className="text-[#1B1A1A] text-sm md:text-base">
                            You will definitely be a fan of the design & aroma of your coffee
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948694/3_1_g3v3ze.png"
                            alt="High Quality"
                            className="mx-auto"
                        />
                        <h1 className="text-[#331A15] text-[24px] md:text-[30px] mt-4">High Quality</h1>
                        <p className="text-[#1B1A1A] text-sm md:text-base">
                            We served the coffee to you maintaining the best quality
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948695/2_1_egpxgl.png"
                            alt="Pure Grades"
                            className="mx-auto"
                        />
                        <h1 className="text-[#331A15] text-[24px] md:text-[30px] mt-4">Pure Grades</h1>
                        <p className="text-[#1B1A1A] text-sm md:text-base">
                            The coffee is made of the green coffee beans which you will love
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div>
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731948694/4_1_qpwzuq.png"
                            alt="Proper Roasting"
                            className="mx-auto"
                        />
                        <h1 className="text-[#331A15] text-[24px] md:text-[30px] mt-4">Proper Roasting</h1>
                        <p className="text-[#1B1A1A] text-sm md:text-base">
                            Your coffee is brewed by first roasting the green coffee beans
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;
