import React from 'react'

const AddCoffeForm = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-center mb-4">Update Existing Coffee Details</h2>
                    <p className="text-gray-600 text-center mb-8">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Americano Coffee"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="chef">Chef</label>
                                <input
                                    type="text"
                                    id="chef"
                                    placeholder="Mr. Martin Paul"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="supplier">Supplier</label>
                                <input
                                    type="text"
                                    id="supplier"
                                    placeholder="Café Authorité"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="taste">Taste</label>
                                <input
                                    type="text"
                                    id="taste"
                                    placeholder="Sweet and Hot"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    id="category"
                                    placeholder="Americano"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="details">Details</label>
                                <input
                                    type="text"
                                    id="details"
                                    placeholder="Espresso with Hot water"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="photo">Photo</label>
                            <input
                                type="text"
                                id="photo"
                                placeholder="https://via.placeholder.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors"
                        >
                            Update Coffee Details
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCoffeForm
