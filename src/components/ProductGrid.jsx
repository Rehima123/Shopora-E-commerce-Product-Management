import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import {
  SlidersHorizontal,
  ArrowUpDown,
  Filter,
  X,
  Search,
  Sparkles,
  RotateCcw
} from 'lucide-react';

export const ProductGrid = () => {
  const {
    filteredProducts,
    totalProductsCount,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    ratingFilter,
    setRatingFilter,
    formatPrice
  } = useShop();

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 600]);
    setRatingFilter(0);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 600 || ratingFilter > 0;

  return (
    <section id="product-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        
        {/* Left: Heading & Count */}
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Curated Catalog</h2>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full border border-slate-200">
              {filteredProducts.length} items
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Handcrafted luxury essentials with verified customer ratings
          </p>
        </div>

        {/* Right: Filter Toggle & Sort Dropdown */}
        <div className="flex items-center gap-3 flex-wrap">
          
          {/* Toggle Filter Panel */}
          <button
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition ${
              isFilterPanelOpen || hasActiveFilters
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold pl-8 pr-8 py-2.5 rounded-2xl outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 cursor-pointer appearance-none shadow-sm hover:border-slate-300"
            >
              <option value="featured">Featured Picks</option>
              <option value="discount">Biggest Discount (%)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated (★ 4.8+)</option>
              <option value="newest">New Arrivals First</option>
            </select>
          </div>

          {/* Reset Filters Quick Button */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="p-2.5 text-slate-500 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition"
              title="Reset all filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Expandable Filter Drawer Panel */}
      {isFilterPanelOpen && (
        <div className="my-6 p-6 bg-slate-50 rounded-3xl border border-slate-200 animate-slide-down">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-600" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Refine Selection</h3>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-brand-600 hover:text-brand-800 font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Price Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Max Price
                </label>
                <span className="text-xs font-black text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {formatPrice(priceRange[1])}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="25"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-brand-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                <span>$50</span>
                <span>$300</span>
                <span>$600+</span>
              </div>
            </div>

            {/* Minimum Rating */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-2">
                Customer Rating
              </label>
              <div className="flex gap-2">
                {[0, 4.5, 4.8].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setRatingFilter(rating)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition border ${
                      ratingFilter === rating
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {rating === 0 ? 'All Ratings' : `${rating}+ ★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Search / Quick Tags */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-2">
                Active Keywords
              </label>
              {searchQuery ? (
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs">
                  <span className="text-slate-500">Search:</span>
                  <strong className="text-slate-900">"{searchQuery}"</strong>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-auto text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">No search keyword entered</p>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 bg-white rounded-3xl border border-dashed border-slate-300 mt-6 max-w-xl mx-auto">
          <div className="w-16 h-16 bg-rose-50 text-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No matching items found</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
            We couldn't find any products matching your current filters or search terms. Try clearing some criteria.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-2xl transition shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};

