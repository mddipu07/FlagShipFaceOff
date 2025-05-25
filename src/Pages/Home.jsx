
import { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import PhonesContainer from '../Components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones,setPhones] = useState(data)

const handleSearch = (e, text) =>{
    e.preventDefault()
    const searchedPhones = data.filter(phone => phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
    phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())

)
    
    console.log(searchedPhones);
}


    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
           <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;