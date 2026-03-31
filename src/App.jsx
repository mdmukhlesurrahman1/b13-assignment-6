import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import ProductsSection from "./components/ProductsSection";
import { Suspense } from "react";
// import { useState } from "react";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const notify = () => toast.success("Wow so easy!");
  // const [tab, setTab] = useState("Products");

  return (
    <>
      <NavBar />
      <Hero />
      <Statistics />

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <ProductsSection productsPromise={productsPromise} />
      </Suspense>

      <button onClick={notify} className="btn btn-success text-white font-bold">
        Test
      </button>

      <ToastContainer />
    </>
  );
}

export default App;
