import "./App.css";
// import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast.success("Wow so easy!");
  // const [tab, setTab] = useState("Products");


  return (
    <>
      <button onClick={notify} className="btn btn-success text-white font-bold">Test</button>
      <ToastContainer />
    </>
  );
}

export default App;
