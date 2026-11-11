import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Clock, Flame, ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedDeals = () => {
  const { products, setQuickViewProduct, formatPrice } = useShop();

  // Deal of the day product
  const dealProduct = products.find((p) => p.id === 'prod-1') || products[0];

  // Countdown timer simulation (Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num) => String(num).padStart(2, '0');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative rounded-3xl bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white overflow-hidden shadow-2xl p-6 sm:p-10 border border-brand-500/20">
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-bounce" />
              <span>Limited Flash Deal</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              AeroPulse Studio Pro Wireless ANC
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Experience audiophile-grade titanium acoustics with hybrid noise cancellation. Only 14 units left at this private flash price.
            </p>

            {/* Price Tag */}
            <div className="flex items-baseline justify-center lg:justify-start gap-3">
              <span className="text-3xl sm:text-4xl font-black text-rose-400">
                {formatPrice(dealProduct.price)}
              </span>
              <span className="text-base sm:text-lg text-slate-400 line-through">
                {formatPrice(dealProduct.originalPrice)}
              </span>
              <span className="bg-rose-600 text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                SAVE 24%
              </span>
            </div>

            {/* Countdown Clocks */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Offer Expires In:</span>
              </span>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-center font-mono">
                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                  <span className="text-xl sm:text-2xl font-black text-white block">
                    {formatDigit(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-sans">Hours</span>
                </div>
                <span className="text-xl font-bold text-slate-500">:</span>
                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                  <span className="text-xl sm:text-2xl font-black text-white block">
                    {formatDigit(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-sans">Mins</span>
                </div>
                <span className="text-xl font-bold text-slate-500">:</span>
                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                  <span className="text-xl sm:text-2xl font-black text-white block">
                    {formatDigit(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-sans">Secs</span>
                </div>
              </div>
            </div>

            {/* Claim CTA */}
            <div className="pt-4">
              <button
                onClick={() => setQuickViewProduct(dealProduct)}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-950 hover:bg-rose-50 font-bold text-xs sm:text-sm rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                <span>Claim Flash Deal Now</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group cursor-pointer" onClick={() => setQuickViewProduct(dealProduct)}>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800">
                <img
                  src={dealProduct.images[0]}
                  alt={dealProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-brand-600 text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg border border-brand-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Top Pick</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
