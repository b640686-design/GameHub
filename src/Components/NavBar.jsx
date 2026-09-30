import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>🎮 GAME HUB</h1>

      <div className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/games">Игры</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/profile">Профиль</Link>
      </div>
    </nav>
  );
};

export default NavBar;