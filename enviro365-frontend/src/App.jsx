import React, { useState } from 'react';
import TopBar     from './components/layout/TopBar';
import Sidebar    from './components/layout/Sidebar';
import BottomNav  from './components/layout/BottomNav';
import Footer     from './components/layout/Footer';
import Portfolio  from './pages/Portfolio';
import Withdraw   from './pages/Withdraw';
import History    from './pages/History';

export default function App() {
  const [activeTab, setActiveTab]           = useState('portfolio');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Called from Portfolio when investor clicks "Withdraw" on a product card
  function handleSelectProduct(product) {
    setSelectedProduct(product);
    setActiveTab('withdraw');
  }

  function renderPage() {
    if (activeTab === 'portfolio') return <Portfolio onSelectProduct={handleSelectProduct} />;
    if (activeTab === 'withdraw')  return <Withdraw selectedProduct={selectedProduct} />;
    if (activeTab === 'history')   return <History />;
  }

  return (
    <div className="min-h-screen flex flex-col font-body-md">
      <TopBar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex flex-1 max-w-container-max mx-auto w-full">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 md:ml-72 p-margin-mobile md:p-margin-desktop bg-background min-h-screen">
          {renderPage()}
        </main>
      </div>

      <Footer />
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      {/* Spacer so content isn't hidden behind mobile bottom nav */}
      <div className="h-16 md:hidden" />
    </div>
  );
}