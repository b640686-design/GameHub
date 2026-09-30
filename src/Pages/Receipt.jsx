import React from "react";
import { Link, useParams } from "react-router-dom";

const Receipt = () => {
  const { id } = useParams();

  const savedOrder = localStorage.getItem(`order-${id}`);

  if (!savedOrder) {
    return (
      <main className="receipt-page">
        <div className="receipt">
          <h1>Чек не найден 😔</h1>

          <Link to="/games">
            Вернуться в магазин
          </Link>
        </div>
      </main>
    );
  }

  const order = JSON.parse(savedOrder);

  return (
    <main className="receipt-page">

      <div className="receipt">

        <div className="receipt-header">
          <h1>GAME HUB 🎮</h1>

          <p>Чек покупки</p>
        </div>

        <div className="receipt-info">

          <p>
            <b>Номер заказа:</b> #{order.id}
          </p>

          <p>
            <b>Дата:</b> {order.date}
          </p>

        </div>

        <div className="receipt-games">

          {order.games.map((game) => (
            <div
              className="receipt-game"
              key={game.id}
            >
              <span>{game.title}</span>

              <span>
                {game.price === 0
                  ? "Бесплатно"
                  : `$${game.price}`}
              </span>
            </div>
          ))}

        </div>

        <div className="receipt-total">

          <span>Итого:</span>

          <strong>
            ${Number(order.total).toFixed(2)}
          </strong>

        </div>

        <div className="receipt-success">
          ✅ Заказ успешно оформлен
        </div>

        <Link
          className="receipt-button"
          to="/games"
        >
          Вернуться в магазин
        </Link>

      </div>

    </main>
  );
};

export default Receipt;