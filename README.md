# 🛍️ SHOPORA — Modern E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1.16-F56565?style=flat-square)](https://lucide.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

An editorial, high-performance modern e-commerce storefront crafted with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Built for seamless shopping experiences across luxury fashion, audiophile gear, horology, and organic skincare.

---

## ✨ Features Overview

### 🏪 1. Modern Storefront & Discovery
- **Editorial Hero Section**: Ambient radial gradients, promotional highlights, verified customer social proof ($4.9/5$ from 12,000+ reviews), and quick collection scroll triggers.
- **Top Announcement Bar**: Dismissible notification banner highlighting seasonal promos (`SHOPORA20`) and trust guarantees.
- **Multi-Currency Engine**: Real-time conversion between **USD ($)**, **EUR (€)**, and **GBP (£)**.
- **Dark / Light Theme**: Instant theme switcher between sleek deep-slate nighttime and clean crisp daytime mode.
- **Visual Category Filter**: Categorized pills (*Fashion & Knitwear*, *Electronics & Audio*, *Luxury Watches*, *Footwear*, *Beauty & Skincare*) with dynamic item counters.
- **Live Search & Autocomplete**: Real-time search across titles, brands, and descriptions with one-tap query clearing.
- **Flash Deal of the Day**: Live reactive countdown timer ($08\text{h} : 42\text{m} : 19\text{s}$) with stock indicators.

### 🔍 2. Product Detail & Interactive Modals
- **Multi-Angle Gallery**: High-resolution photography with thumbnail selector and zoom effects.
- **Dual Hover Previews**: Secondary angle reveal on card hover.
- **Interactive Swatches**: Live color swatches with name badge and active ring styling.
- **International Size Guide Modal**: Multi-region conversion tables (US, UK, EU, CM) for tops, bottoms, and footwear.
- **Verified Customer Review Engine**:
  - Interactive 5-star rating selector.
  - Live review submission form.
  - Dynamic recalculation of product average rating and review counts.

### 🛒 3. Cart & Saved Wishlist
- **Slide-Out Cart Drawer**: Full item overview with thumbnail, selected size/color, and stepper quantity controls.
- **Free Shipping Progress Meter**: Dynamic calculation toward the $150 free express shipping threshold.
- **Promo Coupon Engine**:
  - `SHOPORA20`: 20% off storewide.
  - `WELCOME10`: 10% new customer welcome discount.
  - `SAVE50`: $50 discount on orders exceeding $200.
- **Wishlist Drawer**: One-click heart save with *"Move All to Bag"* bulk action, persisted in `localStorage`.

### 💳 4. 4-Step Secure Checkout Flow
1. **Contact & Shipping**: Form fields with a **1-Click "Auto-fill Demo Info"** button for instant testing.
2. **Delivery Speed**: Standard Tracked, Express Air Courier, or VIP White Glove Same-Day.
3. **Interactive Payment Card**: Live credit card graphic that renders cardholder name, expiry date, and masked number in real time. Also supports PayPal and Apple Pay simulations.
4. **Order Confirmation & Tracking**: Animated checkmark, auto-generated unique Order ID (e.g. `SHOP-847291`), estimated delivery date, and invoice link.

### 📄 5. Order Management & Printable Invoices
- **Customer Order History**: Dashboard tracking recent and historical orders with live status badges (*Processing*, *Shipped*, *Delivered*).
- **Printable Tax Invoices**: Official formatted tax receipt with itemized lines, discounts, taxes, and a browser-native `Print / Save as PDF` trigger.

### 👤 6. Customer Profile & VIP Rewards
- **VIP Member Tiering**: Gold Member badge with bonus rewards points tracker (1,450 points = $14.50 credit).
- **Address Book**: Manage primary residence and shipping destinations.
- **Demo Quick Login**: 1-click authentication as *Rehima Ali (VIP Member)*.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 18 | Declarative component UI & hooks |
| **Build Tooling** | Vite 5 | Sub-second HMR and optimized Rollup bundling |
| **Styling** | Tailwind CSS 3 | Utility-first responsive design & custom animations |
| **Iconography** | Lucide React | Lightweight, scalable vector icons |
| **State Management** | React Context API | Global Cart, Wishlist, Orders, User Auth, and Currency |
| **Storage & Persistence** | Browser `localStorage` | Preserves cart items, wishlist, user reviews, and placed orders |
| **Version Control** | Git & GitHub | Modular branching and structured commits |

---

## 📂 Project Directory Structure

```
SHOPORA – Modern E-commerce Platform/
├── .gitignore                   # Multi-stack ignore rules (React, Node, Mongo, Vite)
├── README.md                    # Comprehensive documentation & showcase
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme, typography & keyframes
├── vite.config.js               # Vite development & build setup
├── src/
│   ├── main.jsx                 # Application root mount
│   ├── App.jsx                  # Main view orchestration & layout
│   ├── index.css                # Global stylesheet & Tailwind directives
│   ├── data/
│   │   └── products.js          # Product catalog dataset & promo codes
│   ├── context/
│   │   └── ShopContext.jsx      # Global context (Cart, Wishlist, Auth, Orders, Currency)
│   └── components/
│       ├── Navbar.jsx           # Header, live search, currency & profile triggers
│       ├── Hero.jsx             # Luxury hero with trust highlights
│       ├── CategoryPills.jsx    # Visual category selection filters
│       ├── FeaturedDeals.jsx    # Flash deal with live countdown clock
│       ├── ProductCard.jsx      # Interactive card with dual-angle hover
│       ├── ProductGrid.jsx      # Filtering controls, sorting & responsive grid
│       ├── ProductDetailModal.jsx # Detail modal with gallery, specs & reviews
│       ├── CartDrawer.jsx       # Slide-out cart with shipping progress bar
│       ├── WishlistDrawer.jsx   # Saved favorites drawer
│       ├── CheckoutModal.jsx    # 4-Step checkout with dynamic card graphic
│       ├── OrdersView.jsx       # Order history & shipment tracking
│       ├── AuthModal.jsx        # User login, registration & VIP profile modal
│       ├── SizeGuideModal.jsx   # International sizing & fit guide
│       ├── InvoiceModal.jsx     # Printable tax invoice & PDF receipt
│       ├── RecentlyViewed.jsx   # Recently viewed products carousel
│       ├── Newsletter.jsx       # VIP newsletter subscription banner
│       ├── Footer.jsx           # Multi-column e-commerce footer
│       └── Toast.jsx            # Notification toast alerts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Rehima123/Shopora-E-commerce-Product-Management.git
cd Shopora-E-commerce-Product-Management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` folder ready for deployment on Vercel, Netlify, or GitHub Pages.

---

## 🛡️ Security & Git Hygiene Standards

- ✅ **No Secrets Committed**: `.env`, `.pem`, API keys, passwords, and private tokens are excluded via `.gitignore`.
- ✅ **No Build or Dependency Clutter**: `node_modules/` and `dist/` are strictly ignored.
- ✅ **Semantic Commits**: Adheres to Conventional Commits standards (`feat:`, `chore:`, `docs:`, `fix:`).

---

## 👩‍💻 Author & Acknowledgements

- **Lead Developer**: Rehima Ali ([@Rehima123](https://github.com/Rehima123))
- **Repository**: [Shopora-E-commerce-Product-Management](https://github.com/Rehima123/Shopora-E-commerce-Product-Management.git)
