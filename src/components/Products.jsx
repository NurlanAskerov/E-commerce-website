import React, {  useEffect, useState } from 'react'
import Product from './Product'
import fetchApi from './fetchApi'

const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetchApi('/products?limit=12').then(data=>setProducts(data))
  },[])
  return (
    <div className='container max-sm:mx-0 mx-auto w-[100vw] pb-10'>

    <h1 className='text-center font-bold text-5xl m-5 pt-10 mb-16'>Products</h1>
    <div className='flex flex-wrap mx-2 w-full justify-center'>
        {
            products.map(product=>(
                <Product key={product.id} product={product}/>
            ))
        }</div>
    </div>
  )
}

export default Products