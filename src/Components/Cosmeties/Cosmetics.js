import React from 'react';
import { someAdd, someSub } from '../../utilites/storage';

const Cosmetics = () => {
    const first = 50;
    const second = 60; 
    const sum = someAdd(first,second);
    const sub = someSub(first, second);
    return (
        <div>
            <h2> Result is : {sum}</h2>
            <h3>Result is : {sub}</h3>
        </div>
    );
};

export default Cosmetics;