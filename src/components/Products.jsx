import React, { useEffect, useState } from 'react'
import Product from './product'


const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])
  return (
    <div className='container flex justify-center w-full'>
    <div className='flex flex-wrap mx-auto'>
        {
            products.map(product=>(
                <Product key={product.id} product={product}/>
            ))
        }</div>
    </div>
  )
}

export default Products