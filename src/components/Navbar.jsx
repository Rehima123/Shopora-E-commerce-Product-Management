import React, { useState } from 'react';
import { useShop, CURRENCIES } from '../context/ShopContext';
import {
  ShoppingBag,
  Heart,
  Search,
  X,
  Menu,
  Sparkles,
  Package,
  Globe,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export const Navbar = () => {
  const {
    cartCount,
    cartSubtotal,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    searchQuery,
    setSearchQuery,
    currency,
    setCurrency,
    formatPrice,
    activeTab,
    setActiveTab,
    orders
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-900 to-slate-950 text-white text-xs font-medium py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-rose-200">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>Seasonal Promo: Use code <strong className="text-white underline font-bold tracking-wider">SHOPORA20</strong> for 20% OFF</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs">
            <span>Free Express Worldwide Shipping Over $150</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">30-Day Risk-Free Returns</span>
          </div>

          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white transition py-0.5 px-2 rounded-md hover:bg-white/10"
            >
              <Globe className="w-3 h-3 text-rose-300" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-32 bg-white text-slate-800 rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50 animate-fade-in text-xs">
                {Object.keys(CURRENCIES).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-rose-50 hover:text-brand-600 transition ${
                      currency === cur ? 'font-bold text-brand-600 bg-rose-50/50' : ''
                    }`}
                  >
                    <span>{CURRENCIES[cur].label}</span>
                    {currency === cur && <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Mobile Hamburger & Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <button
                onClick={() => {
                  setActiveTab('store');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
                  <span className="font-serif font-black text-xl italic tracking-tight">S</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                    SHOPORA<span className="w-1.5 h-1.5 rounded-full bg-brand-600 inline-block"></span>
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold -mt-1">
                    Luxury & Essentials
                  </span>
                </div>
              </button>
            </div>

            {/* Navigation Tabs (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => {
                  setActiveTab('store');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === 'store'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Storefront
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'orders'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>My Orders</span>
                {orders.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-[11px] flex items-center justify-center font-bold">
                    {orders.length}
                  </span>
                )}
              </button>
            </div>

            {/* Live Search Bar */}
            <div className="flex-1 max-w-md hidden md:block">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search over 1,000+ luxury apparel, audio, watches..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeTab !== 'store') setActiveTab('store');
                  }}
                  className="w-full bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-sm text-slate-900 pl-10 pr-9 py-2.5 rounded-full border border-transparent focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons: Wishlist & Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 text-slate-700 hover:text-brand-600 hover:bg-rose-50/70 rounded-full transition group"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-900 hover:bg-brand-600 text-white rounded-full transition-all duration-200 shadow-md hover:shadow-brand-500/25 group"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-rose-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center border-2 border-slate-900 group-hover:border-brand-600">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left border-l border-slate-700 pl-2.5">
                  <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Cart</span>
                  <span className="text-xs font-bold leading-tight text-white">{formatPrice(cartSubtotal)}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="pb-3 md:hidden">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products, brands, collections..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'store') setActiveTab('store');
                }}
                className="w-full bg-slate-100 text-sm text-slate-900 pl-10 pr-9 py-2.5 rounded-full border border-transparent focus:border-brand-500 focus:bg-white outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-slide-down">
            <button
              onClick={() => {
                setActiveTab('store');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-between ${
                activeTab === 'store' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>Explore Storefront</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => {
                setActiveTab('orders');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-between ${
                activeTab === 'orders' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>My Order History</span>
              <Package className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

