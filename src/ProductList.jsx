
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./CartSlice.jsx";

const categories = [
  {
    name: "Easy-Care Plants",
    description: "Low-maintenance favourites for new plant parents.",
    plants: [
      { id: "snake", name: "Snake Plant", price: 18, description: "Architectural leaves and easy care.", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1c?auto=format&fit=crop&w=800&q=80" },
      { id: "zz", name: "ZZ Plant", price: 22, description: "Glossy foliage for relaxed plant care.", image: "https://images.unsplash.com/photo-1632207691143-643e2e7f4d7b?auto=format&fit=crop&w=800&q=80" },
      { id: "pothos", name: "Golden Pothos", price: 14, description: "A trailing plant with golden-green leaves.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
      { id: "jade", name: "Jade Plant", price: 16, description: "A compact succulent with rounded leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "spider", name: "Spider Plant", price: 13, description: "Graceful leaves for desks and shelves.", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80" },
      { id: "aloe", name: "Aloe Vera", price: 12, description: "A sculptural succulent for a sunny spot.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    name: "Tropical Statement Plants",
    description: "Bold foliage that brings a tropical feel indoors.",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 32, description: "Iconic split leaves make a striking display.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
      { id: "bird", name: "Bird of Paradise", price: 48, description: "Dramatic upright leaves for bright rooms.", image: "https://images.unsplash.com/photo-1597055181300-9b3a6e7a4a42?auto=format&fit=crop&w=800&q=80" },
      { id: "rubber", name: "Rubber Plant", price: 29, description: "Deep green leaves with a polished look.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "fiddle", name: "Fiddle Leaf Fig", price: 42, description: "Large violin-shaped leaves with character.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "calathea", name: "Calathea Orbifolia", price: 27, description: "Broad leaves with beautiful soft stripes.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
      { id: "philodendron", name: "Heartleaf Philodendron", price: 19, description: "Heart-shaped leaves that trail gracefully.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    name: "Petite Plants & Succulents",
    description: "Small-space greenery for windowsills and desks.",
    plants: [
      { id: "echeveria", name: "Echeveria", price: 10, description: "A compact succulent with rosette-shaped leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "haworthia", name: "Haworthia Zebra", price: 11, description: "A petite succulent with striped leaves.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
      { id: "pearls", name: "String of Pearls", price: 17, description: "Bead-like leaves spill over the edge of a pot.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
      { id: "peperomia", name: "Peperomia", price: 15, description: "A tidy tabletop plant with rounded leaves.", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80" },
      { id: "panda", name: "Panda Plant", price: 12, description: "A soft-looking succulent with silvery leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "bamboo", name: "Lucky Bamboo", price: 16, description: "An elegant green accent for a desk or shelf.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map(item => item.id));

  return (
    <main className="catalogue page-wrap" id="plants">
      <div className="section-heading">
        <p className="eyebrow">FIND YOUR GREEN</p>
        <h1>Plants for Every Space</h1>
        <p>Explore our collection and find a new leafy friend for your home.</p>
      </div>

      {categories.map(category => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>

          <div className="plant-grid">
            {category.plants.map(plant => {
              const isAdded = addedIds.has(plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-card-footer">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button
                        className="button button-small"
                        type="button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
