import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { deleteAlert } from '../helper/deleteAlert';
import Swal from 'sweetalert2';

const UserList = () => {
    const data = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com" },
    ];
    const { data: users = [], isPending, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            let res = await axios.get(`https://espresso-emporium-backend-lemon.vercel.app/user`);
            return res.data;
        },
    });
    const deleteUser = async (id) => {
        try {
            const resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axios.delete(`https://espresso-emporium-backend-lemon.vercel.app/user/${id}`);
                if (res) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    if (isPending) return <div>Loading...</div>;
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">User Table</h2>
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left">
                            <th className="py-3 px-4 border-b border-gray-300">Name</th>
                            <th className="py-3 px-4 border-b border-gray-300">Email</th>
                            <th className="py-3 px-4 border-b border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 border-b border-gray-300">{user.name}</td>
                                <td className="py-3 px-4 border-b border-gray-300">{user.email}</td>
                                <td className="py-3 px-4 border-b border-gray-300">
                                    {/* Update Button */}
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm mr-2 transition duration-300"
                                    >
                                        Update
                                    </button>
                                    {/* Delete Button */}
                                    <button onClick={()=>deleteUser(user._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
