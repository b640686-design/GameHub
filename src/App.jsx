import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

import Games from "./Pages/Games";
import Game from "./Pages/Game";
import Cart from "./Pages/Cart";
import Receipt from "./Pages/Receipt";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipt/:id" element={<Receipt />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;