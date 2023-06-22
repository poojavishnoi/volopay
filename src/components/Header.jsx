import React from "react";

function Header() {
  return (
    <div className="m-4 border-b-2 ">
      <ul className="flex gap-5 text-gray-400">
        <li className="px-2 py-3">Your</li>
        <li className="px-2 py-3 text-black border-b-4 border-pink-500">All</li>
        <li className="px-2 py-3">Blocked</li>
      </ul>
    </div>
  );
}

export default Header;
