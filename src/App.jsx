
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import { selectCartCount } from "./CartSlice.jsx";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const cartCount = useSelector(selectCartCount);

  const goTo = nextPage => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <button
          className="brand"
          type="button"
          onClick={() => goTo("home")}
          aria-label="Paradise Nursery home"
        >
          <span className="brand-mark" aria-hidden="true">❧</span>
          <span>Paradise <strong>Nursery</strong></span>
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          <button
            className={page === "home" ? "nav-link active" : "nav-link"}
            type="button"
            onClick={() => goTo("home")}
          >
            Home
          </button>

          <button
            className={page === "plants" ? "nav-link active" : "nav-link"}
            type="button"
            onClick={() => goTo("plants")}
          >
            Plants
          </button>

          <button
            className={page === "cart" ? "nav-link cart-nav active" : "nav-link cart-nav"}
            type="button"
            onClick={() => goTo("cart")}
          >
            <span aria-hidden="true">🛒</span>
            Cart
            <span className="cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-overlay">
              <p className="eyebrow hero-eyebrow">
                A GREENER HOME STARTS HERE
              </p>
              <h1>Bring Home a Little <em>Paradise.</em></h1>
              <p className="hero-copy">
                Discover houseplants that bring life, calm, and natural beauty
                into your space.
              </p>
              <button
                className="button hero-button"
                type="button"
                onClick={() => goTo("plants")}
              >
                Get Started <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>

          <AboutUs />

          <section className="home-callout">
            <div>
              <p className="eyebrow">YOUR NEXT FAVOURITE PLANT</p>
              <h2>Make Room for Something Green.</h2>
            </div>
            <button className="button" type="button" onClick={() => goTo("plants")}>
              Explore Plants
            </button>
          </section>
        </main>
      )}

      {page === "plants" && <ProductList />}

      {page === "cart" && (
        <CartItem onContinueShopping={() => goTo("plants")} />
      )}

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Paradise Nursery</p>
        <p>Grow well. Live green.</p>
      </footer>
    </div>
  );
}
