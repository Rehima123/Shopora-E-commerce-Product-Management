import React from 'react';
import { useShop } from '../context/ShopContext';
import { Eye, Star, Clock } from 'lucide-react';

export const RecentlyViewed = () => {
  const { recentlyViewed, products, setQuickViewProduct, formatPrice } = useShop();

  const viewedProducts = recentlyViewed
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  if (viewedProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-200">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-4 h-4 text-brand-600" />
        <h3 className="text-base font-bold text-slate-900 tracking-tight">
          Recently Viewed Pieces
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {viewedProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => setQuickViewProduct(p)}
            className="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 p-2.5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-2.5 relative">
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="p-1.5 bg-white/90 text-slate-800 rounded-full shadow">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block truncate">
                {p.brand}
              </span>
              <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-brand-600 transition">
                {p.name}
              </h4>
              <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-100">
                <span className="text-xs font-black text-slate-900">
                  {formatPrice(p.price)}
                </span>
                <div className="flex items-center text-[10px] text-amber-500 font-bold">
                  <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                  <span>{p.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

