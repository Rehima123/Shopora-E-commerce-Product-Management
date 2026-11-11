import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isFavorite = isWishlisted(product.id);

  // Main and secondary images
  const mainImage = product.images[0];
  const secondaryImage = product.images[1] || mainImage;
  const currentImage = isHovered ? secondaryImage : mainImage;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    const chosenColor = product.colors?.[selectedColorIndex]?.name;
    const chosenSize = product.sizes?.[0];
    addToCart(product, chosenSize, chosenColor, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="group bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer relative"
    >
      {/* Top Image Container */}
      <div
        className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges: Best Seller, New, Discount */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.discountPercentage && (
            <span className="bg-rose-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md tracking-wider">
              -{product.discountPercentage}%
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3.5 right-3.5 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500 shadow-sm'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex-1 py-2.5 px-3 bg-white/95 hover:bg-white text-slate-900 text-xs font-bold rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center gap-1.5 transition transform active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-slate-600 font-medium">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((col, idx) => (
                <button
                  key={col.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  title={col.name}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColorIndex === idx ? 'ring-2 ring-slate-900 ring-offset-1 scale-110' : 'border-slate-300'
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              ))}
              <span className="text-[10px] text-slate-400 ml-1">
                {product.colors[selectedColorIndex]?.name}
              </span>
            </div>
          )}
        </div>

        {/* Price & Quick Add Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.stock <= 8 && (
              <span className="text-[10px] font-semibold text-rose-600 block">
                Only {product.stock} left in stock!
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            disabled={addedAnimation}
            className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 hover:bg-brand-600 text-white'
            }`}
            title="Add to Cart"
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

