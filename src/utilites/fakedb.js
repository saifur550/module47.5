//use localstorage as your db for now 

const addToDb = (id)=>{
    const exist = localStorage.getItem('shopping-cart');
    console.log(exist);
    let shopping_cart = { };
    shopping_cart[id] = 0

    if( !exist ){
        shopping_cart[id] = 1;
    }else{
       shopping_cart = JSON.parse(exist);
       

    }
   
}

export{addToDb}
