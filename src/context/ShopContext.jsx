import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS as INITIAL_PRODUCTS, PROMO_CODES } from '../data/products';

const ShopContext = createContext();

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

export const ShopProvider = ({ children }) => {
  // Products (with dynamic review & stock updates persisted in localStorage)
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_custom_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [sortBy, setSortBy] = useState('featured');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Currency
  const [currency, setCurrency] = useState('USD');

  // Dark / Light Theme
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('shopora_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('shopora_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState(null);
  const [activeTab, setActiveTab] = useState('store'); // 'store' | 'orders' | 'profile'

  // User Authentication State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_user');
      return saved
        ? JSON.parse(saved)
        : {
            isLoggedIn: true,
            name: 'Rehima Ali',
            email: 'rehima.shopper@example.com',
            tier: 'VIP Gold Member',
            points: 1450,
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
            addresses: [
              {
                id: 'addr-1',
                title: 'Primary Residence',
                address: '742 Evergreen Luxury Terrace, Suite 400',
                city: 'San Francisco',
                state: 'CA',
                zip: '94107',
                country: 'United States',
                isDefault: true
              }
            ]
          };
    } catch {
      return null;
    }
  });

  const loginUser = (userData) => {
    const newUser = {
      isLoggedIn: true,
      name: userData.name || 'Rehima Ali',
      email: userData.email || 'customer@example.com',
      tier: 'VIP Gold Member',
      points: 1500,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      addresses: [
        {
          id: 'addr-1',
          title: 'Primary Residence',
          address: '742 Evergreen Luxury Terrace, Suite 400',
          city: 'San Francisco',
          state: 'CA',
          zip: '94107',
          country: 'United States',
          isDefault: true
        }
      ]
    };
    setUser(newUser);
    showToast(`Welcome back, ${newUser.name}!`, 'success');
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Signed out of SHOPORA', 'info');
  };

  // Recently Viewed Products
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_recently_viewed');
      return saved ? JSON.parse(saved) : ['prod-1', 'prod-2', 'prod-3'];
    } catch {
      return [];
    }
  });

  const addRecentlyViewed = (productId) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, 6);
      try {
        localStorage.setItem('shopora_recently_viewed', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Placed Orders (Persisted in localStorage)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('shopora_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Promo Code
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Toast System
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('shopora_custom_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('shopora_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('shopora_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('shopora_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('shopora_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('shopora_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  // Currency formatter
  const formatPrice = (amount) => {
    const cur = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = amount * cur.rate;
    return `${cur.symbol}${converted.toFixed(2)}`;
  };

  // Cart operations
  const addToCart = (product, size = null, color = null, quantity = 1) => {
    const chosenSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Default';
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            size: chosenSize,
            color: chosenColor,
            quantity
          }
        ];
      }
    });

    addRecentlyViewed(product.id);
    showToast(`Added "${product.name.slice(0, 24)}..." to cart`, 'success');
  };

  const updateCartQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  // Wishlist operations
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to wishlist!', 'success');
        addRecentlyViewed(productId);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const moveAllWishlistToCart = () => {
    const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));
    wishlistedProducts.forEach((prod) => {
      addToCart(prod, null, null, 1);
    });
    setWishlist([]);
    showToast('All wishlisted items moved to cart!', 'success');
  };

  // Promo code operations
  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    setPromoError('');
    if (!clean) return;

    if (PROMO_CODES[clean]) {
      const promo = PROMO_CODES[clean];
      if (promo.minTotal && cartSubtotal < promo.minTotal) {
        setPromoError(`Requires minimum order of $${promo.minTotal}`);
        return;
      }
      setAppliedPromo({ code: clean, ...promo });
      showToast(`Promo "${clean}" applied successfully!`, 'success');
    } else {
      setPromoError('Invalid coupon code. Try "SHOPORA20" or "WELCOME10"');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoError('');
    showToast('Promo code removed', 'info');
  };

  // Cart Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percent') {
      discountAmount = (cartSubtotal * appliedPromo.discount) / 100;
    } else if (appliedPromo.type === 'fixed') {
      discountAmount = Math.min(cartSubtotal, appliedPromo.discount);
    }
  }

  // Free shipping threshold ($150)
  const FREE_SHIPPING_THRESHOLD = 150;
  const isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingAmount = cartSubtotal > 0 && !isFreeShipping ? 15.0 : 0;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  // Estimated Tax (8%)
  const taxAmount = (cartSubtotal - discountAmount) * 0.08;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingAmount + taxAmount);

  // Submit Product Review
  const submitProductReview = (productId, reviewData) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newReview = {
            id: `rev-${Date.now()}`,
            user: reviewData.user || (user ? user.name : 'Verified Customer'),
            rating: Number(reviewData.rating) || 5,
            date: 'Just now',
            verified: true,
            title: reviewData.title || 'Exceptional Quality',
            comment: reviewData.comment
          };
          const updatedReviews = [newReview, ...(p.reviews || [])];
          const newAvgRating = (
            updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length
          ).toFixed(2);

          return {
            ...p,
            reviews: updatedReviews,
            rating: parseFloat(newAvgRating),
            reviewCount: (p.reviewCount || 0) + 1
          };
        }
        return p;
      })
    );

    // If currently viewing in modal, update that as well
    if (quickViewProduct && quickViewProduct.id === productId) {
      setQuickViewProduct((prev) => {
        const newReview = {
          id: `rev-${Date.now()}`,
          user: reviewData.user || (user ? user.name : 'Verified Customer'),
          rating: Number(reviewData.rating) || 5,
          date: 'Just now',
          verified: true,
          title: reviewData.title || 'Exceptional Quality',
          comment: reviewData.comment
        };
        const updatedReviews = [newReview, ...(prev.reviews || [])];
        const newAvg = (
          updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length
        ).toFixed(2);
        return {
          ...prev,
          reviews: updatedReviews,
          rating: parseFloat(newAvg),
          reviewCount: (prev.reviewCount || 0) + 1
        };
      });
    }

    showToast('Your verified review has been published!', 'success');
  };

  // Order Placement
  const placeOrder = (orderData) => {
    const newOrder = {
      id: `SHOP-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toISOString(),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingAmount,
      tax: taxAmount,
      total: cartTotal,
      currency,
      customer: orderData.customer,
      shippingAddress: orderData.shippingAddress,
      shippingMethod: orderData.shippingMethod,
      paymentMethod: orderData.paymentMethod,
      status: 'Processing',
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setOrders((prev) => [newOrder, ...prev]);

    // Award loyalty points to user
    if (user) {
      const earnedPoints = Math.round(cartTotal * 2);
      setUser((prev) => ({
        ...prev,
        points: (prev.points || 0) + earnedPoints
      }));
      showToast(`Order placed! You earned ${earnedPoints} VIP Reward Points!`, 'success');
    }

    clearCart();
    return newOrder;
  };

  // Filtered and Sorted Products
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesRating = ratingFilter === 0 || p.rating >= ratingFilter;

    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return (b.discountPercentage || 0) - (a.discountPercentage || 0);
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <ShopContext.Provider
      value={{
        products,
        filteredProducts: sortedProducts,
        totalProductsCount: products.length,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
        ratingFilter,
        setRatingFilter,
        currency,
        setCurrency,
        formatPrice,
        theme,
        toggleTheme,
        user,
        loginUser,
        logoutUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        selectedInvoiceOrder,
        setSelectedInvoiceOrder,
        recentlyViewed,
        addRecentlyViewed,
        cart,
        cartCount,
        cartSubtotal,
        cartTotal,
        discountAmount,
        shippingAmount,
        taxAmount,
        isFreeShipping,
        amountToFreeShipping,
        FREE_SHIPPING_THRESHOLD,
        appliedPromo,
        promoError,
        applyPromoCode,
        removePromoCode,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        isWishlisted,
        moveAllWishlistToCart,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        toast,
        showToast,
        orders,
        placeOrder,
        submitProductReview,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
