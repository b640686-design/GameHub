import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />

      <div className="game-info">
        <h2>{game.title}</h2>

        <p className="genre">{game.genre}</p>

        <p className="rating">
          ⭐ {game.rating}
        </p>

        <div className="game-bottom">
          <span>${game.price}</span>

          <Link to={`/game/${game.id}`}>
            <button>Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;