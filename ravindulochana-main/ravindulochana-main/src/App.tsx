import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import SpotlightBackground from './components/SpotlightBackground';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SamplesPage from './pages/SamplesPage';

function SamplesLayout() {
  return (
    <>
      <SpotlightBackground />
      <div className="relative z-10">
        <Header />
        <SamplesPage />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen font-inter">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/samples/:pack" element={<SamplesLayout />} />
              <Route path="/samples" element={<SamplesLayout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
