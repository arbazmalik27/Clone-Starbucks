import React, { useState } from 'react'

export default function CustomizeModal({ product, onClose, onConfirm }) {
  const [size, setSize] = useState('Grande') // Tall, Grande, Venti
  const [milk, setMilk] = useState('Oatmilk') // Oatmilk, Almondmilk, Coconutmilk, Soymilk, Whole Milk
  const [sweetness, setSweetness] = useState('Regular Sweetness') // Regular, Extra, Less, Sugar-Free
  const [quantity, setQuantity] = useState(1)

  // Calculate adjusted price based on size
  const getSizeModifier = () => {
    if (size === 'Tall') return -30
    if (size === 'Venti') return 50
    return 0
  }

  const adjustedPrice = Math.max(100, product.price + getSizeModifier())
  const totalPrice = adjustedPrice * quantity

  // Modal styling wrapper
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }

  const modalStyle = {
    backgroundColor: 'var(--white)',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '520px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'flex',
    flexDirection: 'column'
  }

  const optionCardStyle = (isActive) => ({
    padding: '10px 16px',
    borderRadius: '20px',
    border: `2px solid ${isActive ? 'var(--green-primary)' : 'var(--gray-border)'}`,
    backgroundColor: isActive ? 'var(--cream)' : 'var(--white)',
    color: isActive ? 'var(--green-dark)' : 'var(--black)',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'var(--transition)'
  })

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          padding: '20px 25px',
          borderBottom: '1px solid var(--gray-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          backgroundColor: 'var(--white)',
          zIndex: 10
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Customize Drink</h3>
          <button onClick={onClose} style={{ fontSize: '18px', padding: '5px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '25px', flex: 1 }}>
          {/* Drink Preview */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <img 
              src={product.image.startsWith('http') ? product.image : `/${product.image}`} 
              alt={product.name} 
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid var(--gray-border)'
              }}
            />
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{product.name}</h4>
              <p style={{ fontSize: '13px', color: 'var(--gray-text)' }}>{product.description || 'Handcrafted fresh to order'}</p>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--green-primary)', marginTop: '5px' }}>
                Base Price: ₹{product.price.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Size Section */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Cup Size</h5>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Tall', 'Grande', 'Venti'].map((s) => (
                <button 
                  key={s} 
                  style={optionCardStyle(size === s)} 
                  onClick={() => setSize(s)}
                >
                  {s} {s === 'Tall' ? '(12 fl oz)' : s === 'Grande' ? '(16 fl oz)' : '(24 fl oz)'}
                </button>
              ))}
            </div>
          </div>

          {/* Milk Options */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Milk Choices</h5>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Oatmilk', 'Almondmilk', 'Coconutmilk', 'Soymilk', 'Whole Milk'].map((m) => (
                <button 
                  key={m} 
                  style={optionCardStyle(milk === m)} 
                  onClick={() => setMilk(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Sweetness Options */}
          <div style={{ marginBottom: '25px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Sweetness</h5>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Regular Sweetness', 'Extra Sweet', 'Less Sweet', 'Sugar-Free'].map((sw) => (
                <button 
                  key={sw} 
                  style={optionCardStyle(sweetness === sw)} 
                  onClick={() => setSweetness(sw)}
                >
                  {sw}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--gray-border)'
          }}>
            <span style={{ fontWeight: '600', fontSize: '14px' }}>Quantity</span>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid var(--gray-border)', 
              borderRadius: '20px',
              padding: '4px 12px',
              backgroundColor: 'var(--gray-light)'
            }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                style={{ padding: '0 10px', fontWeight: 'bold', fontSize: '16px' }}
              >
                -
              </button>
              <span style={{ fontSize: '15px', padding: '0 15px', minWidth: '30px', textAlign: 'center', fontWeight: '600' }}>
                {quantity}
              </span>
              <button 
                onClick={() => setQuantity(quantity + 1)} 
                style={{ padding: '0 10px', fontWeight: 'bold', fontSize: '16px' }}
              >
                +
              </button>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div style={{
          padding: '20px 25px',
          borderTop: '1px solid var(--gray-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--gray-light)',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--gray-text)' }}>Total Price</div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--green-primary)' }}>
              ₹{totalPrice.toFixed(2)}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={onClose} 
              style={{
                padding: '10px 20px',
                borderRadius: '20px',
                border: '1px solid var(--gray-border)',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => onConfirm(product, { size, milk, sweetness, quantity })}
              className="btn btn-primary" 
              style={{ padding: '10px 24px', fontSize: '13px', borderRadius: '20px' }}
            >
              Add to order
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
