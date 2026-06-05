import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Footer Links Matrix */}
        <div className="footer-container">
          <div className="footer-column">
            <h4>About Us</h4>
            <a href="#about">Our Company</a>
            <a href="#about">Our Coffee</a>
            <a href="#about">About GreenLeaf</a>
            <a href="#about">Archives</a>
            <a href="#about">Investor Relations</a>
            <a href="#about">Customer Service</a>
            <a href="#about">Contact Us</a>
          </div>

          <div className="footer-column">
            <h4>Careers</h4>
            <a href="#careers">Culture and Values</a>
            <a href="#careers">Belonging at GreenLeaf</a>
            <a href="#careers">College Achievement Plan</a>
            <a href="#careers">Alumni Community</a>
            <a href="#careers">U.S. Careers</a>
            <a href="#careers">International Careers</a>
          </div>

          <div className="footer-column">
            <h4>Social Impact</h4>
            <a href="#impact">Communities</a>
            <a href="#impact">GreenLeaf Foundation</a>
            <a href="#impact">Sustainability</a>
            <a href="#impact">Environmental & Social Impact Reporting</a>
          </div>

          <div className="footer-column">
            <h4>For Business</h4>
            <a href="#business">Landlord Support Center</a>
            <a href="#business">Suppliers</a>
            <a href="#business">Corporate Gift Card Sales</a>
            <a href="#business">Office and Foodservice Coffee</a>
          </div>

          <div className="footer-column">
            <h4>Order and Pick Up</h4>
            <a href="#order">Order on the App</a>
            <a href="#order">Order on the Web</a>
            <a href="#order">Delivery</a>
            <a href="#order">Order and Pick Up Options</a>
            <a href="#order">Explore and Find Coffee for Home</a>
          </div>
        </div>

        {/* Sub-footer Area */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <div className="footer-links">
            <a href="#privacy">Privacy Notice</a>
            <a href="#privacy">Consumer Health Privacy Notice</a>
            <a href="#terms">Terms of Use</a>
            <a href="#do-not-sell">Do Not Sell or Share My Personal Information</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#cookies">Cookie Preferences</a>
          </div>

          <p className="footer-copyright">
            &copy; 2026 GreenLeaf Coffee Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
