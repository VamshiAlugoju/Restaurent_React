import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import OrderModal from "./components/Meals/OrderModal";
import CartProvider  from "./Context/CartProvider";


function App() {
  const [isshown,setisshown] = React.useState(false);
 

  function Handleisshown()
  {
      setisshown(!isshown);
  }

  return (
    <>
     <CartProvider>
      <Header handleCart={Handleisshown} />
      <Summary />
      <Meals />   
     { isshown && <OrderModal handleCart={Handleisshown} />}
    </CartProvider>
    </>
  );
}

export default App;
