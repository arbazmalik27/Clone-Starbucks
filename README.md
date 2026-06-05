# GreenLeaf Coffee - React.js Conversion

This project has been converted from a plain HTML/CSS/JavaScript website into a modern, responsive **React.js single-page application (SPA)** powered by **Vite**.

## ✨ Key Features Added
1. **Client-Side Routing**: Implemented dynamic routing using `HashRouter` (stabilizes routing when opening files directly via the local `file://` protocol or when hosted on static services).
2. **Interactive Mock Purchase System**: 
   - Users can select items from the **Handcrafted Drinks** page or the **All Menu** page.
   - Clicking "Order now" displays a **Customize Modal** to choose cup sizes (Tall/Grande/Venti with price modifiers), milk types, sweetener levels, and quantity.
   - Adds customized beverages to a slide-out **Shopping Cart Drawer**, where quantities can be changed, items removed, and total prices checked out with a mock notification.
3. **Rewards & Auth State**: 
   - A fully validated registration form on the **Join now / SignUp** page.
   - Completing the registration logs the user in and awards them **50 bonus stars**, displaying a greeting and star badge in the header.
4. **Unified Styling & Micro-Animations**:
   - Organized stylesheets page-by-page.
   - Micro-interactions (card elevations, button scaling, scroll-shadow transitions, and sliding cart animations) are built using CSS transitions and state mappings.

---

## 📁 Scalable Folder Structure
The conversion uses a clean, industry-standard directory mapping:
```
coffee/
├── archive_original/       # Backup of the original HTML, CSS, and JS
├── public/                 # Asset PNGs (a1-a6.png, b.png, b1-b10.png)
├── src/
│   ├── components/         # Reusable UI Components
│   │   ├── Navbar.jsx      # Header, mobile Hamburger, and Cart icon
│   │   ├── Footer.jsx      # Detailed footer columns & social links
│   │   ├── CartDrawer.jsx  # Side sliding shopping cart list & quantity selectors
│   │   └── CustomizeModal.jsx # Drink customization overlays (sizes, milks, sweeteners)
│   ├── pages/              # Primary route views
│   │   ├── Home.jsx        # Landing page with hero & promo grid
│   │   ├── Drinks.jsx      # Handcrafted drinks selection
│   │   ├── Menu.jsx        # Dynamic double-column menu with category sidebar filters
│   │   └── SignUp.jsx      # Join now form with validation & auth states
│   ├── styles/             # Modular CSS stylesheets
│   │   ├── global.css      # Shared base reset, typography, & global colors
│   │   ├── Home.css
│   │   ├── Drinks.css
│   │   ├── Menu.css
│   │   └── SignUp.css
│   ├── main.jsx            # React root mount script
│   └── App.jsx             # State Provider & routing registry
├── package.json            # Scripts and dependency registry
└── vite.config.js          # Vite config for React plugins
```

---

## 🚀 Getting Started

To run the application locally on your system, follow these simple steps:

### 1. Install Node.js Dependencies
Open your command terminal in the project directory (`c:\Users\hp\OneDrive\Desktop\coffee`) and install the packages listed in `package.json`:
```bash
npm install
```

### 2. Start the Development Server
Run Vite's local dev server:
```bash
npm run dev
```
Vite will automatically open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
To compile and bundle the React project into highly optimized static files (inside the `dist/` directory):
```bash
npm run build
```

---

## 🎨 Design Colors Cohesion
The project unifies colors using custom properties declared in `src/styles/global.css`:
- `--green-primary`: `#00704A` (Starbucks green)
- `--green-dark`: `#1E3932`
- `--cream`: `#F2F0EB`
- `--primary-brown`: `#4A2C1D`
- `--secondary-brown`: `#8B5A3C`
- `--light-brown`: `#D4A574`
