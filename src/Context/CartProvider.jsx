import CartContext from "./CartContext.jsx";
import React from "react";

const intialState = {
    Items:[],
    Totalamount:0
}

const cartReducer = (state,action)=>{
   
    if(action.type ==="ADD")
    {  
        console.log(action.item.price , typeof(action.item.amount ), typeof(action.item.amount))
       const updatedItems = state.Items.concat(action.item);
       const updatedTotalAmount = state.Totalamount + action.item.price * action.item.amount
       return {
        Items:updatedItems,
        Totalamount:updatedTotalAmount
       }
    }
    if(action.type === "REMOVE")
    {

    }
    return  intialState;
}

const CartProvider = (props)=>{

    const [cartState , dispatchCartAction] = React.useReducer(cartReducer,intialState)
    
    const Additem=(item)=>{
        dispatchCartAction({type:"ADD" , item})
    };
    const Removeitem=(id)=>{
        dispatchCartAction({type:"REMOVE",id})
    };
    
    const cartContext = {
        items:cartState.Items,
        Totalamount:cartState.Totalamount,
        Additems:Additem,
        Removeitems:Removeitem
    }
    return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider> 
          
}

export default CartProvider;