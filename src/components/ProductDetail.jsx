import React, {  useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from './fetchApi'
import AddToCart from './AddToCart'
import CardContext from '../useContext/CardContext'


const ProductDetail = () => {
    const [product,setProduct]=useState({})
    const {productId}=useParams()
     const { setCardItems, cardItems, total, setTotal } = useContext(CardContext);

    useEffect(()=>{
         fetchApi(`/products/${productId}`).then(data=>setProduct(data))
    },[productId])
     
    // const handleAdd = (product) => {
    //   const exsistingItem = cardItems.find((item) => item.id === product.id);
    //   if (exsistingItem) {
    //     const updatedItems = cardItems.map((product) =>
    //       product.id === exsistingItem.id
    //         ? { ...product, quantity: product.quantity + 1 }
    //         : product
    //     );
    //     setCardItems(updatedItems);
    //   } else {
    //     setCardItems([...cardItems, { ...product, quantity: 1 }]);
    //   }
    //   setTotal(total + product.price);
    // };
  return (
    <div className='mt-36 m-20'>
      <div className="flex max-lg:flex-col ">
          <div className="flex w-1/2 justify-center items-center max-lg:w-full">
        <img className='max-w-[200px] m-10' src={product.image}/>
        </div>
          <div className="product-details p-6">
            <h1 className='text-2xl font-bold py-2'>{product.title}</h1>
             <p className='text-sm opacity-90 py-2'>Category : {product.category}</p>
             <h3 className='font-bold py-2'>{product.description}</h3>
           <button className='px-3 py-2 text-white bg-black my-3' onClick={()=>AddToCart(product,setCardItems, cardItems, total, setTotal)}>Add to cart</button>
          </div>
      </div>
      </div>
  )
}

export default ProductDetail