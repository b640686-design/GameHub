import React from "react";

import { games } from "../data/games";
import GameCard from "../Components/GameCard";

const Games = () => {
  return (
    <main className="games-page">
      <h1>Все игры 🎮</h1>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </main>
  );
};

export default Games;