import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meals from "./components/Meals/Meals";
import OrderModal from "./components/Meals/OrderModal";

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Meals />
      <OrderModal />
    </div>
  );
}

export default App;
