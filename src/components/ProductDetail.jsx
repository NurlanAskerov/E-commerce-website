import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from './fetchApi';
import AddToCart from './AddToCart';
import CardContext from '../useContext/CardContext';
import { ToastContainer } from 'react-toastify';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { setCardItems, cardItems, total, setTotal } = useContext(CardContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi(`/products/${productId}`).then((data) => {
      setProduct(data);
      setIsLoading(false);
    });
  }, [productId]);

  return (
    <div className="mt-36 sm:m-20 m-2">
      <ToastContainer/>
      {isLoading ? (
        <div className="w-full h-[100vh] flex justify-center items-center text-2xl font-bold">
          Loading...
        </div>
      ) : (
        <div className="flex max-lg:flex-col">
          <div className="flex w-1/2 justify-center items-center max-lg:w-full">
            <img className="max-w-[200px] m-10" src={product.image} alt={product.title} />
          </div>
          <div className="product-details p-6">
            <h1 className="text-2xl font-bold py-2">{product.title}</h1>
            <p className="text-sm opacity-90 py-2">Category: {product.category}</p>
            <h3 className="font-bold py-2">{product.description}</h3>
            <button
              className="px-3 py-2 text-white bg-black my-3"
              onClick={() => AddToCart(product, setCardItems, cardItems, total, setTotal)}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
