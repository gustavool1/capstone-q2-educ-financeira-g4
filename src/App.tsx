import React from "react";
import NavbarHome from "./Components/NavbarHome";
import { ToastAnimated } from "./Components/Toast/style";
import { Routes } from "./Routes";

const App = () => {
  return (
    <>
      <ToastAnimated/>
      <NavbarHome/>
      <Routes />
    </>
  );
};

export default App;
