import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Heart,
  Trash2,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    moveAllWishlistToCart,
    formatPrice,
    setQuickViewProduct
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-fade-in flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      {/* Slide-in Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-up sm:animate-none">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-base font-black text-slate-900 tracking-tight">Saved Favorites</h2>
            <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {wishlist.length}
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length > 0 ? (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50/50 transition"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setQuickViewProduct(prod);
                  }}
                  className="w-20 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 cursor-pointer border border-slate-200"
                >
                  <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setQuickViewProduct(prod);
                        }}
                        className="text-xs font-bold text-slate-900 line-clamp-1 cursor-pointer hover:text-brand-600"
                      >
                        {prod.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(prod.id)}
                        className="text-slate-400 hover:text-rose-500 p-0.5 transition"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mt-0.5">
                      {prod.brand}
                    </span>
                    <span className="text-xs font-black text-slate-900 block mt-1">
                      {formatPrice(prod.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(prod, null, null, 1);
                      toggleWishlist(prod.id);
                    }}
                    className="w-full py-2 px-3 bg-slate-900 hover:bg-brand-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition mt-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Your wishlist is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Save pieces you love by tapping the heart icon on any product card.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-brand-600 transition"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {wishlistedProducts.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-white">
            <button
              onClick={() => {
                moveAllWishlistToCart();
                setIsWishlistOpen(false);
              }}
              className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition"
            >
              <span>Move All to Bag ({wishlist.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

