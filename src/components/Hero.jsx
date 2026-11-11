import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Award, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { setSelectedCategory, setSortBy } = useShop();

  const scrollToProducts = () => {
    const el = document.getElementById('product-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-500 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-rose-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Autumn / Winter Luxury Collection 2026</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Elevate your life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-brand-300 to-amber-200 italic font-medium">timeless craft</span> & modern design.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Discover masterfully engineered headphones, pure cashmere silhouettes, Swiss-precision chronographs, and organic skincare formulated for modern tastemakers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSortBy('featured');
                  scrollToProducts();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setSortBy('discount');
                  scrollToProducts();
                }}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl transition hover:border-white/40 flex items-center justify-center gap-2"
              >
                <span>View Limited Deals (-25%)</span>
              </button>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-slate-300 text-xs">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Customer" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Customer" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" alt="Customer" />
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-brand-700 text-white font-bold text-[10px] flex items-center justify-center">
                  +45k
                </div>
              </div>
              <div className="text-left">
                <div className="flex text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <span className="font-medium text-slate-300">4.9/5 from over 12,000+ verified buyers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Banner Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&q=85"
                  alt="AeroPulse Wireless Studio Headphones"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Card overlay info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Editor's Choice
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-amber-300 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                      ★ 4.9 Rating
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">AeroPulse Studio Pro</h3>
                  <p className="text-xs text-slate-300 mb-3">Hybrid ANC • 45-Hour Battery • Titanium Drivers</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-white">$249.99</span>
                      <span className="text-xs text-slate-400 line-through ml-2">$329.99</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCategory('electronics');
                        scrollToProducts();
                      }}
                      className="px-4 py-2 bg-white text-slate-900 hover:bg-rose-50 text-xs font-bold rounded-xl transition shadow"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Decorative) */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-xs px-4 py-2 rounded-2xl shadow-xl flex items-center gap-1.5 animate-bounce">
                <span>🔥 SAVE 25%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Markers Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-300 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free Global Shipping</h4>
              <p className="text-xs text-slate-400">On all orders over $150</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">2-Year Full Warranty</h4>
              <p className="text-xs text-slate-400">100% genuine guarantees</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-300 flex-shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30-Day Easy Returns</h4>
              <p className="text-xs text-slate-400">Hassle-free prepaid labels</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-300 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">VIP Concierge Care</h4>
              <p className="text-xs text-slate-400">24/7 dedicated support</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

