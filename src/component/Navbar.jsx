import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {
    return (
        <div className="bg-blacky flex items-center justify-between p-3">
            <div className=" mx-auto relative items-center">
                <input
                    type="text"
                    placeholder="Search Anything..."
                    className="bg-gray  items-centerinput input-bordered rounded-full w-full md:w-64 border border-white pl-4 text-sm p-2"
                />
                <CiSearch className="text-white absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>

            <div className="flex items-center ">
                <div className='text-2xl text-white'>
                    <IoMdNotificationsOutline />
                </div>
                <div className="w-10 rounded-full ml-6 overflow-hidden">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
                <div className="text-white text-4xl">
                    <RiArrowDropDownLine />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
