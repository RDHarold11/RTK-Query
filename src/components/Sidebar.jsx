import React from "react";

const Sidebar = () => {
  return (
    <div className="p-4">
      <h2 className="mb-3 font-bold text-[20px]">Categories</h2>
       <ul>
        <li className="cursor-pointer hover:font-bold">All items</li>
        <li className="cursor-pointer hover:font-bold">Accesories</li>
        <li className="cursor-pointer hover:font-bold">Men</li>
        <li className="cursor-pointer hover:font-bold">Women</li>
       </ul>
    </div>
  );
};

export default Sidebar;
