import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  const { setSelectedCategory, setActiveTab } = useShop();

  const handleCategoryClick = (catId) => {
    setActiveTab('store');
    setSelectedCategory(catId);
    const el = document.getElementById('product-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-rose-400 flex items-center justify-center text-white font-serif font-black text-lg">
                S
              </div>
              <span className="font-serif text-2xl font-black tracking-tight text-white">
                SHOPORA<span className="text-brand-500">.</span>
              </span>
            </div>
            
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Crafting a refined standard for modern living. Curating the highest echelon of apparel, horology, acoustic engineering, and botanical self-care with verified authenticity.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-white transition" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-white transition" aria-label="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-white transition" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-white transition" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Collections</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleCategoryClick('fashion')} className="hover:text-white transition">
                  Fashion & Knitwear
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('electronics')} className="hover:text-white transition">
                  Acoustic Audio & Tech
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('watches')} className="hover:text-white transition">
                  Luxury Chronographs
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('footwear')} className="hover:text-white transition">
                  Performance Footwear
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('beauty')} className="hover:text-white transition">
                  Botanical Skincare
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveTab('orders')} className="hover:text-white transition">
                  Track My Shipment
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">Worldwide Shipping & Taxes</a></li>
              <li><a href="#" className="hover:text-white transition">30-Day Easy Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Authenticity Guarantee</a></li>
              <li><a href="#" className="hover:text-white transition">VIP Concierge Support</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">The SHOPORA Atelier</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainable Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition">Global Showrooms</a></li>
              <li><a href="#" className="hover:text-white transition">Press & Editorial</a></li>
              <li><a href="#" className="hover:text-white transition">Careers (Hiring!)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 SHOPORA Inc. Designed & Engineered with precision. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-500">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Security Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
