import "./index.css";
import React from "react";
import Routing from "./Routing";
import { ToastContainer, Bounce } from "react-toastify";

export default function App() {
  return (
    <React.Fragment>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </React.Fragment>
  );
}
