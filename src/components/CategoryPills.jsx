import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import {
  Sparkles,
  Shirt,
  Headphones,
  Watch,
  Footprints,
  HeartHandshake
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Shirt: Shirt,
  Headphones: Headphones,
  Watch: Watch,
  Footprints: Footprints,
  HeartHandshake: HeartHandshake,
};

export const CategoryPills = () => {
  const { selectedCategory, setSelectedCategory, totalProductsCount, products } = useShop();

  const getCategoryCount = (catId) => {
    if (catId === 'all') return totalProductsCount;
    return products.filter((p) => p.category === catId).length;
  };

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Browse Collections</h2>
            <p className="text-xs text-slate-500">Select a category to filter hand-picked essentials</p>
          </div>
        </div>

        {/* Scrollable Horizontal Pill Row */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-1">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-rose-400' : 'text-slate-500'}`} />
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

