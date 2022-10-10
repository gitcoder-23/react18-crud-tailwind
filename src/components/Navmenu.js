import React from 'react';
import { Link } from 'react-router-dom';

const Navmenu = () => {
  return (
    <>
      <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
        <Link
          to={'/'}
          className="text-2xl text-teal-200 font-semibold font-Montesarrat"
        >
          React18-Tailwind-CRUD
        </Link>
        <Link
          to={'/adduser'}
          className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black ease-in-out duration-500 py-2 px-2"
        >
          Add Users
        </Link>
      </div>
    </>
  );
};

export default Navmenu;
