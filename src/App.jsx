import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryPills } from './components/CategoryPills';
import { FeaturedDeals } from './components/FeaturedDeals';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrdersView } from './components/OrdersView';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

const MainContent = () => {
  const { activeTab } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {activeTab === 'store' ? (
          <>
            <Hero />
            <CategoryPills />
            <FeaturedDeals />
            <ProductGrid />
            <Newsletter />
          </>
        ) : (
          <OrdersView />
        )}
      </main>

      <Footer />

      {/* Overlays & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}

export default App;
