// import React from 'react'
// import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'

const Product = () => {
    return (
        <div className='w-11/12 mx-auto ' >
            <div>
                <h1 className='text-center text-[20px] text-[#1B1A1A] ' >--- Sip & Savor ---</h1>
                <h1 className='text-center text-[55px] ' >Our Popular Products</h1>
                <button className="flex items-center justify-center shadow-2xl block mx-auto px-6 py-2 bg-[#E3B577] text-white font-bold text-lg rounded-md border-2 border-[#7b4b2a] hover:bg-[#c68c5c] transition-all duration-300">
                    <span className="mr-2">Add Coffee</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 6H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1ZM4 8h16v7a5 5 0 1 1-10 0H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm11 7h5a3 3 0 0 0-5 0Zm-9 3h14v2H6v-2Z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-row gap-10 justify-center bg-white items-center my-10 ">
                <div className="flex items-center bg-[#F5F4F1] shadow-lg rounded-lg p-5">
                    {/* Coffee Cup Image */}
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Coffee Cup"
                        className="w-24 h-32 object-cover"
                    />

                    {/* Coffee Details */}
                    <div className="ml-3 ">
                        <h2 className="text-lg text-[#1B1A1A]">Name: <span className='text-[#5C5B5B]' >Americano Coffee</span> </h2>
                        <p className="text-lg text-[#1B1A1A]">Chef: <span className='text-[#5C5B5B]' >Mr. Matin Paul</span> </p>
                        <p className="text-lg text-[#1B1A1A]">Price: <span className='text-[#5C5B5B]' >890 Taka</span> </p>
                    </div>

                    {/* Action Buttons */}
                    <div className=" flex flex-col ml-3 items-center space-y-2 ">
                        <button className="bg-gray-200 hover:bg-gray-300 p-2  rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950796/Group_14_ia7noa.png" alt="" />
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950630/Group_12_cdcavw.png" alt="" />
                        </button>
                        <button className="bg-red-200 hover:bg-red-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950713/Group_13_ngwbeg.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center bg-[#F5F4F1] shadow-lg rounded-lg p-5">
                    {/* Coffee Cup Image */}
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Coffee Cup"
                        className="w-24 h-32 object-cover"
                    />

                    {/* Coffee Details */}
                    <div className="ml-3 ">
                        <h2 className="text-lg text-[#1B1A1A]">Name: <span className='text-[#5C5B5B]' >Americano Coffee</span> </h2>
                        <p className="text-lg text-[#1B1A1A]">Chef: <span className='text-[#5C5B5B]' >Mr. Matin Paul</span> </p>
                        <p className="text-lg text-[#1B1A1A]">Price: <span className='text-[#5C5B5B]' >890 Taka</span> </p>
                    </div>

                    {/* Action Buttons */}
                    <div className=" flex flex-col ml-3 items-center space-y-2 ">
                        <button className="bg-gray-200 hover:bg-gray-300 p-2  rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950796/Group_14_ia7noa.png" alt="" />
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950630/Group_12_cdcavw.png" alt="" />
                        </button>
                        <button className="bg-red-200 hover:bg-red-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950713/Group_13_ngwbeg.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center bg-[#F5F4F1] shadow-lg rounded-lg p-5">
                    {/* Coffee Cup Image */}
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Coffee Cup"
                        className="w-24 h-32 object-cover"
                    />

                    {/* Coffee Details */}
                    <div className="ml-3 ">
                        <h2 className="text-lg text-[#1B1A1A]">Name: <span className='text-[#5C5B5B]' >Americano Coffee</span> </h2>
                        <p className="text-lg text-[#1B1A1A]">Chef: <span className='text-[#5C5B5B]' >Mr. Matin Paul</span> </p>
                        <p className="text-lg text-[#1B1A1A]">Price: <span className='text-[#5C5B5B]' >890 Taka</span> </p>
                    </div>

                    {/* Action Buttons */}
                    <div className=" flex flex-col ml-3 items-center space-y-2 ">
                        <button className="bg-gray-200 hover:bg-gray-300 p-2  rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950796/Group_14_ia7noa.png" alt="" />
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950630/Group_12_cdcavw.png" alt="" />
                        </button>
                        <button className="bg-red-200 hover:bg-red-300 p-2 rounded">
                            <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950713/Group_13_ngwbeg.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
