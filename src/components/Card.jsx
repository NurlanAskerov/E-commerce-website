import React, { useContext } from "react";
import CardContext from "../useContext/CardContext";

const Card = () => {
  const { cardItems, setCardItems, total, setTotal } = useContext(CardContext);
  const handleClear = () => {
    setCardItems([]);
    setTotal(0);
  };
  const removeItem = (item) => {
    const exsistingItem = cardItems.find((product) => product.id === item.id);
    if (exsistingItem) {
      if (exsistingItem.quantity > 1) {
        const updatedItems = cardItems.map((product) =>
          product.id === exsistingItem.id
            ? { ...product, quantity: item.quantity - 1 }
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
    <>
      <h1 className="font-bold text-2xl text-center text-red-500">Card</h1>
      {cardItems.map((item) => (
        <div key={item.id} className="px-5 mx-5 flex justify-between font-bold">
          <div className="flex">
          <img className="w-10 h-10" src={item.image}/>
          <div className="flex items-center">
            <h1 className="px-3">{item.title}</h1>
            <h2 className="text-green-700">{item.price}$</h2></div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-red-600 hover:bg-red-700 rounded font-bold py-1 text-xl text-white m-2 mx-5 px-5"
              onClick={() => removeItem(item)}
            >
              {item.quantity === 1 ? "Remove" : "-"}
            </button>
            <p>{item.quantity}x</p>
            <button
              className="bg-green-600 hover:bg-green-700 rounded  font-bold text-xl py-1 text-white m-2 mx-5 px-5"
              onClick={() => addItem(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <div className="font-bold text-lg mt-3 mx-5 px-5">
          Total:<span className="text-green-700"> {total.toFixed(2)}$</span>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 rounded px-2 py-1 text-white m-2 mx-5 px-5"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Card;
