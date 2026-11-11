import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle2,
  Truck
} from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    cartTotal,
    discountAmount,
    shippingAmount,
    taxAmount,
    isFreeShipping,
    amountToFreeShipping,
    FREE_SHIPPING_THRESHOLD,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    appliedPromo,
    promoError,
    applyPromoCode,
    removePromoCode,
    formatPrice,
    setIsCheckoutOpen
  } = useShop();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    applyPromoCode(inputCode);
    setInputCode('');
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const freeShippingPercent = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-fade-in flex justify-end">
      {/* Backdrop Click to close */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      {/* Slide-in Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-up sm:animate-none">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-600" />
            <h2 className="text-base font-black text-slate-900 tracking-tight">Shopping Bag</h2>
            <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-slate-400 hover:text-rose-600 font-semibold transition mr-1"
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3.5 bg-rose-50/50 border-b border-rose-100/70">
          <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
            <span className="flex items-center gap-1.5 text-slate-800">
              <Truck className="w-3.5 h-3.5 text-brand-600" />
              {isFreeShipping ? (
                <span className="text-emerald-700 font-bold">🎉 You qualified for FREE Express Shipping!</span>
              ) : (
                <span>Add <strong className="text-brand-600 font-bold">{formatPrice(amountToFreeShipping)}</strong> for Free Shipping</span>
              )}
            </span>
            <span className="text-slate-500 font-bold">{freeShippingPercent}%</span>
          </div>

          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isFreeShipping ? 'bg-emerald-500' : 'bg-gradient-to-r from-brand-500 to-rose-400'
              }`}
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.cartItemId}
                className="flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50/40 transition"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-slate-400 hover:text-rose-500 p-0.5 transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                      <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                        {item.size}
                      </span>
                      <span>•</span>
                      <span>{item.color}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Stepper */}
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 px-1 py-0.5">
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1 text-slate-500 hover:text-slate-900"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-slate-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1 text-slate-500 hover:text-slate-900"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-xs font-black text-slate-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty Cart */
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Your bag is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Explore our catalog to find luxury garments, watches, and audio gear.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-brand-600 transition"
              >
                Discover Collections
              </button>
            </div>
          )}
        </div>

        {/* Bottom Checkout & Summary Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-white space-y-4">
            
            {/* Promo Code Input */}
            <div>
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>"{appliedPromo.code}" applied (-{appliedPromo.discount}{appliedPromo.type === 'percent' ? '%' : '$'})</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-slate-400 hover:text-rose-600 text-[11px] font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. SHOPORA20)"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="flex-1 bg-slate-100 uppercase text-xs text-slate-900 px-3 py-2 rounded-xl border border-transparent focus:border-brand-500 focus:bg-white outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-500 font-medium mt-1">{promoError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-slate-800">
                  {shippingAmount === 0 ? (
                    <strong className="text-emerald-600 font-bold uppercase text-[10px]">FREE</strong>
                  ) : (
                    formatPrice(shippingAmount)
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes (8%)</span>
                <span className="font-semibold text-slate-800">{formatPrice(taxAmount)}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100">
                <span>Total Due</span>
                <span className="text-base text-brand-600">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedCheckout}
              className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

