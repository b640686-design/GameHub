import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Корзина пуста 🛒</h1>

          <p>Добавь игру, чтобы она появилась здесь.</p>

          <Link to="/games">
            <button>Перейти к играм</button>
          </Link>
        </div>
      </main>
    );
  }

  const handleOrder = () => {
    const order = {
      id: Date.now(),
      games: cart,
      total: total,
      date: new Date().toLocaleString("ru-RU"),
    };

    localStorage.setItem(
      `order-${order.id}`,
      JSON.stringify(order)
    );

    clearCart();

    navigate(`/receipt/${order.id}`);
  };

  return (
    <main className="cart-page">

      <h1>Корзина 🛒</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cart.map((game) => (
            <div className="cart-item" key={game.id}>

              <img
                src={game.image}
                alt={game.title}
              />

              <div className="cart-item-info">
                <h2>{game.title}</h2>

                <p>{game.genre}</p>

                <span>
                  {game.price === 0
                    ? "Бесплатно"
                    : `$${game.price}`}
                </span>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(game.id)}
              >
                Удалить
              </button>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Итого</h2>

          <p>
            Игр: <b>{cart.length}</b>
          </p>

          <div className="cart-total">
            ${total.toFixed(2)}
          </div>

          <button
            className="order-button"
            onClick={handleOrder}
          >
            Оформить заказ
          </button>

          <button
            className="clear-button"
            onClick={clearCart}
          >
            Очистить корзину
          </button>

        </div>

      </div>

    </main>
  );
};

export default Cart;