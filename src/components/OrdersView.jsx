import React from 'react';
import { useShop } from '../context/ShopContext';
import { Package, Truck, Calendar, MapPin, CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';

export const OrdersView = () => {
  const { orders, formatPrice, setActiveTab } = useShop();

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
          <Package className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">No orders placed yet</h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
          When you purchase your favorite luxury fashion, tech, or watches, you can track their shipment and delivery status here.
        </p>
        <button
          onClick={() => setActiveTab('store')}
          className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-600/25 transition"
        >
          Explore Collections
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Order History</h2>
          <p className="text-xs sm:text-sm text-slate-500">Track and review your previous purchases</p>
        </div>
        <button
          onClick={() => setActiveTab('store')}
          className="px-4 py-2 bg-slate-900 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </button>
      </div>

      <div className="space-y-6">
        {orders.map((ord) => (
          <div
            key={ord.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden"
          >
            {/* Order Header */}
            <div className="p-5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Order Placed</span>
                  <strong className="text-slate-800">
                    {new Date(ord.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </strong>
                </div>
                <div className="border-l border-slate-300 pl-4">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Order ID</span>
                  <strong className="font-mono text-slate-900">{ord.id}</strong>
                </div>
                <div className="border-l border-slate-300 pl-4 hidden sm:block">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Total</span>
                  <strong className="text-brand-600 font-black">{formatPrice(ord.total)}</strong>
                </div>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>{ord.status}</span>
                </span>
              </div>
            </div>

            {/* Order Body */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 justify-between">
                
                {/* Items */}
                <div className="flex-1 space-y-4">
                  {ord.items.map((item) => (
                    <div key={item.cartItemId} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                        <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900">{item.product.name}</h4>
                        <p className="text-xs text-slate-500">
                          Qty: {item.quantity} • Option: {item.size} / {item.color}
                        </p>
                      </div>
                      <span className="text-sm font-black text-slate-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Delivery Info Box */}
                <div className="md:w-72 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <Truck className="w-4 h-4 text-brand-600" />
                    <span>Estimated Arrival</span>
                  </div>
                  <p className="text-slate-600 font-semibold">{ord.estimatedDelivery}</p>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Delivering To</span>
                    <p className="font-semibold text-slate-800">{ord.customer.name}</p>
                    <p className="text-slate-500 text-[11px] leading-tight">
                      {ord.shippingAddress.address}, {ord.shippingAddress.city}, {ord.shippingAddress.zip}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
