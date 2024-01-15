// App.js
import React from 'react';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import SIdebar from './component/SIdebar';

const App = () => {
  return (
    <div className="flex h-screen">
      <SIdebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-grow overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
