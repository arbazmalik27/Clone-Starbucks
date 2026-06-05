import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar({ user, onLogout, cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Change navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Custom link click handler for scroll-to sections
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navHeight = 72
          const elementPosition = element.offsetTop - navHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 150)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const navHeight = 72
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  // Hamburger active transform styles
  const getBar1Style = () => mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}
  const getBar2Style = () => mobileMenuOpen ? { opacity: 0 } : {}
  const getBar3Style = () => mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        
        {/* Brand Logo */}
        <div className="nav-brand">
          <Link to="/" className="logo">
            <i className="fa-solid fa-leaf"></i>
            GreenLeaf
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/menu" 
              className={location.pathname === '/menu' ? 'active-link' : ''}
            >
              MENU
            </Link>
          </li>
          <li>
            <Link 
              to="/drinks" 
              className={location.pathname === '/drinks' ? 'active-link' : ''}
            >
              HANDCRAFTED
            </Link>
          </li>
          <li>
            <a 
              href="#rewards" 
              onClick={(e) => { e.preventDefault(); handleNavClick('rewards') }}
            >
              REWARDS
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('about') }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Action / Auth Buttons */}
        <div className="nav-actions">
          {/* Shopping Cart Trigger */}
          <button 
            onClick={onOpenCart} 
            style={{ position: 'relative', fontSize: '18px', padding: '8px', color: 'var(--black)' }}
            aria-label="Open Cart"
          >
            <i className="fa-solid fa-bag-shopping"></i>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                backgroundColor: 'var(--green-primary)',
                color: 'white',
                fontSize: '10px',
                fontWeight: '700',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifycontent: 'center',
                alignContent: 'center',
                lineHeight: '1',
                padding: '0',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* User Sign In State */}
          {user ? (
            <div className="nav-user">
              <span className="stars-badge">
                <i className="fa-solid fa-star"></i>
                {user.stars}
              </span>
              <span style={{ display: 'inline', fontWeight: '500' }}>
                Hi, {user.firstName}
              </span>
              <button 
                onClick={onLogout}
                style={{
                  fontSize: '12px',
                  color: 'var(--gray-text)',
                  border: '1px solid var(--gray-border)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  marginLeft: '4px'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signup" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '13px' }}>
              Join now
            </Link>
          )}

          {/* Hamburger Mobile Menu Toggle */}
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar" style={getBar1Style()}></span>
            <span className="bar" style={getBar2Style()}></span>
            <span className="bar" style={getBar3Style()}></span>
          </button>
        </div>

      </div>
    </nav>
  )
}
