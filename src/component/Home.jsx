import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { BsPaperclip } from 'react-icons/bs';
import { CiMicrophoneOn } from 'react-icons/ci';
import { IoSend } from 'react-icons/io5';
import Feed from './Feed';
//import fetchfromapi2 from '../utils/fetchfromapi2';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);

    const onhandleSubmit = async (e) => {
        e.preventDefault();
        // console.log(searchTerm)
        // const response = await fetchfromapi2(searchTerm);

        setUserMessages([...userMessages, searchTerm]);
        // setBotMessages([...botMessages, response ]);

        console.log('User Messages:', userMessages);
        console.log('Bot Messages:', botMessages);

        setSearchTerm("")
    };
    return (
        <div className='bg-mid h-screen w-screen p-4 flex'>
            {/* Text Generator */}
            <div className='flex-none w-1/6 pr-4 fixed'>
                <div className=''>
                    <h1 className='text-white text-3xl mb-4'>AI Generator</h1>
                </div>

                {/* newdiv */}
                <div className=''>
                    {/* New Chat */}
                    <button className='flex w-full items-center border border-green text-green p-2 mb-2 rounded-full text-sm' >
                        <IoIosAddCircleOutline className='mr-2' />
                        <p>New Chat</p>
                    </button>

                    {/* Clear Conversation */}
                    <button className='flex w-full items-center border border-red text-red p-2 rounded-full text-sm'>
                        <RiDeleteBack2Line className='text-red mr-2' />
                        <p>Clear Conversation</p>
                    </button>
                </div>
            </div>

            {/* Vertical Line */}
            <div className='h-full w-0.5 bg-gray mx-6 ml-72'></div>

            {/* Mainkam */}
            <div className='pr-24'>
                 <Feed userMessages={userMessages} botMessages={botMessages} />
            </div>

            {/* Searching */}
            <div className='bottom-0 right-16 p-4 w-2/3 fixed'>

                <form onSubmit={onhandleSubmit} className="relative input-group items-center">
                    <BsPaperclip className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                    <CiMicrophoneOn className="absolute right-12 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                    <IoSend className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green text-xl" />
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Send a message"
                        className="bg-mid text-white input border border-white rounded-md w-full border-gray-300 p-2 pl-12"
                    />
                </form>
            </div>
        </div>
    );
};

export default Home;
