import React from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from "react";
import Title from './Title';
import Item from './Item';
import {useState,useEffect} from 'react'



const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,20));

    },[])


  return (
    
     <div className ='my-10'>
       <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTION'}/>
          <p className ='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quo repudiandae corrupti nisi maxime dignissimos nobis nihil saepe deleniti mollitia!
          </p>
       </div>

       {/* Rendendering products */}
       <div className ='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
           latestProducts.map((item,index)=>(
            <Item key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
           )) 
        }
       </div>
     </div>
  )
}

export default LatestCollection;