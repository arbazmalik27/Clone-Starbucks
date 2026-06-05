import React from 'react'
import '../styles/Drinks.css'

const DRINKS_DATA = [
  {
    id: 'caramel-protein-matcha',
    name: 'New Iced Caramel Protein Matcha',
    description: 'Smooth, balanced and packed with up to 31 grams of protein per grande. Vibrant unsweetened matcha, Protein-boosted Milk and caramel syrup. Enjoy hot or iced with sugar-free options.',
    price: 350.00,
    image: 'b.png',
    theme: 'green'
  },
  {
    id: 'caramel-protein-latte',
    name: 'New Caramel Protein Latte',
    description: 'Sweet and smooth with up to 27 grams of protein per grande. Signature espresso, Protein-boosted Milk and caramel syrup. Enjoy hot or iced with sugar-free options.',
    price: 380.00,
    image: 'b1.png',
    theme: 'green'
  },
  {
    id: 'iced-pistachio-latte',
    name: 'Iced Pistachio Latte',
    description: 'Our beloved Pistachio Latte served over ice and finished with a salted brown-buttery topping.',
    price: 340.00,
    image: 'b5.png',
    theme: 'offwhite'
  },
  {
    id: 'pistachio-latte',
    name: 'Pistachio Latte',
    description: 'A comforting favorite. Flavors of sweet pistachio, our signature espresso and steamed milk. Finished with a salted brown-buttery topping.',
    price: 320.00,
    image: 'b2.png',
    theme: 'offwhite'
  },
  {
    id: 'pistachio-cortado',
    name: 'New Pistachio Cortado',
    description: 'An elevated pick-me-up with three ristretto shots of Starbucks® Blonde Espresso Roast, sweet pistachio flavors and steamed milk with a salted brown-buttery topping. Served in a short (8 fl oz) cup.',
    price: 290.00,
    image: 'b3.png',
    theme: 'green'
  },
  {
    id: 'pistachio-cream-cold-brew',
    name: 'Pistachio Cream Cold Brew',
    description: 'A silky-smooth winter boost. Our slow-steeped signature cold brew, sweet vanilla flavor and a layer of pistachio cream cold foam. Finished with a salted brown-buttery topping.',
    price: 320.00,
    image: 'b6.png',
    theme: 'green'
  },
  {
    id: 'iced-dubai-matcha',
    name: 'Iced Dubai Chocolate Matcha',
    description: 'A viral fan favorite returns. Our vibrant matcha latte with sweet pistachio sauce and a layer of chocolate cream cold foam. Finished with a salted brown-buttery topping. Enjoy for a limited time.',
    price: 390.00,
    image: 'b7.png',
    theme: 'offwhite'
  },
  {
    id: 'iced-dubai-mocha',
    name: 'New Iced Dubai Chocolate Mocha',
    description: 'Dubai chocolate meets coffee. Our signature espresso and rich chocolate mocha sauce with silky pistachio cream cold foam and a salted brown-buttery topping. Savor while you can.',
    price: 420.00,
    image: 'b8.png',
    theme: 'offwhite'
  },
  {
    id: 'truffle-egg-bites',
    name: 'New Truffle, Mushroom & Brie Egg Bites',
    description: 'Velvety and flavorful. Delicious cage-free eggs, black truffles, creamy Brie and mushrooms cooked sous vide. Savor for a limited time.',
    price: 280.00,
    image: 'b10.png',
    theme: 'offwhite'
  },
  {
    id: 'khloud-popcorn',
    name: 'Snack smart with Khloud',
    description: 'Khloud Protein Popcorn is now at Starbucks. Created by Khloé Kardashian, add an extra 7g of protein to your day with a bag of Sweet and Salty Kettle Corn.',
    price: 250.00,
    image: 'b9.png',
    theme: 'offwhite'
  }
]

export default function Drinks({ onOrder }) {
  return (
    <div className="drinks-page">
      {/* Hero Section */}
      <section className="drinks-hero">
        <div className="drinks-hero-content">
          <h1 className="drinks-hero-title">Your handcrafted ritual starts here</h1>
        </div>
      </section>

      {/* Grid of Drinks */}
      <section className="drinks-menu-section">
        <div className="drinks-menu-container">
          {DRINKS_DATA.map((product) => (
            <div key={product.id} className="drinks-menu-card animate-fade-in-up">
              <div className="drinks-menu-card-image">
                <img src={`/${product.image}`} alt={product.name} />
              </div>
              <div className={`drinks-menu-content ${product.theme}`}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={() => onOrder(product)}>
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
