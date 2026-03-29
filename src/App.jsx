import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";

// import { useState } from "react";

function App() {
  const notify = () => toast.success("Wow so easy!");
  // const [tab, setTab] = useState("Products");

  return (
    <>
      <NavBar />
      <Hero />
      <Statistics />

      <button onClick={notify} className="btn btn-success text-white font-bold">
        Test
      </button>

      <ToastContainer />
    </>
  );
}

export default App;
