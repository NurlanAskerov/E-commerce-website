import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import CardContext from "../useContext/CardContext";

const Navbar = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <nav>
      <div className="bg-transparent fixed w-screen max-sm:px-0 bg-white top-0 z-50 h-16 p-2 border-b-2 shadow-sm ">
        <div className="flex justify-between text-xl font-bold px-10">
          <Link to="/">
            {" "}
            <GiShoppingBag className="cursor-pointer m-2 font-bold text-4xl" />
          </Link>
          <span className="relative">
            <Link to="card">
              <FiShoppingCart className="cursor-pointer m-2 font-bold text-3xl" />
              <span className=' absolute bg-red-700 top-0 right-0 text-sm text-white px-1 rounded-full'style={{ display: cardItems.length ? 'block' : 'none' }}>{cardItems.length}</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
