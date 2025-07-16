import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import App from './App';
import About from './About';
import PageTransition from './PageTransition';

function AppContent() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <PageTransition 
      isTransitioning={isTransitioning}
      onTransitionComplete={() => setIsTransitioning(false)}
    >
      <Routes>
        <Route path="/" element={<App onNavigate={handleNavigation} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </PageTransition>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}