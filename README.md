# SHOPORA — Modern E-Commerce Platform

A premier, high-performance modern e-commerce storefront engineered with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Features

### 🛍️ Comprehensive Storefront
- **Top Announcement Bar**: Dismissible seasonal promo banner with instant currency switcher (`USD $`, `EUR €`, `GBP £`).
- **Curated Hero Section**: Atmospheric ambient lighting, editorial headline, social proof indicators, and quick action CTAs.
- **Visual Category Filter**: Dynamic category pills (`Fashion`, `Electronics`, `Watches`, `Footwear`, `Beauty`) with real-time product counts.
- **Flash Deal of the Day**: Live reactive countdown timer with instant deal claiming.
- **Advanced Product Catalog**:
  - Live search with instant query filtering.
  - Price range slider ($50 – $600+).
  - Rating filter (★ 4.5+, 4.8+).
  - Multi-criteria sorting (Featured, Biggest Discount %, Price: Low to High, Price: High to Low, Highest Rated, New Arrivals).

### 🔍 Rich Product Cards & Quick View Modal
- Dual image hover transition (swaps between angles seamlessly).
- Discount badges, "Best Seller", and "New" tags.
- Color swatch preview with active ring selection.
- Full-screen Quick View / Product Detail Modal:
  - Multi-angle high-resolution gallery with thumbnail selector.
  - Size selection chips and color swatches.
  - Quantity adjuster with low-stock warnings (`"Only 5 left in stock!"`).
  - Tabbed technical specifications, key feature highlights, and verified customer reviews.
  - "Add to Cart" and "Instant Checkout" triggers.

### 🛒 Slide-Out Shopping Cart Drawer
- Itemized overview with thumbnails, sizes, colors, and unit prices.
- Quantity steppers (`+` / `-`) and item removal with confirmation toasts.
- **Dynamic Free Shipping Progress Bar**: Live threshold calculator (Free shipping on orders over $150).
- **Promo Code Engine**:
  - `SHOPORA20`: 20% discount storewide.
  - `WELCOME10`: 10% discount for new shoppers.
  - `SAVE50`: $50 off orders exceeding $200.
- Automatic tax (8%) and shipping calculations.

### ❤️ Saved Favorites (Wishlist) Drawer
- Save any product with a single heart tap.
- Slide-over wishlist manager with "Move All to Bag" bulk action.
- Fully persisted in browser `localStorage`.

### 💳 4-Step Secure Checkout Flow
1. **Customer & Shipping Information**: Email, full name, street address, and one-click `"Auto-fill Demo Info"` button for rapid testing.
2. **Delivery Speed Options**: Standard Tracked (Free over $150), Express Air Courier, or VIP White Glove Same-Day.
3. **Interactive Payment Screen**: Live animated credit card preview with real-time cardholder name, masked card number, and expiry date. Supports PayPal and Apple Pay simulations.
4. **Order Confirmation & Itemized Receipt**: Animated success badge, generated unique order tracking ID (e.g. `SHOP-749210`), delivery estimates, and direct link to the order history dashboard.

### 📦 Order History Tracking
- Dedicated **My Orders** screen tracking past and newly placed orders.
- Item thumbnails, shipment status pills, order timestamps, and delivery address records.

---

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
SHOPORA – Modern E-commerce Platform/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Custom Tailwind theme & animations
├── postcss.config.js            # PostCSS plugins
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application container
│   ├── index.css                # Global stylesheet & Tailwind directives
│   ├── data/
│   │   └── products.js          # Product catalog & promo codes
│   ├── context/
│   │   └── ShopContext.jsx      # Central state (Cart, Wishlist, Orders, Currencies, Filters)
│   └── components/
│       ├── Navbar.jsx           # Header, search, currency, cart/wishlist counters
│       ├── Hero.jsx             # Editorial hero with highlights & trust markers
│       ├── CategoryPills.jsx    # Visual category selection pills
│       ├── FeaturedDeals.jsx    # Flash deal with live countdown clock
│       ├── ProductCard.jsx      # Interactive product card with hover previews
│       ├── ProductGrid.jsx      # Filtering controls, sorting & responsive grid
│       ├── ProductDetailModal.jsx # Full product inspection modal & specs
│       ├── CartDrawer.jsx       # Slide-out cart with shipping threshold bar
│       ├── WishlistDrawer.jsx   # Slide-out saved favorites manager
│       ├── CheckoutModal.jsx    # 4-Step checkout with interactive card preview
│       ├── OrdersView.jsx       # Order history & shipment tracking dashboard
│       ├── Newsletter.jsx       # VIP newsletter signup with promo incentive
│       ├── Footer.jsx           # Modern multi-column e-commerce footer
│       └── Toast.jsx            # Floating action notification toasts
```
