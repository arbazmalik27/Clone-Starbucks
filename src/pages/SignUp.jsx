import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/SignUp.css'

export default function SignUp({ user, onSignUp }) {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    emailOptIn: false,
    terms: false
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFields(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field if user starts editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const tempErrors = {}
    
    if (!fields.firstName.trim()) {
      tempErrors.firstName = 'Enter your first name'
    }

    if (!fields.lastName.trim()) {
      tempErrors.lastName = 'Enter your last name'
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!fields.email.trim()) {
      tempErrors.email = 'Please enter your email address'
    } else if (!emailPattern.test(fields.email)) {
      tempErrors.email = 'Enter a valid email address'
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,25}$/;
    if (!fields.password) {
      tempErrors.password = 'Password is required'
    } else if (!passwordPattern.test(fields.password)) {
      tempErrors.password = 'Password must meet all requirements'
    }

    if (!fields.terms) {
      tempErrors.terms = 'Please agree to the Terms of Use'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSignUp({
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email
      })
      setSubmitted(true)
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        
        {submitted ? (
          <div className="signup-success-card">
            <i className="fa-solid fa-circle-check animate-fade-in-up"></i>
            <h3>Account Created!</h3>
            <p>
              Welcome to GreenLeaf® Rewards, <strong>{fields.firstName}</strong>. You have received <strong>50 bonus stars</strong>!
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <Link to="/menu" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '13px' }}>
                Order Coffee
              </Link>
              <Link to="/" className="btn btn-secondary" style={{ padding: '10px 24px', fontSize: '13px' }}>
                Go Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h2 className="signup-title">Create an account</h2>
            <div className="signup-rewards-label">GREENLEAF® REWARDS</div>
            <p className="signup-description">
              Join GreenLeaf Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <a href="#" className="signup-link">more</a>.
            </p>
            <div className="signup-required-note">* indicates required field</div>

            <form onSubmit={handleSubmit} noValidate>
              
              {/* Personal Information */}
              <div className="signup-section-title">Personal Information</div>
              
              <div className="signup-form-group">
                <label htmlFor="firstName">* First name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  placeholder="First name"
                  value={fields.firstName}
                  onChange={handleInputChange}
                  className={`signup-input ${errors.firstName ? 'input-error' : ''}`}
                />
                {errors.firstName && (
                  <div className="signup-error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div className="signup-form-group">
                <label htmlFor="lastName">* Last name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Last name"
                  value={fields.lastName}
                  onChange={handleInputChange}
                  className={`signup-input ${errors.lastName ? 'input-error' : ''}`}
                />
                {errors.lastName && (
                  <div className="signup-error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.lastName}
                  </div>
                )}
              </div>

              {/* Account Security */}
              <div className="signup-section-title">Account Security</div>

              <div className="signup-form-group">
                <label htmlFor="email">* Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email address"
                  value={fields.email}
                  onChange={handleInputChange}
                  className={`signup-input ${errors.email ? 'input-error' : ''}`}
                />
                <div style={{ fontSize: '11px', color: 'var(--gray-text)', marginTop: '4px' }}>
                  This will be your username
                </div>
                {errors.email && (
                  <div className="signup-error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">* Password</label>
                <div className="password-input-wrapper">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    value={fields.password}
                    onChange={handleInputChange}
                    className={`signup-input ${errors.password ? 'input-error' : ''}`}
                  />
                  <button 
                    type="button" 
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa-regular fa-eye"></i>
                    )}
                  </button>
                </div>
                <div className="password-requirements">
                  Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.
                </div>
                {errors.password && (
                  <div className="signup-error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.password}
                  </div>
                )}
              </div>

              <div style={{ fontSize: '12px', marginTop: '10px' }}>
                <a href="#" className="signup-link">Already have a GreenLeaf gift card?</a>
              </div>

              {/* Checkboxes */}
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="emailOptIn" 
                  name="emailOptIn"
                  checked={fields.emailOptIn}
                  onChange={handleInputChange}
                />
                <label htmlFor="emailOptIn">
                  Yes, I'd like email from GreenLeaf<br />
                  <span style={{ fontSize: '11px', color: 'var(--gray-text)' }}>
                    Know about initiatives, announcements and product offers.
                  </span>
                </label>
              </div>

              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms"
                  checked={fields.terms}
                  onChange={handleInputChange}
                />
                <label htmlFor="terms">
                  * I agree to the <a href="#" className="signup-link">GreenLeaf Rewards Terms</a> and the <a href="#" className="signup-link">GreenLeaf Card Terms</a> and have read the <a href="#" className="signup-link">GreenLeaf Privacy Statement</a>.
                </label>
              </div>
              {errors.terms && (
                <div className="signup-error-text" style={{ marginTop: '-15px', marginBottom: '15px' }}>
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {errors.terms}
                </div>
              )}

              <button type="submit" className="signup-submit-btn">
                Create account
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  )
}
