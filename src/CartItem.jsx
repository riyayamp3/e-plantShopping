
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from "./CartSlice.jsx";

const money = value => `$${value.toFixed(2)}`;

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="cart-page page-wrap">
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">🪴</span>
          <h1>Your Cart Is Empty</h1>
          <p>Find a plant you love and bring a little greenery home.</p>
          <button className="button" onClick={onContinueShopping} type="button">
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page page-wrap">
      <div className="section-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Review your plants and quantities before checkout.</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Shopping cart items">
          {items.map(item => (
            <article className="cart-row" key={item.id}>
              <img
                className="cart-thumbnail"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-product-info">
                <h2>{item.name}</h2>
                <p>Unit price: {money(item.price)}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="line-total">
                  Item total: {money(item.price * item.quantity)}
                </p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                type="button"
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label={`Remove ${item.name}`}
              >
                Remove
              </button>
            </article>
          ))}
        </section>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-line">
            <span>Items ({itemCount})</span>
            <span>{money(total)}</span>
          </div>

          <div className="summary-line summary-total">
            <strong>Total</strong>
            <strong>{money(total)}</strong>
          </div>

          <button
            className="button checkout-button"
            type="button"
            onClick={() => window.alert("Checkout is coming soon!")}
          >
            Checkout
          </button>

          <button
            className="button button-outline checkout-button"
            type="button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </aside>
      </div>
    </main>
  );
}
