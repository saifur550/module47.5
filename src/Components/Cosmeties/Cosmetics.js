import React, { useState, useEffect } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
const [cosmetics, setCosmetics]  = useState([]);
useEffect(()=>{
    fetch('./cosmetics.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
    .then(data => console.log(data))
},[])
    return (
        <div>
           <h2> Buy something from online </h2>
           {
               cosmetics.map(cosmetic => <Cosmetic 
                key = {Cosmetic.index}
                cosmetic={cosmetic}></Cosmetic>)
           }
        </div>
    );
};

export default Cosmetics;