import { useEffect, useState } from "react";
import { uploadImg } from "../../upload-img/UploadImg";
import coffeeStore from "../../api-request/coffe-api/coffeeStore";
import { useNavigate, useParams } from "react-router-dom";
import { updateAlert } from "../../helper/updateAlert";
import Swal from "sweetalert2";

const UpdateCoffeForm = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const { singleCoffeeDataApi, singleCoffeeData,coffeeUpdateApi } = coffeeStore();
    const navigate = useNavigate();
    window.scrollTo(0, 0);

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

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true);
            await singleCoffeeDataApi(id);
            setLoading(false); // Stop loading
        })()
    }, [id]);

    const {Photo : upcommingPhoto} = singleCoffeeData;

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
        
        let upcommingImg = upcommingPhoto;

        if(!Photo?.name){
            upcommingImg = upcommingPhoto;
        }

        upcommingImg = await uploadImg(Photo);

        

        const payload = {
            Name,
            Chef,
            Supplier,
            Taste,
            Category,
            Details,
            price,
            Photo: upcommingImg,
        };

        let resp = await updateAlert();
        if(resp.isConfirmed){
            setLoading(true);
            let res = coffeeUpdateApi(id,payload);
            setLoading(false); // Stop loading
            if(res){
                setLoading(true);
                await singleCoffeeDataApi(id);
                setLoading(false); // Stop loading
                Swal.fire({
                    title: "Coffee Updated Successfully!",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                navigate("/")
                return;
            }else{
                Swal.fire({
                    title: "Failed to Update Coffee!",
                    icon: "error",
                    confirmButtonText: "Ok",
                })
            }
        }
        

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
                                    defaultValue={singleCoffeeData?.Name}
                                    key={Date.now()}
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
                                    defaultValue={singleCoffeeData?.Chef}
                                    key={Date.now()}
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
                                    name="Supplier"
                                    defaultValue={singleCoffeeData?.Supplier}
                                    key={Date.now()}
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
                                    defaultValue={singleCoffeeData?.Taste}
                                    key={Date.now()}
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
                                    defaultValue={singleCoffeeData?.Category}
                                    key={Date.now()}
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
                                    defaultValue={singleCoffeeData?.Details}
                                    key={Date.now()}
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
                                    defaultValue={singleCoffeeData?.price}
                                    key={Date.now()}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img key={Date.now()} src={singleCoffeeData?.Photo} />
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
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                onChange={handleImageUpload}
                            />
                        </div>

                        <p>Already upload img</p>
                        <img className="w-20" src={imageUrl} alt="" />

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

export default UpdateCoffeForm;
