import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">It's a great day for coffee</h1>
            <p className="home-hero-text">
              Start your morning with our handcrafted favorites, made fresh every day with premium ingredients and passion.
            </p>
            <Link to="/menu" className="btn btn-primary" style={{ padding: '14px 30px', fontSize: '15px' }}>
              Start an order
            </Link>
          </div>
          <div className="home-hero-image">
            <div className="home-hero-image-placeholder">
              <i className="fa-solid fa-mug-hot" style={{ fontSize: '72px', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', fontWeight: '600' }}>GreenLeaf Café</h3>
              <p style={{ fontSize: '13px', opacity: 0.8, marginTop: '5px', maxWidth: '240px' }}>
                Handcrafting premium espresso, matcha, and cold brews daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promos Container */}
      <div className="home-promos-container">
        
        {/* Section 1: Caramel Protein */}
        <section className="home-promo-section home-promo-green">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a1.png" alt="Caramel Protein Latte" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">Caramel protein is here</h2>
              <p className="home-promo-description">
                Power up with the new Caramel Protein Latte and Caramel Protein Matcha. Handcrafted with Protein-boosted Milk for up to 31 grams of protein per grande. Enjoy hot or iced with sugar-free options.
              </p>
              <Link to="/drinks" className="btn btn-secondary btn-white">
                Explore caramel protein
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Pistachio */}
        <section className="home-promo-section">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a2.png" alt="Pistachio Beverages" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">Hello, pistachio</h2>
              <p className="home-promo-description">
                A beloved flavor is back with the delicious new Pistachio Cortado, Pistachio Cream Cold Brew and favorite Pistachio Latte. Salty-sweet comfort any time of day.
              </p>
              <Link to="/drinks" className="btn btn-secondary">
                Explore pistachio
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Khloe Kardashian Menu */}
        <section className="home-promo-section home-promo-green">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a3.png" alt="Khloé Kardashian Popcorn & Drink" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">Snack smart with Khloé Kardashian</h2>
              <p className="home-promo-description">
                Fuel your day and order Khloé’s secret menu protein drink, only in the app. Pair it with a bag of Khloud popcorn, now available at Starbucks.
              </p>
              <Link to="/menu" className="btn btn-secondary btn-white">
                Order in the app
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Join Rewards */}
        <section className="home-promo-section">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a4.png" alt="Starbucks Rewards Free Coffee" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">But first, free coffee</h2>
              <p className="home-promo-description">
                A free handcrafted drink with purchase is all yours during your first week as a Starbucks® Rewards member.*
              </p>
              <Link to="/signup" className="btn btn-secondary">
                Join now
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Refills */}
        <section className="home-promo-section home-promo-green" id="rewards">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a5.png" alt="Free Refills Coffee Cup" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">Grab a seat. Get free refills.</h2>
              <p className="home-promo-description">
                When you stay to enjoy your favorite beverage in the café, refills of hot and iced brewed coffee or tea are on us.**
              </p>
              <Link to="/drinks" className="btn btn-secondary btn-white">
                Order now
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Nondairy */}
        <section className="home-promo-section">
          <div className="container">
            <div className="home-promo-image-box">
              <img src="/a6.png" alt="Nondairy Milks Selection" />
            </div>
            <div className="home-promo-text-box">
              <h2 className="home-promo-title">Nondairy choices. No extra charge.</h2>
              <p className="home-promo-description">
                Try your hot or iced favorite with nondairy milk. Choose from oat, almond, coconut or soy—for no additional charge.
              </p>
              <Link to="/drinks" className="btn btn-secondary">
                Order now
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Rewards details disclosures */}
      <section className="footer-para" id="about">
        <p>
          *Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good at participating U.S. stores for a handcrafted menu-sized beverage with qualifying purchase (₹600 max value). Qualifying purchase excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up before 03/31/2026.
        </p>
        <p id="contact">
          **Free refills of hot and iced brewed coffee and tea during same store visit. Excludes Cold Brew, Nitro Cold Brew, Iced Tea Lemonade, flavored Iced Tea and Starbucks Refreshers® base. At participating stores.
        </p>
      </section>
    </div>
  )
}
