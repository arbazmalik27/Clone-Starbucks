import React, { useState } from 'react'
import '../styles/Menu.css'

const MENU_CATEGORIES = {
  Drinks: ['All Drinks', 'Hot Coffee', 'Cold Coffee', 'Hot Tea', 'Cold Tea'],
  Food: ['All Food', 'Breakfast', 'Bakery', 'Lunch'],
  'At Home Coffee': ['All At Home', 'Whole Bean', 'Instant']
}

const MENU_ITEMS = [
  // Drinks -> Hot Coffee
  {
    id: 'menu-hot-coffee',
    category: 'Hot Coffee',
    superCategory: 'Drinks',
    name: 'Featured Hot Coffee',
    price: 220.00,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Freshly brewed GreenLeaf house blend. Smooth and rich with chocolate notes.'
  },
  {
    id: 'menu-caffe-latte',
    category: 'Hot Coffee',
    superCategory: 'Drinks',
    name: 'Caffe Latte',
    price: 280.00,
    image: 'https://images.unsplash.com/photo-1689697971955-9368177cd795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Our signature espresso with steamed milk and a thin layer of foam.'
  },
  // Drinks -> Cold Coffee
  {
    id: 'menu-cold-brew',
    category: 'Cold Coffee',
    superCategory: 'Drinks',
    name: 'Signature Cold Brew',
    price: 270.00,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Slow-steeped custom blend cold brew served over ice.'
  },
  {
    id: 'menu-iced-coffee',
    category: 'Cold Coffee',
    superCategory: 'Drinks',
    name: 'Iced Coffee',
    price: 250.00,
    image: 'https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Freshly brewed iced coffee blend sweetened with liquid cane sugar.'
  },
  // Drinks -> Hot Tea
  {
    id: 'menu-chai-latte',
    category: 'Hot Tea',
    superCategory: 'Drinks',
    name: 'Chai Tea Latte',
    price: 300.00,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Black tea infused with cardamom, cinnamon, black pepper, and star anise.'
  },
  // Drinks -> Cold Tea
  {
    id: 'menu-iced-green-tea',
    category: 'Cold Tea',
    superCategory: 'Drinks',
    name: 'Iced Green Tea',
    price: 210.00,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Green tea blended with mint, lemongrass, and lemon verbena, shaken with ice.'
  },

  // Food -> Breakfast
  {
    id: 'menu-breakfast-sandwich',
    category: 'Breakfast',
    superCategory: 'Food',
    name: 'Bacon & Gouda Sandwich',
    price: 340.00,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Sizzling applewood-smoked bacon, parmesan frittata, and Gouda on an artisanal roll.'
  },
  // Food -> Bakery
  {
    id: 'menu-butter-croissant',
    category: 'Bakery',
    superCategory: 'Food',
    name: 'Butter Croissant',
    price: 220.00,
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Classic butter croissant with a golden, flaky, laminated crust.'
  },
  // Food -> Lunch
  {
    id: 'menu-panini',
    category: 'Lunch',
    superCategory: 'Food',
    name: 'Tomato & Mozzarella Panini',
    price: 420.00,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Roasted tomatoes, mozzarella, spinach, and basil pesto on toasted focaccia.'
  },

  // At Home Coffee -> Whole Bean
  {
    id: 'menu-whole-bean',
    category: 'Whole Bean',
    superCategory: 'At Home Coffee',
    name: 'Veranda Blend Whole Bean',
    price: 850.00,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: '1 lb bag. Mellow and soft blonde roast with notes of toasted malt and baking chocolate.'
  },
  // At Home Coffee -> Instant
  {
    id: 'menu-instant-via',
    category: 'Instant',
    superCategory: 'At Home Coffee',
    name: 'Via Instant Italian Roast',
    price: 650.00,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: '12-pack instant packets. Deep, dark roast with sweet cocoa undertones.'
  }
]

export default function Menu({ onOrder }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'All Drinks') return item.superCategory === 'Drinks'
    if (selectedCategory === 'All Food') return item.superCategory === 'Food'
    if (selectedCategory === 'All At Home') return item.superCategory === 'At Home Coffee'
    
    return item.category === selectedCategory || item.superCategory === selectedCategory
  })

  // Group filtered items by their sub-category to show section headings nicely
  const categoriesPresent = [...new Set(filteredItems.map(item => item.category))]

  return (
    <div className="menu-page">
      {/* Sub Header */}
      <div className="menu-page-header">
        <div className="container">
          <span className="menu-page-title">GREENLEAF MENU</span>
          <div className="menu-page-sublinks">
            <span style={{ fontWeight: '600', color: 'var(--green-primary)' }}>All Menu</span>
            <a href="#rewards">Featured</a>
            <a href="#about">Previous Orders</a>
          </div>
        </div>
      </div>

      {/* Main Grid Wrapper */}
      <div className="container">
        <div className="menu-grid-layout">
          
          {/* Sidebar */}
          <aside className="menu-sidebar">
            <h6 
              onClick={() => setSelectedCategory('All')} 
              style={{ cursor: 'pointer', color: selectedCategory === 'All' ? 'var(--green-primary)' : 'var(--black)' }}
            >
              All Categories
            </h6>

            {Object.keys(MENU_CATEGORIES).map((superCat) => (
              <div key={superCat}>
                <h6 
                  onClick={() => setSelectedCategory(superCat)} 
                  style={{ cursor: 'pointer', color: selectedCategory === superCat ? 'var(--green-primary)' : 'var(--black)' }}
                >
                  {superCat}
                </h6>
                <ul>
                  {MENU_CATEGORIES[superCat].map((subCat) => (
                    <li 
                      key={subCat}
                      className={selectedCategory === subCat ? 'active-cat' : ''}
                      onClick={() => setSelectedCategory(subCat)}
                    >
                      {subCat.replace('All ', '')}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main List */}
          <main className="menu-main-content">
            {categoriesPresent.map((category) => {
              const categoryItems = filteredItems.filter(item => item.category === category)
              return (
                <div key={category} style={{ marginBottom: '40px' }}>
                  <h3 className="menu-section-heading">{category}</h3>
                  <div className="menu-items-grid">
                    {categoryItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="menu-item-card"
                        onClick={() => onOrder(item)}
                      >
                        <div className="menu-item-card-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-item-card-info">
                          <h4 className="menu-item-card-name">{item.name}</h4>
                          <span className="menu-item-card-price">${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {filteredItems.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-text)' }}>
                <i className="fa-regular fa-face-frown" style={{ fontSize: '36px', marginBottom: '15px' }}></i>
                <p>No products found matching your selection.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  )
}
