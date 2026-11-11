import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  User,
  Mail,
  Lock,
  Crown,
  Sparkles,
  MapPin,
  Package,
  Heart,
  LogOut,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AuthModal = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    user,
    loginUser,
    logoutUser,
    setActiveTab,
    setIsWishlistOpen,
    orders,
    wishlist
  } = useShop();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isAuthModalOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: name.trim() || 'Valued Shopper',
      email: email.trim() || 'shopper@example.com'
    });
    setIsAuthModalOpen(false);
  };

  const handleQuickDemoLogin = () => {
    loginUser({
      name: 'Rehima Ali',
      email: 'rehima.shopper@example.com'
    });
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 animate-slide-up my-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-white rounded-full backdrop-blur-md shadow-sm transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGGED IN PROFILE VIEW */}
        {user ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* User Header */}
            <div className="text-center space-y-3">
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-rose-100 shadow-md mx-auto"
                />
                <span className="absolute bottom-0 right-0 bg-brand-600 text-white p-1 rounded-full shadow">
                  <Crown className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
                <p className="text-xs text-slate-500">{user.email}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-xs font-black mt-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{user.tier}</span>
                </div>
              </div>
            </div>

            {/* Loyalty Rewards Points Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-brand-950 rounded-2xl p-4 text-white shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-rose-300 font-bold block">
                  SHOPORA Points
                </span>
                <span className="text-2xl font-black">{user.points || 1450} pts</span>
                <p className="text-[10px] text-slate-300 mt-0.5">Value: ${( (user.points || 1450) / 100 ).toFixed(2)} in checkout credits</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
                <Crown className="w-6 h-6" />
              </div>
            </div>

            {/* Quick Actions Links */}
            <div className="space-y-2 text-xs font-bold">
              <button
                onClick={() => {
                  setIsAuthModalOpen(false);
                  setActiveTab('orders');
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-brand-600" />
                  <span>My Purchase History ({orders.length})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => {
                  setIsAuthModalOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Saved Wishlist Items ({wishlist.length})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {user.addresses && user.addresses.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    <span>Saved Primary Address</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">
                    {user.addresses[0].address}, {user.addresses[0].city}, {user.addresses[0].zip}
                  </p>
                </div>
              )}
            </div>

            {/* Sign Out Action */}
            <button
              onClick={() => {
                logoutUser();
                setIsAuthModalOpen(false);
              }}
              className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Account</span>
            </button>
          </div>
        ) : (
          /* LOGIN & REGISTER VIEW */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Access member discounts, track shipments, and earn points
              </p>
            </div>

            {/* Quick Demo Login Option */}
            <div className="bg-rose-50/70 p-3.5 rounded-2xl border border-rose-100 text-center space-y-2">
              <span className="text-[11px] font-bold text-brand-900 block">
                ⚡ Instant Tester Access
              </span>
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4 text-amber-300" />
                <span>1-Click Sign-In as Rehima (VIP)</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Or with email</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:border-brand-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition"
              >
                {mode === 'login' ? 'Sign In to SHOPORA' : 'Register Account'}
              </button>
            </form>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-xs text-brand-600 hover:text-brand-800 font-bold"
              >
                {mode === 'login'
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

