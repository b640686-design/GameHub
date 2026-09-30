import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const orders = Object.keys(localStorage)
    .filter((key) => key.startsWith("order-"))
    .map((key) => JSON.parse(localStorage.getItem(key)))
    .sort((a, b) => b.id - a.id);

  return (
    <main className="profile-page">

      <div className="profile-header">
        <div className="profile-avatar">
          👤
        </div>

        <div>
          <h1>Мой профиль</h1>
          <p>История покупок Game Hub</p>
        </div>
      </div>

      <div className="profile-stats">

        <div className="profile-stat">
          <span>Покупок</span>
          <strong>{orders.length}</strong>
        </div>

        <div className="profile-stat">
          <span>Игр куплено</span>
          <strong>
            {orders.reduce(
              (sum, order) => sum + order.games.length,
              0
            )}
          </strong>
        </div>

        <div className="profile-stat">
          <span>Потрачено</span>
          <strong>
            $
            {orders
              .reduce(
                (sum, order) => sum + Number(order.total),
                0
              )
              .toFixed(2)}
          </strong>
        </div>

      </div>

      <section className="orders-section">

        <h2>История заказов</h2>

        {orders.length === 0 ? (
          <div className="no-orders">

            <h3>Покупок пока нет 🛒</h3>

            <p>
              Купленные игры появятся здесь.
            </p>

            <Link to="/games">
              <button>Перейти к играм</button>
            </Link>

          </div>
        ) : (
          <div className="orders-list">

            {orders.map((order) => (
              <div
                className="order-card"
                key={order.id}
              >

                <div className="order-top">

                  <div>
                    <p className="order-number">
                      Заказ #{order.id}
                    </p>

                    <p className="order-date">
                      {order.date}
                    </p>
                  </div>

                  <strong className="order-price">
                    ${Number(order.total).toFixed(2)}
                  </strong>

                </div>

                <div className="order-games">

                  {order.games.map((game) => (
                    <div
                      className="order-game"
                      key={game.id}
                    >

                      <img
                        src={game.image}
                        alt={game.title}
                      />

                      <span>{game.title}</span>

                    </div>
                  ))}

                </div>

                <Link
                  className="order-receipt"
                  to={`/receipt/${order.id}`}
                >
                  Открыть чек →
                </Link>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
};

export default Profile;