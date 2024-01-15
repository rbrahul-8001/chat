import React from 'react';
import logo from '../logo.png';
import { LuMessageSquare } from 'react-icons/lu';
import { LuImage } from 'react-icons/lu';
import { IoIosMusicalNotes } from 'react-icons/io';
import { FaRegBookmark } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineWindow } from "react-icons/md";

const SIdebar = () => {
    return (
        <div className='bg-gray flex flex-col items-center'>
            <div>
                <img src={logo} alt="Logo" width={75} />
            </div>
            <div className='flex flex-col items-center justify-center flex-grow'>
                <MdOutlineWindow className="text-white text-xl mb-10" />
                <AiOutlineRise className="text-white text-xl mb-10" />
                <LuMessageSquare className="text-green text-xl mb-10" />
                <LuImage className="text-white text-xl mb-10" />
                <IoIosMusicalNotes className="text-white text-xl mb-10" />
                <FaRegBookmark className="text-white text-xl mb-10" />
                <RxExit className="text-white text-xl mb-10" />
            </div>
        </div>
    );
};

export default SIdebar;
