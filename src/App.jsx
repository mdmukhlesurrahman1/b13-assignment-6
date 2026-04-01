import "./App.css";
import { useState } from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import ProductsSection from "./components/ProductsSection";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar cartItems={cartItems} />
      <Hero />
      <Statistics />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-50">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <ProductsSection
          productsPromise={productsPromise}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </Suspense>

      <GetStarted />
      <Pricing />
      <Workflow />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
