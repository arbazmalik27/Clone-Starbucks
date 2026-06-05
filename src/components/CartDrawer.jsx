import React from 'react'

export default function CartDrawer({ open, onClose, cartItems, onRemove, onUpdateQty, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // Styling properties
  const drawerStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    maxWidth: '420px',
    height: '100%',
    backgroundColor: 'var(--white)',
    boxShadow: '-5px 0 25px rgba(0,0,0,0.15)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  }

  const backdropStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 999,
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div style={backdropStyles} onClick={onClose}></div>

      {/* Cart Slider */}
      <div style={drawerStyles}>
        {/* Header */}
        <div style={{
          padding: '20px 25px',
          borderBottom: '1px solid var(--gray-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--gray-light)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--black)' }}>
            Shopping Bag ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)})
          </h3>
          <button 
            onClick={onClose} 
            style={{ fontSize: '20px', color: 'var(--black)', padding: '5px' }}
            aria-label="Close Cart"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content list */}
        <div style={{
          flex: '1',
          overflowY: 'auto',
          padding: '20px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
              textAlign: 'center',
              color: 'var(--gray-text)'
            }}>
              <i className="fa-solid fa-bag-shopping" style={{ fontSize: '48px', marginBottom: '20px', color: 'var(--gray-border)' }}></i>
              <p style={{ fontWeight: '500', marginBottom: '10px' }}>Your shopping bag is empty</p>
              <button 
                onClick={onClose} 
                className="btn btn-secondary" 
                style={{ fontSize: '13px', padding: '8px 20px' }}
              >
                Find a drink
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.key} 
                style={{
                  display: 'flex',
                  gap: '15px',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--gray-border)',
                  animation: 'fadeInUp 0.3s ease forwards'
                }}
              >
                {/* Product Image */}
                <img 
                  src={item.image.startsWith('http') ? item.image : `/${item.image}`} 
                  alt={item.name} 
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid var(--gray-border)'
                  }}
                />

                {/* Info details */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--black)', marginBottom: '4px' }}>
                    {item.name}
                  </h4>
                  
                  {/* Customizations tags */}
                  <div style={{ fontSize: '11px', color: 'var(--gray-text)', marginBottom: '8px', lineHeight: '1.4' }}>
                    <div>Size: <strong style={{ color: '#333' }}>{item.size}</strong></div>
                    <div>Milk: <strong style={{ color: '#333' }}>{item.milk}</strong></div>
                    <div>Sweetness: <strong style={{ color: '#333' }}>{item.sweetness}</strong></div>
                  </div>

                  {/* Quantity and actions row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      border: '1px solid var(--gray-border)', 
                      borderRadius: '15px',
                      padding: '2px 8px',
                      backgroundColor: 'var(--gray-light)'
                    }}>
                      <button 
                        onClick={() => onUpdateQty(item.key, -1)} 
                        style={{ padding: '0 8px', fontWeight: 'bold', fontSize: '12px' }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '12px', padding: '0 10px', minWidth: '20px', textAlign: 'center', fontWeight: '600' }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQty(item.key, 1)} 
                        style={{ padding: '0 8px', fontWeight: 'bold', fontSize: '12px' }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: '600', fontSize: '14px', color: 'var(--green-primary)' }}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button 
                        onClick={() => onRemove(item.key)} 
                        style={{ color: '#b91c1c', fontSize: '14px', padding: '5px' }}
                        aria-label="Delete item"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout info */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '25px',
            borderTop: '1px solid var(--gray-border)',
            backgroundColor: 'var(--gray-light)',
            boxShadow: '0 -4px 15px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--gray-text)' }}>Subtotal</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--black)' }}>
                ₹{subtotal.toFixed(2)}
              </span>
            </div>

            <button 
              onClick={onCheckout}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '14px 20px', borderRadius: '25px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Checkout / Place Order
            </button>
            <p style={{ fontSize: '11px', color: 'var(--gray-text)', textAlign: 'center', marginTop: '10px' }}>
              Plus applicable taxes. Collect rewards stars at pickup.
            </p>
          </div>
        )}

      </div>
    </>
  )
}
