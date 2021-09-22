import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const {name ,age,gender} = props.cosmetic;
    return (
        <div className="d-grid">
            <h2> Name : {name}</h2>
            <h2> Price : {age}</h2>
            <h2> gender : {gender}</h2>
        </div>
    );
};

export default Cosmetic;