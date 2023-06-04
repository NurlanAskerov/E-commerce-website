import React, { useContext, useState } from "react";
import CardContext from "../useContext/CardContext";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { ToastContainer } from 'react-toastify';

const Product = ({ product }) => {
  const { setCardItems, cardItems, total, setTotal } = useContext(CardContext);
  return (
    <>
      <div className="m-2 border overflow-hidden p-3 rounded bg-white">
        <div className="p-2 md:h-[300px] md:w-[300px] w-full flex justify-center items-center">
        <Link to={`products/${product.id}`}>
          <img
            className="max-h-[160px] hover:scale-110 transition-all"
            src={product.image}
          /></Link>
        </div>
        <div className="w-[300px] min-w-[230px] p-1">
          <h4 className="font-light text-sm opacity-60">{product.category}</h4>
          <h2 className="font-bold hover:z-10">{product.title}</h2>
          <h3>{product.price} $</h3>
          <div className="flex justify-between">
          <ToastContainer/>
            <button
              className="border-2 border-black m-2 hover:bg-black hover:text-white p-1 px-3 "
              onClick={(e) => AddToCart(product,setCardItems, cardItems, total, setTotal)}
            >
            Add
            </button>
            <Link to={`products/${product.id}`} className="p-1 px-3 m-2 mt-3 border-2 rounded text-white border-amber-500 hover:bg-white hover:text-amber-500 bg-amber-500">
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
