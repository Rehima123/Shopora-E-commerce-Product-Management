import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react';

export const ProductDetailModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    formatPrice,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setIsCheckoutOpen,
    setIsCartOpen
  } = useShop();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorite = isWishlisted(product.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'specs' | 'reviews'
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-slide-up my-auto max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-800 bg-white/80 hover:bg-white rounded-full backdrop-blur-md shadow-md transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Image Gallery */}
            <div className="md:col-span-6 space-y-4">
              {/* Main Preview Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                {product.discountPercentage && (
                  <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                    -{product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                        activeImageIndex === idx ? 'border-brand-600 ring-2 ring-brand-600/20' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Purchase Details */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                {/* Brand & Badges */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase font-extrabold text-brand-600 tracking-wider">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-black text-slate-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Color: <span className="text-slate-900 font-semibold">{selectedColor}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                            selectedColor === c.name
                              ? 'ring-2 ring-slate-900 ring-offset-2 scale-110 shadow-sm'
                              : 'border-slate-300 hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor === c.name && (
                            <Check className={`w-3.5 h-3.5 ${c.hex === '#f8fafc' || c.hex === '#cbd5e1' ? 'text-slate-900' : 'text-white'}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Size: <span className="text-slate-900 font-semibold">{selectedSize}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                            selectedSize === s
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Stock */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:bg-white text-slate-600 rounded-xl transition"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-bold text-xs text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:bg-white text-slate-600 rounded-xl transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-xs text-slate-500">
                    Status: <strong className="text-emerald-600 font-semibold">In Stock</strong> ({product.stock} units ready to ship)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 hover:bg-brand-600 text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart ({formatPrice(product.price * quantity)})</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded-2xl border transition ${
                      isFavorite
                        ? 'bg-rose-50 border-rose-300 text-rose-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:text-rose-500'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Instant Checkout</span>
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Tabs Section: Specifications, Features, Reviews */}
          <div className="mt-10 pt-6 border-t border-slate-200">
            <div className="flex gap-4 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition ${
                  activeTab === 'overview' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Features & Highlights
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition ${
                  activeTab === 'specs' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Tech Specs
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition ${
                  activeTab === 'reviews' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                Customer Reviews ({product.reviews?.length || 0})
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-slate-600">
              {activeTab === 'overview' && (
                <ul className="space-y-2">
                  {product.features?.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs && Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="block text-[11px] font-bold uppercase text-slate-400">{key}</span>
                      <span className="font-semibold text-slate-800">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {product.reviews && product.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{rev.user}</span>
                          {rev.verified && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-slate-400 text-[11px]">{rev.date}</span>
                      </div>
                      <div className="flex text-amber-400 text-xs">
                        {'★'.repeat(rev.rating)}
                      </div>
                      <h4 className="font-semibold text-slate-800 text-xs">{rev.title}</h4>
                      <p className="text-slate-600 text-xs">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

