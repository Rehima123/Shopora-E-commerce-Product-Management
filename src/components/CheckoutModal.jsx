import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Check,
  CreditCard,
  Truck,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Lock,
  Building,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartTotal,
    discountAmount,
    shippingAmount,
    taxAmount,
    formatPrice,
    placeOrder,
    setActiveTab
  } = useShop();

  if (!isCheckoutOpen) return null;

  const [step, setStep] = useState(1); // 1: Shipping Address, 2: Delivery Speed, 3: Payment, 4: Confirmed
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const fillDemoData = () => {
    setFormData({
      email: 'rehima.shopper@example.com',
      firstName: 'Rehima',
      lastName: 'Ali',
      phone: '+1 (555) 234-5678',
      address: '742 Evergreen Luxury Terrace, Suite 400',
      city: 'San Francisco',
      state: 'CA',
      zip: '94107',
      country: 'United States',
      shippingMethod: 'standard',
      paymentMethod: 'card',
      cardNumber: '4242 •••• •••• 4242',
      cardHolder: 'REHIMA ALI',
      cardExpiry: '12/28',
      cardCvc: '888'
    });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const errors = {};
    if (!formData.email.trim()) errors.email = 'Email address is required';
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.address.trim()) errors.address = 'Street address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.zip.trim()) errors.zip = 'Postal code is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!validateStep1()) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Complete Order
      const order = placeOrder({
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone
        },
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country
        },
        shippingMethod: formData.shippingMethod,
        paymentMethod: formData.paymentMethod
      });
      setPlacedOrderDetails(order);
      setStep(4);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-slide-up my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>SHOPORA Secure Checkout</span>
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              256-Bit SSL Bank Grade Encryption
            </span>
          </div>

          <div className="flex items-center gap-3">
            {step < 4 && (
              <button
                onClick={fillDemoData}
                type="button"
                className="text-xs bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold px-3 py-1.5 rounded-xl border border-brand-200 transition"
              >
                Auto-fill Demo Info
              </button>
            )}
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-Step Indicator Bar */}
        {step < 4 && (
          <div className="px-6 py-3 bg-white border-b border-slate-100">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[
                { num: 1, label: 'Address' },
                { num: 2, label: 'Shipping' },
                { num: 3, label: 'Payment' }
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      step === s.num
                        ? 'bg-slate-900 text-white ring-4 ring-slate-100'
                        : step > s.num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:inline ${
                      step >= s.num ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.num < 3 && <div className="w-12 h-0.5 bg-slate-200 mx-2 hidden sm:block"></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* STEP 1: Shipping Address */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Customer & Shipping Details</span>
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Email for Order Tracking *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border ${
                    formErrors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                  } focus:bg-white focus:border-brand-500 outline-none`}
                />
                {formErrors.email && (
                  <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jane"
                    className={`w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border ${
                      formErrors.firstName ? 'border-rose-500' : 'border-slate-200'
                    } focus:bg-white focus:border-brand-500 outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className={`w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border ${
                      formErrors.lastName ? 'border-rose-500' : 'border-slate-200'
                    } focus:bg-white focus:border-brand-500 outline-none`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Luxury Ave, Apt 4B"
                  className={`w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border ${
                    formErrors.address ? 'border-rose-500' : 'border-slate-200'
                  } focus:bg-white focus:border-brand-500 outline-none`}
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    State / Region
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="NY"
                    className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Zip / Postal *
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="10001"
                    className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Shipping Method */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-brand-600" />
                <span>Select Delivery Option</span>
              </h3>

              <div className="space-y-3">
                {[
                  {
                    id: 'standard',
                    title: 'Standard Tracked Delivery',
                    desc: 'Estimated 3-5 business days',
                    price: shippingAmount === 0 ? 'FREE' : formatPrice(15)
                  },
                  {
                    id: 'express',
                    title: 'Express Air Courier (FedEx / DHL)',
                    desc: 'Estimated 1-2 business days with SMS signature',
                    price: formatPrice(25)
                  },
                  {
                    id: 'priority',
                    title: 'VIP White Glove Same-Day / Priority',
                    desc: 'Premium discreet packaging and immediate dispatch',
                    price: formatPrice(45)
                  }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition ${
                      formData.shippingMethod === opt.id
                        ? 'border-brand-600 bg-rose-50/40 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value={opt.id}
                        checked={formData.shippingMethod === opt.id}
                        onChange={handleInputChange}
                        className="accent-brand-600 w-4 h-4"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{opt.title}</h4>
                        <p className="text-[11px] text-slate-500">{opt.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-slate-900">{opt.price}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                <CreditCard className="w-4 h-4 text-brand-600" />
                <span>Payment Information</span>
              </h3>

              {/* Payment Type Selector */}
              <div className="grid grid-cols-3 gap-2">
                {['card', 'paypal', 'apple'].map((pm) => (
                  <button
                    key={pm}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: pm }))}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition capitalize ${
                      formData.paymentMethod === pm
                        ? 'bg-slate-900 text-white border-slate-900 shadow'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {pm === 'card' ? 'Credit Card' : pm === 'paypal' ? 'PayPal' : 'Apple Pay'}
                  </button>
                ))}
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="space-y-4">
                  {/* Dynamic Mock Card Graphic */}
                  <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-brand-900 to-slate-950 text-white shadow-xl max-w-sm mx-auto space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-serif italic text-lg font-bold">SHOPORA</span>
                      <span className="text-xs font-mono uppercase bg-white/10 px-2 py-0.5 rounded">
                        Contactless
                      </span>
                    </div>

                    <div className="font-mono text-base tracking-widest text-slate-200">
                      {formData.cardNumber || '•••• •••• •••• 4242'}
                    </div>

                    <div className="flex justify-between text-xs">
                      <div>
                        <span className="block text-[9px] uppercase text-slate-400">Cardholder</span>
                        <span className="font-bold tracking-wider">{formData.cardHolder || 'REHIMA ALI'}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase text-slate-400">Expires</span>
                        <span className="font-bold">{formData.cardExpiry || '12/28'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="4242 4242 4242 4242"
                        className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                          Expiry Date (MM/YY)
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="12/28"
                          className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          maxLength={4}
                          placeholder="888"
                          className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order total review strip */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Total Amount Charged:</span>
                <span className="text-base font-black text-slate-900">{formatPrice(cartTotal)}</span>
              </div>
            </div>
          )}

          {/* STEP 4: Order Confirmation & Receipt */}
          {step === 4 && placedOrderDetails && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold block">
                  Payment Confirmed
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Thank you for your order!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We've emailed your invoice and delivery tracking link to{' '}
                  <strong className="text-slate-800">{placedOrderDetails.customer.email}</strong>
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Order Number</span>
                    <strong className="text-sm font-mono text-slate-900">{placedOrderDetails.id}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Estimated Delivery</span>
                    <strong className="text-slate-900">{placedOrderDetails.estimatedDelivery}</strong>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-2 py-1">
                  {placedOrderDetails.items.map((item) => (
                    <div key={item.cartItemId} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img src={item.product.images[0]} alt="" className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-slate-900 line-clamp-1">{item.product.name}</p>
                          <p className="text-[10px] text-slate-400">Qty: {item.quantity} • {item.size}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-slate-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-slate-900 text-sm">
                  <span>Grand Total</span>
                  <span className="text-brand-600">{formatPrice(placedOrderDetails.total)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setActiveTab('orders');
                  }}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold transition shadow"
                >
                  View in My Orders
                </button>
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setActiveTab('store');
                  }}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-xs font-bold transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Footer */}
        {step < 4 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400">Step 1 of 3</span>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-600/30 flex items-center gap-2 transition transform active:scale-98"
            >
              <span>{step === 3 ? `Pay ${formatPrice(cartTotal)}` : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

