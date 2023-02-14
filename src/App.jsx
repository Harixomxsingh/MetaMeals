import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <Fragment className="app">
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
