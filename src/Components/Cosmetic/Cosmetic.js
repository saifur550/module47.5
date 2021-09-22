import React from 'react';
import { addToDb } from '../../utilites/fakedb';

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const {name ,price,gender, _id} = props.cosmetic;
    const handleBuy = id => {
        //set to local storage
        // console.log(id);
        addToDb(id)
    }
    return (
        <div className="d-grid">
            <h2> Name : {name}</h2>
            <h2> {_id}. Price : {price}</h2>
            <p> gender : {gender}</p>
            <button onClick={()=>handleBuy(_id)}> Buy </button>
        </div>
    );
};

export default Cosmetic;