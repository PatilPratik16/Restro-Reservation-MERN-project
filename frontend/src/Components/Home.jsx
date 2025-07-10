import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('/bg-home.jpg')] bg-cover bg-center flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FF8000] drop-shadow-lg">
          Welcome to Royal Dine
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-100">
          Experience the taste of royalty. Book your table now and indulge in a fine dining experience like never before.
        </p>
        <Link
          to="/reserve"
          className="bg-[#FF8000] text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-[#FF8000] transition-all duration-300"
        >
          Reserve a Table
        </Link>
      </div>
    </div>
  );
};

export default Home;
