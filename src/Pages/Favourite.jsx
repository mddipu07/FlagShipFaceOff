import React, { useEffect, useState } from 'react';
import PhoneCard from '../Components/PhoneCard/PhoneCard';
import { getFavourites, removeFavourite } from '../Utility/Index';
import EmptyState from '../Components/Ui/EmptyState';

const Favourite = () => {
    const [displayPhones , setDisplayPhones] = useState([]);
    useEffect(() =>{
        const savedPhones = getFavourites()
        setDisplayPhones(savedPhones)
    },[])
    const handleDelete = id => {
        removeFavourite(id)
        setDisplayPhones(getFavourites())
    }
    if(displayPhones.length < 1) return <EmptyState></EmptyState>
    return (
         <div className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
            displayPhones.map(phone => <PhoneCard handleDelete={handleDelete} key={phone.id} phone={phone} deletable={true}></PhoneCard>)
            }
        </div>
        </div>
    );
};

export default Favourite;