import React, { useContext } from "react";
import CardContext from "../useContext/CardContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Card = () => {
  const { cardItems, setCardItems, total, setTotal } = useContext(CardContext);
  const handleClear = () => {
    toast.error('Cart cleared')
    setCardItems([]);
    setTotal(0);
  };
  const removeItem = (item) => {
    const exsistingItem = cardItems.find((product) => product.id === item.id);
    if (exsistingItem) {
      if (exsistingItem.quantity > 1) {
        const updatedItems = cardItems.map((product) =>
          product.id === exsistingItem.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        setCardItems(updatedItems);
      } else {
        const updatedItems = cardItems.filter(
          (product) => product.id !== item.id
        );
        setCardItems(updatedItems);
      }
      setTotal(total - item.price);
    }
  };
  const addItem = (item) => {
    const updatedItems = cardItems.map((product) =>
      product.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : product
    );
    setCardItems(updatedItems);
    setTotal(total + item.price);
  };
  return (
    <div className="pt-24 items-center min-h-[75vh] lg:px-36"> <>
      <h1 className="font-bold text-2xl text-center text-red-600 mb-2 ">Card</h1>
       {
         (cardItems.length>0?cardItems.map((item) => (
            <div key={item.id} className="px-5 mx-5 flex justify-between items-center font-bold flex-col sm:flex-row border">
              <div className="flex my-5 flex-col max-sm:items-center sm:flex-row">
              <img className="w-20 h-20" src={item.image}/>
              <div className="flex items-center">
              <Link to={`/products/${item.id}`}> <h1 className="px-3">{item.title}</h1></Link>
              </div>
              </div >
              <div className="flex items-center  mx-1 h-12 max-h-16 max-sm:mb-2">
                <h2 className="text-green-700 mx-5">{item.price}$</h2>
                <div className="border flex items-center">
                <button
                  className=" font-bold px-1 text-xl text-black  m-1 mx-2 "
                  onClick={() => removeItem(item)}
                >
                  -
                </button>
                <p className="mx-2">{item.quantity}x</p>
                <button
                  className=" text-black font-bold text-xl py-1 text-center  m-1 mx-2"
                  onClick={() => addItem(item)}
                >
                  +
                </button></div>
              </div> </div>)):(<p className="text-center p-20 text-xl text-red-600 font-bold">No items in the cart</p>)
        )}
      <div className="flex justify-between">
        <div className="font-bold text-lg mt-3 mx-5 px-5">
          Total:<span className="text-green-700"> {total.toFixed(2)}$</span>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 rounded py-1 text-white m-2 mx-5 px-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <ToastContainer/>
      </div></>
    </div>
  );
};

export default Card;
