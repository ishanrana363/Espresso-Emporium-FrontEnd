import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coffeeStore from '../../api-request/coffe-api/coffeeStore';

const CoffeeDetails = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const { singleCoffeeDataApi, singleCoffeeData } = coffeeStore();
    useEffect(() => {
        (async () => {
            await singleCoffeeDataApi(id);
        })()
    }, [id])
    return (
        <div className=" flex items-center justify-center my-6 ">
            <div className="max-w-4xl w-full p-4">
                <div className="bg-[#F4F3F0] shadow-lg rounded-lg border-2 gap-14 flex flex-col justify-center md:flex-row p-6">
                    {/* Coffee Image */}
                    <div className="flex-shrink-0 flex ">
                        <img
                            src={singleCoffeeData?.Photo} // Replace with your actual image URL
                            alt="Coffee Cup"
                            className="w-52 h-auto"
                        />
                    </div>

                    {/* Coffee Details */}
                    <div className="ml-0 md:ml-8 mt-4 md:mt-0">
                        <h1 className="text-2xl font-bold text-[#5C5B5B] mb-4">Niceties</h1>
                        <ul className="space-y-2 text-[#1B1A1A] text-lg">
                            <li>
                                <strong>Name:</strong> <span className="text-[#5C5B5B]"> {singleCoffeeData?.Name} </span>
                            </li>
                            <li>
                                <strong>Chef:</strong> <span className="text-[#5C5B5B]">{singleCoffeeData?.Chef}</span>
                            </li>
                            <li>
                                <strong>Supplier:</strong> <span className="text-[#5C5B5B]">{singleCoffeeData?.Supplier}</span>
                            </li>
                            <li>
                                <strong>Taste:</strong> <span className="text-[#5C5B5B]">{singleCoffeeData?.Taste}</span>
                            </li>
                            <li>
                                <strong>Category:</strong> <span className="text-[#5C5B5B]">{singleCoffeeData?.Category}</span>
                            </li>
                            <li>
                                <strong>Price:</strong> <span className="text-[#5C5B5B]">{singleCoffeeData?.price}</span>
                            </li>
                            <li>
                                <strong>Details:</strong>{' '}
                                <span className="text-[#5C5B5B]">{singleCoffeeData?.Details} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
