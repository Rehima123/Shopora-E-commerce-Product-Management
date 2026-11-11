import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Sparkles, Check, ArrowRight } from 'lucide-react';

export const Newsletter = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubscribed(true);
    showToast('Welcome to SHOPORA VIP! Use code SHOPORA20 for 20% off', 'success');
  };

  return (
    <section className="bg-slate-100/70 border-t border-b border-slate-200/80 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Exclusive Insider Access</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Unlock 20% Off Your First Order
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Subscribe to the SHOPORA Private Club to receive limited collection previews, private warehouse drops, and curated editorial styles directly to your inbox.
        </p>

        {isSubscribed ? (
          <div className="bg-white p-6 rounded-3xl border border-emerald-200 max-w-md mx-auto shadow-sm space-y-2 animate-fade-in">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">You are on the VIP List!</h4>
            <p className="text-xs text-slate-500">
              Your coupon code is: <strong className="text-brand-600 font-mono text-sm">SHOPORA20</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-xs sm:text-sm text-slate-900 pl-11 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none shadow-sm transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-slate-900 hover:bg-brand-600 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md transition flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-slate-400">
          Zero spam. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
};

