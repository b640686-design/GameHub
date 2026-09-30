import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { games } from "../data/games";
import { useCart } from "../Context/CartContext";

const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const game = games.find((item) => item.id === Number(id));

  if (!game) {
    return (
      <div className="not-found">
        <h1>Игра не найдена 😔</h1>

        <Link to="/games">
          <button>Вернуться в магазин</button>
        </Link>
      </div>
    );
  }

  const handleBuy = () => {
    addToCart(game);
    navigate("/cart");
  };

  return (
    <main className="game-page">
      <div className="game-details">

        <div className="game-image-wrapper">
          <img
            className="game-details-image"
            src={game.image}
            alt={game.title}
          />
        </div>

        <div className="game-details-info">

          <p className="game-genre">
            {game.genre}
          </p>

          <h1>{game.title}</h1>

          <p className="game-rating">
            ⭐ {game.rating} / 10
          </p>

          <p className="game-description">
            {game.description}
          </p>

          <div className="game-purchase">

            <span>
              {game.price === 0
                ? "Бесплатно"
                : `$${game.price}`}
            </span>

            <button onClick={handleBuy}>
              Купить
            </button>

          </div>

          <Link to="/games">
            ← Вернуться к играм
          </Link>

        </div>
      </div>
    </main>
  );
};

export default Game;