import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import OrderModal from "./components/Meals/OrderModal";

function App() {
  const [isshown,setisshown] = React.useState(false);

  function Handleisshown()
  {
      setisshown(!isshown);
  }

  return (
    <div>
      <Header handleCart={Handleisshown} />
      <Summary />
      <Meals />
     { isshown && <OrderModal handleCart={Handleisshown} />}
    </div>
  );
}

export default App;
