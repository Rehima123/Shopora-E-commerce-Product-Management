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
import { AuthModal } from './components/AuthModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { InvoiceModal } from './components/InvoiceModal';
import { RecentlyViewed } from './components/RecentlyViewed';
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
            <RecentlyViewed />
            <Newsletter />
          </>
        ) : (
          <OrdersView />
        )}
      </main>

      <Footer />

      {/* Overlays, Drawers & Modals */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <AuthModal />
      <SizeGuideModal />
      <InvoiceModal />
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
