import { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment className="app">
      <Header />
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
