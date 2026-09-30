import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <h1>Добро пожаловать в Game Hub 🎮</h1>

      <p>
        Покупай игры, получай чек и сохраняй историю покупок.
      </p>

      <Link to="/games">
        <button>Смотреть игры</button>
      </Link>
    </main>
  );
};

export default Home;