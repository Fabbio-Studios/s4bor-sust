import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { SavedRecipes } from './pages/SavedRecipes';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F5ED] text-[#20231F]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receitas/:slug" element={<RecipeDetail />} />
            <Route path="/salvas" element={<SavedRecipes />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  );
}
