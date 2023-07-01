import React from 'react';

  const CartContext = React.createContext({
    Items:[],
    Totalamount:0,
    Additem:(item)=>{},
    Removeitem:(id)=>{}
 });

 export default CartContext;

