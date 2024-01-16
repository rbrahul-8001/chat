import React from 'react';

const Feed = ({ userMessages, botMessages }) => {
    return (
        <div className='right-8'>
            {/* Display User Messages */}
            {userMessages.map((message, index) => (
                <div key={index} className='text-white text-xl text-left  rounded p-2 my-2 bg-gray'>
                    {message}
                </div>
            ))}

            {/* Display Bot Messages */}
            {botMessages.map((message, index) => (
                <p key={index} className='text-blue-500 text-2xl'>
                    {message}
                </p>
            ))}
        </div>
    );
};

export default Feed;
