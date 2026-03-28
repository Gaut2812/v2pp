import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';
import CustomCursor from './components/common/CustomCursor';
import LogoReveal from './components/common/LogoReveal';
import useLenis from './hooks/useLenis';

function AppContent() {
  const [appMounted, setAppMounted] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Initialize Lenis at the highest component level inside the router
  // so it has access to the full document correctly.
  useLenis();

  return (
    <>
      {!introDone && (
        <LogoReveal 
          onFadeStart={() => setAppMounted(true)}
          onComplete={() => setIntroDone(true)} 
        />
      )}
      
      {appMounted && (
        <div style={{ 
          opacity: introDone ? 1 : 0, 
          visibility: introDone ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease'
        }}>
          <ScrollToTop />
          <CustomCursor />
          <AppRoutes />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
