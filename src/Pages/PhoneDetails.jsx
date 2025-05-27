import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/Ui/Button';
import { MdBookmarkAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { addFavourite, addToCart, getCart } from '../Utility/Index';
import { CartContext } from '../Providers/Contexts';


const PhoneDetails = () => {
    const {setCart} = useContext(CartContext)


    const data = useLoaderData()
    const {id} = useParams()
   const singlePhone = data.find(phone => phone.id === parseInt(id))
   const {
name,
image,
brand,
model,
price,
description,
camera_info,
   } = singlePhone || {}
   
const handleFavourite = () => {
    addFavourite(singlePhone)
}
const handleCart = () => {
    addToCart(singlePhone)
    setCart(getCart)
}
    return (
        <div className='w-full py-12'>
             <img src={image} alt="Image" className='w-full mx-auto md:w-auto mb-8'  />
             {/* tittle and buttons */}
            <div className='flex justify-between'>
                 <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                 
                 
             <div className='flex gap-3'>
                <Button onClick={handleCart} label={<FaCartShopping />
                   }></Button>
                   <Button onClick={handleFavourite} label={<MdBookmarkAdd />
                    }></Button>
             </div>
                 
            </div>
            {/* Details
             */}
             <div>
            
             </div>
        </div>
    );
};

export default PhoneDetails;