import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import coffeeStore from '../../api-request/coffe-api/coffeeStore';
import { deleteAlert } from '../../helper/deleteAlert';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';


const Product = () => {
    const { coffeeDataListApi, coffeeDeleteApi } = coffeeStore();
    useEffect(() => {
        (async () => {
            await coffeeDataListApi();
        })()
    }, []);
    const { data: product = [], isPending , refetch } = useQuery({
        queryKey: ["coffe"],
        queryFn: async () => {
            let res = await axios.get(`https://espresso-emporium-backend-lemon.vercel.app/coffee`);
            return res.data;
        },

    });

    const handleDelete = async (id) => {
        console.log(id);
        let resp = await deleteAlert();

        if (resp.isConfirmed) {
            let res = await coffeeDeleteApi(id);
            if (res) {
                await coffeeDataListApi();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete the file.",
                    icon: "error"
                });
            }
        }
        refetch();
    }


    return (
        <div className="w-11/12 mx-auto">
            {/* Header Section */}
            <div>
                <h1 className="text-center text-[10px] lg:text-[20px] text-[#1B1A1A]">--- Sip & Savor ---</h1>
                <h1 className="text-center text-[25px] lg:text-[55px]">Our Popular Products</h1>
                <button className="flex items-center justify-center shadow-2xl block mx-auto lg:px-6 px-2 mt-2f py-1 lg:py-2 bg-[#E3B577] text-white font-bold text-lg rounded-md border-2 border-[#7b4b2a] hover:bg-[#c68c5c] transition-all duration-300">
                    <span className="mr-2"> <Link to={"/add-coffe"}>Add Coffee</Link> </span>
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

            {/* Products Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {/* Product 1 */}
                {
                    product && product.map((item, i) => {
                        return (
                            <div key={i} >
                                <div className="flex flex-col md:flex-row items-center bg-[#F5F4F1] shadow-lg rounded-lg p-5">

                                    <img
                                        src={item?.Photo}
                                        alt="Coffee Cup"
                                        className="w-24 h-32 object-cover mb-4 md:mb-0"
                                    />
                                    <div className="ml-0 md:ml-3 flex-grow text-center md:text-left">
                                        <h2 className="text-lg text-[#1B1A1A]">
                                            Name: <span className="text-[#5C5B5B]"> {item?.Name} </span>
                                        </h2>
                                        <p className="text-lg text-[#1B1A1A]">
                                            Chef: <span className="text-[#5C5B5B]"> {item?.Chef} </span>
                                        </p>
                                        <p className="text-lg text-[#1B1A1A]">
                                            Price: <span className="text-[#5C5B5B]">{item.price} </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
                                        <Link to={`/coffe-details/${item._id}`}>
                                            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
                                                <img
                                                    className="w-6"
                                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950796/Group_14_ia7noa.png"
                                                    alt=""
                                                />
                                            </button>
                                        </Link>
                                        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
                                            <Link to={`/update-coffec/${item?._id}`}>
                                                <img
                                                    className="w-6"
                                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950630/Group_12_cdcavw.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDelete(item?._id)} className="bg-red-200 hover:bg-red-300 p-2 rounded">
                                            <img
                                                className="w-6"
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731950713/Group_13_ngwbeg.png"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {
                    isPending && <div>
                        <h1 className='text-center' >Data Loading ......</h1>
                    </div>
                }


            </div>
        </div>
    );
};

export default Product;
