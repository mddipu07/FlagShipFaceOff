import React from 'react';
import Hero from '../Components/Hero/Hero';
import PhonesContainer from '../Components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Hero></Hero>
           <PhonesContainer phones={data}></PhonesContainer>
        </div>
    );
};

export default Home;