import React from "react";
import { GoSun } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="flex py-4 font-medium text-sm mx-auto container h-fit items-center justify-between w-full">
      <div className="flex gap-x-6">
        <h3 className="font-semibold text-xl">MedicalCare </h3>
        <span className="flex items-center gap-x-2">
          <IoNewspaperOutline className="text-lg" /> Resources
        </span>
        <span className="flex items-center gap-x-2">
          <MdPeople className="text-lg" /> People
        </span>
      </div>

      <div className="gap-x-4 flex">
        <button className="px-3 cursor-pointer hover:bg-zinc-50 transition duration-200 py-2 border border-zinc-200 rounded-md">
          <GoSun className="size-4" />
        </button>
        <button className="px-3 cursor-pointer hover:bg-zinc-50 transition duration-200 py-2 border border-zinc-200 rounded-md">
          Help
        </button>
        <button className="px-3 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition duration-200 py-2 text-white rounded-md">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Navbar;
