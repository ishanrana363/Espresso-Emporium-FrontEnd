import React, { useState } from "react";
import { uploadImg } from "../../upload-img/UploadImg";
import axios from "axios";
import { createAlert } from "../../helper/createAlert";
import Swal from "sweetalert2";

const AddCoffeForm = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
            await uploadImg(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        const Name = e.target.Name.value;
        const Chef = e.target.Chef.value;
        const Supplier = e.target.Supplier.value;
        const Taste = e.target.Taste.value;
        const Category = e.target.Category.value;
        const Details = e.target.Details.value;
        const Photo = e.target.Photo.files[0];
        const price = e.target.price.value;
        let imgUrl = "";

        if (Photo?.name) {
            imgUrl = await uploadImg(Photo);
        }

        const payload = {
            Name,
            Chef,
            Supplier,
            Taste,
            Category,
            Details,
            price,
            Photo: imgUrl,
        };

        try {

            let resp = await createAlert();
            if (resp.isConfirmed) {
                const res = await axios.post(
                    `https://espresso-emporium-backend-lemon.vercel.app/coffee`,
                    payload
                );
                if (res) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }else{
                    Swal.fire({
                        title: "Error!",
                        text: "An error occurred while create the file.",
                        icon: "error"
                    });
                }
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); // Stop loading after submission
        }
        e.target.reset();
    };

    return (
        <div className="">
            <div className="flex justify-center items-center  bg-gray-100">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Update Existing Coffee Details
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="Name"
                                    placeholder="Americano Coffee"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="chef"
                                >
                                    Chef
                                </label>
                                <input
                                    type="text"
                                    id="chef"
                                    name="Chef"
                                    required
                                    placeholder="Mr. Martin Paul"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="supplier"
                                >
                                    Supplier
                                </label>
                                <input
                                    type="text"
                                    id="supplier"
                                    required
                                    name="Supplier"
                                    placeholder="Café Authorité"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="taste"
                                >
                                    Taste
                                </label>
                                <input
                                    type="text"
                                    id="taste"
                                    name="Taste"
                                    placeholder="Sweet and Hot"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="category"
                                >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    name="Category"
                                    required
                                    placeholder="Americano"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="details"
                                >
                                    Details
                                </label>
                                <input
                                    type="text"
                                    id="details"
                                    name="Details"
                                    required
                                    placeholder="Espresso with Hot water"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            
                            <div>
                                <label
                                    className="block text-gray-700 font-semibold mb-2"
                                    htmlFor="price"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    required
                                    placeholder="Espresso with Hot water"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 font-semibold mb-2"
                                htmlFor="photo"
                            >
                                Photo
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="Photo"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                onChange={handleImageUpload}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 rounded transition-colors ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-yellow-500 hover:bg-yellow-600 text-white"
                                }`}
                        >
                            {loading ? (
                                <div className="flex justify-center items-center">
                                    <div
                                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    ></div>
                                    <span className="ml-2">Processing...</span>
                                </div>
                            ) : (
                                "Add Coffee"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffeForm;
