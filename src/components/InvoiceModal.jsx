import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Printer, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export const InvoiceModal = () => {
  const { selectedInvoiceOrder, setSelectedInvoiceOrder, formatPrice } = useShop();

  if (!selectedInvoiceOrder) return null;

  const order = selectedInvoiceOrder;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-slide-up my-auto max-h-[92vh] flex flex-col">
        
        {/* Controls Bar (hidden during browser print) */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-800">Order Invoice Receipt</span>
            <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
              {order.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => setSelectedInvoiceOrder(null)}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Invoice Printable Body */}
        <div className="p-8 sm:p-10 overflow-y-auto flex-1 text-slate-800 space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center text-white font-serif font-black text-sm">
                  S
                </div>
                <span className="font-serif text-2xl font-black tracking-tight text-slate-900">
                  SHOPORA<span className="text-brand-600">.</span>
                </span>
              </div>
              <p className="text-xs text-slate-500">Luxury Goods & Lifestyle Engineering</p>
              <p className="text-[11px] text-slate-400">VAT Registration: US-928471928</p>
            </div>

            <div className="text-right">
              <span className="text-xs uppercase font-extrabold text-brand-600 tracking-wider block">
                Official Tax Invoice
              </span>
              <strong className="text-lg font-mono text-slate-900 block mt-0.5">{order.id}</strong>
              <span className="text-xs text-slate-500 block">
                Issued: {new Date(order.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Billed To & Shipped To */}
          <div className="grid grid-cols-2 gap-6 text-xs pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Customer Details
              </span>
              <p className="font-bold text-slate-900 text-sm">{order.customer.name}</p>
              <p className="text-slate-500">{order.customer.email}</p>
              {order.customer.phone && <p className="text-slate-500">{order.customer.phone}</p>}
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Delivery Address
              </span>
              <p className="font-bold text-slate-900">{order.shippingAddress.address}</p>
              <p className="text-slate-500">
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
              </p>
              <p className="text-slate-500">{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Items Table */}
          <div>
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-2.5 px-3">Description</th>
                  <th className="py-2.5 px-3 text-center">Option</th>
                  <th className="py-2.5 px-3 text-center">Qty</th>
                  <th className="py-2.5 px-3 text-right">Price</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {order.items.map((item) => (
                  <tr key={item.cartItemId}>
                    <td className="py-3 px-3">
                      <strong className="text-slate-900 block">{item.product.name}</strong>
                      <span className="text-[10px] text-slate-400">{item.product.brand}</span>
                    </td>
                    <td className="py-3 px-3 text-center text-slate-500">
                      {item.size} / {item.color}
                    </td>
                    <td className="py-3 px-3 text-center font-bold">{item.quantity}</td>
                    <td className="py-3 px-3 text-right text-slate-600">
                      {formatPrice(item.product.price)}
                    </td>
                    <td className="py-3 px-3 text-right font-black text-slate-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Breakdown */}
          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <div className="w-64 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-800">{formatPrice(order.subtotal)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Applied Promo Discount:</span>
                  <span>-{formatPrice(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold text-slate-800">
                  {order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%):</span>
                <span className="font-semibold text-slate-800">{formatPrice(order.tax)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Paid:</span>
                <span className="text-brand-600">{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-slate-200 text-center text-[10px] text-slate-400">
            <p>Thank you for choosing SHOPORA. For inquiries, email concierge@shopora.com.</p>
            <p className="mt-0.5">Please retain this receipt for warranty and insurance claims.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

