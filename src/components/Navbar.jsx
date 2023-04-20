import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#FF6969] text-white h-[50px]">
      <div className=" max-w-[1200px] mx-auto py-2 flex justify-between items-center ">
        <h2 className="font-bold text-2xl">Clothes</h2>
        <div>
          <ul className="flex gap-5">
            <Link className="" to="/">
              Home
            </Link>
            <Link className="" to="/addItem">
              Add Item
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
