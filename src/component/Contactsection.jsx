import React from 'react';
import img from "../img/cab.webp"

const Contactsection = () => {
  return (
    <div className="w-full px-4 py-10 bg-[#e4ffe3] flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-3xl font-semibold mb-2 "><span className='text-yellow-500'>NE-Cab</span> for Business</h2>
        <h3 className="text-xl font-bold mb-4">One way cab for Corporate travel</h3>
        

        <form className="space-y-4">
          
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full md:w-95 p-3 border border-gray-300 rounded-xl bg-white"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full md:w-95 p-3 border border-gray-300 rounded-xl bg-white"
            />
          </div>
          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full md:w-95 p-3 border border-gray-300 rounded-xl bg-white"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
          >
           Submit
          </button>
        </form>
      </div>

      {/* Right: Image Section */}
      <div className="w-full lg:w-1/2 max-w-lg ">
        <img
          src={img}
          alt="Corporate Travel Banner"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contactsection;
