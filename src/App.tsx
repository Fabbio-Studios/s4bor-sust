import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { TutorialProvider } from './components/AppTutorial';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { AuthorProfilePage } from './pages/AuthorProfilePage';
import { SavedRecipes } from './pages/SavedRecipes';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const AppShell: React.FC = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  return (
    <div className="h-[100dvh] md:h-auto md:min-h-screen flex flex-col bg-[#F7F5ED] text-[#20231F] overflow-hidden md:overflow-x-clip">
      <Header />
      <main
        ref={mainRef}
        className="flex-1 overflow-y-auto overflow-x-clip overscroll-y-contain md:overflow-visible pb-4 md:pb-0"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Recipes />} />
          <Route path="/receitas/:slug" element={<RecipeDetail />} />
          <Route path="/perfil/:authorId" element={<AuthorProfilePage />} />
          <Route path="/salvas" element={<SavedRecipes />} />
          <Route path="/sobre" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <TutorialProvider>
        <AppShell />
      </TutorialProvider>
    </BrowserRouter>
  );
}
