import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { PillarPage } from './pages/PillarPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { PYQPage } from './pages/PYQPage';
import { CoursesPage } from './pages/CoursesPage';
import ScrollToTop from './components/utils/ScrollToTop';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Trust Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Feature Pages */}
            <Route path="/previous-year-papers" element={<PYQPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            
            {/* Pillar Pages Routing */}
            <Route path="/:slug" element={<PillarPage />} />
            
            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
