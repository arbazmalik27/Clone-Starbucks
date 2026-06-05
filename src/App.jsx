import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import CustomizeModal from './components/CustomizeModal.jsx'
import Home from './pages/Home.jsx'
import Drinks from './pages/Drinks.jsx'
import Menu from './pages/Menu.jsx'
import SignUp from './pages/SignUp.jsx'

export default function App() {
  // Cart State: { id, name, price, quantity, size, milk, sweetness, image, key }
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  
  // Auth State: null or { firstName, lastName, email, stars: 50 }
  const [user, setUser] = useState(null)
  
  // Modal State: null or product object to customize
  const [customizingItem, setCustomizingItem] = useState(null)

  // Load cart and user state from localStorage if exists
  useEffect(() => {
    const savedCart = localStorage.getItem('greenleaf_cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error parsing cart from storage', e)
      }
    }

    const savedUser = localStorage.getItem('greenleaf_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        console.error('Error parsing user from storage', e)
      }
    }
  }, [])

  // Save cart state
  const saveCart = (newCart) => {
    setCart(newCart)
    localStorage.setItem('greenleaf_cart', JSON.stringify(newCart))
  }

  // Handle Register/Login
  const loginUser = (userData) => {
    const completeUser = { ...userData, stars: 50 } // Give them a bonus 50 stars!
    setUser(completeUser)
    localStorage.setItem('greenleaf_user', JSON.stringify(completeUser))
  }

  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem('greenleaf_user')
  }

  // Add Item to Cart
  const handleAddToCart = (product, customizations) => {
    // Generate a unique key based on item id + customization options
    const detailsKey = `${product.id}-${customizations.size}-${customizations.milk}-${customizations.sweetness}`
    
    const existingIndex = cart.findIndex(item => item.key === detailsKey)
    let newCart = [...cart]

    if (existingIndex > -1) {
      newCart[existingIndex].quantity += customizations.quantity
    } else {
      newCart.push({
        key: detailsKey,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: customizations.quantity,
        size: customizations.size,
        milk: customizations.milk,
        sweetness: customizations.sweetness
      })
    }

    saveCart(newCart)
    setCustomizingItem(null)
    setCartOpen(true) // Open the cart drawer to show the item has been added!
  }

  // Remove Item
  const handleRemoveFromCart = (key) => {
    const newCart = cart.filter(item => item.key !== key)
    saveCart(newCart)
  }

  // Update Quantity
  const handleUpdateQuantity = (key, delta) => {
    const newCart = cart.map(item => {
      if (item.key === key) {
        const nextQty = item.quantity + delta
        return { ...item, quantity: Math.max(1, nextQty) }
      }
      return item
    }).filter(item => item.quantity > 0)
    saveCart(newCart)
  }

  // Checkout Mock
  const handleCheckout = () => {
    alert('Thank you for your order! Your GreenLeaf Coffee order is being handcrafted.')
    saveCart([])
    setCartOpen(false)
  }

  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Responsive Navbar */}
        <Navbar user={user} onLogout={logoutUser} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onOpenCart={() => setCartOpen(true)} />
        
        {/* Core Pages Content */}
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<Drinks onOrder={(item) => setCustomizingItem(item)} />} />
            <Route path="/menu" element={<Menu onOrder={(item) => setCustomizingItem(item)} />} />
            <Route path="/signup" element={<SignUp user={user} onSignUp={loginUser} />} />
          </Routes>
        </main>
        
        {/* Unified Footer */}
        <Footer />

        {/* Sliding Checkout Cart Drawer */}
        <CartDrawer 
          open={cartOpen} 
          onClose={() => setCartOpen(false)} 
          cartItems={cart} 
          onRemove={handleRemoveFromCart}
          onUpdateQty={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />

        {/* Product Customizer Modal */}
        {customizingItem && (
          <CustomizeModal 
            product={customizingItem} 
            onClose={() => setCustomizingItem(null)} 
            onConfirm={handleAddToCart}
          />
        )}
      </div>
    </Router>
  )
}
