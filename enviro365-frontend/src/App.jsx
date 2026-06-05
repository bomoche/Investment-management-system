import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopBar    from './components/layout/TopBar';
import Sidebar   from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import Footer    from './components/layout/Footer';
import Portfolio from './pages/Portfolio';
import Withdraw  from './pages/Withdraw';
import History   from './pages/History';
import ROUTES from './constants/routes';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-body-md">
        <TopBar />

        <div className="flex flex-1 max-w-container-max mx-auto w-full">
          <Sidebar />

          <main className="flex-1 md:ml-72 p-margin-mobile md:p-margin-desktop bg-background min-h-screen">
            <Routes>
              <Route index element={<Navigate to={ROUTES.PORTFOLIO} replace />} />
              <Route path={ROUTES.PORTFOLIO} element={<Portfolio onSelectProduct={setSelectedProduct} />} />
              <Route path={ROUTES.WITHDRAW}  element={<Withdraw  selectedProduct={selectedProduct} />} />
              <Route path={ROUTES.HISTORY}   element={<History />} />
              <Route path="*"                element={<Navigate to={ROUTES.PORTFOLIO} replace />} />
            </Routes>
          </main>
        </div>

        <Footer />
        <BottomNav />
        <div className="h-16 md:hidden" />
      </div>
    </BrowserRouter>
  );
}