import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot, FaMessage } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            {/* Main Footer Section */}
            <div className="bg-[url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1731980243/Rectangle_18_hsmi0o.png')] w-full bg-cover bg-center">
                <div className="w-11/12 mx-auto lg:py-14 lg:px-20">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6">
                        {/* Left Section */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1731947497/logo1_1_tp5bya.png"
                                alt="Logo"
                                className="mb-4"
                            />
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                Espresso Emporium
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Always ready to be your friend. Come & Contact with us to share
                                your memorable moments, to share with your best companion.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 mb-6">
                                <span className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600">
                                    <FaFacebook />
                                </span>
                                <span className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600">
                                    <FaTwitter />
                                </span>
                                <span className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600">
                                    <FaInstagram />
                                </span>
                                <span className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600">
                                    <FaLinkedin />
                                </span>
                            </div>

                            {/* Contact Details */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-indigo-600">
                                    <FaPhone />
                                </span>
                                <span className="text-gray-600">+88 01533 333 333</span>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-indigo-600">
                                    <FaMessage />
                                </span>
                                <span className="text-gray-600">info@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-indigo-600">
                                    <FaLocationDot />
                                </span>
                                <span className="text-gray-600">
                                    72, Wall Street, King Road, Dhaka
                                </span>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 rounded-lg p-6 bg-white shadow-lg">
                            <h1 className="text-xl font-bold text-gray-800 mb-4">
                                Connect with Us
                            </h1>
                            <form className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Your Email"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="3"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="bg-[url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1731982065/Rectangle_17_atj9lw.png')] bg-cover bg-center w-full flex items-center justify-center py-4">
                <h1 className="text-center text-[16px] md:text-[20px] font-bold text-white">
                    Copyright Espresso Emporium! All Rights Reserved
                </h1>
            </div>
        </div>
    );
};

export default Footer;
