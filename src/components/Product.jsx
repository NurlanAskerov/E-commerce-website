import React, { useContext, useState } from "react";
import CardContext from "../useContext/CardContext";

const Product = ({ product }) => {
  const { setCardItems, cardItems ,total,setTotal} = useContext(CardContext);
  const handleAdd = (product) => {
    const exsistingItem = cardItems.find((item) => item.id === product.id)
    if (exsistingItem) {
         const updatedItems=cardItems.map(product=>product.id===exsistingItem.id ? {...product,quantity:product.quantity+1} : product)
        setCardItems(updatedItems);
  
    } else {
  
        setCardItems([...cardItems, { ...product, quantity: 1 }]);
  
    }
    setTotal(total+product.price)

  
};
  return (
    <div className=" w-1/4  px-10 py-5 mx-5 m-2 bg-gray-200">
      <img className="w-25 m-2 mx-auto  h-25" src={product.image}/>
      <h1 className="font-bold">
        {product.title}
      </h1>
      <button
        onClick={() => handleAdd(product)}
        className="bg-blue-600 hover:bg-blue-700 rounded px-2 py-1 text-white"
      >
        Add
      </button><span className="bg-white rounded p-2 m-2">{product.price}$</span>
    </div>
  );
};

export default Product;
