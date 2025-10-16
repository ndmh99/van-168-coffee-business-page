import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';  

function App() {
  useEffect(() => {
    // Set up GTranslate configuration
    window.gtranslateSettings = {
      "default_language": "en",
      "native_language_names": true,
      "detect_browser_language": true,
      "languages": ["en", "fr", "zh-CN", "vi"],
      "wrapper_selector": ".gtranslate_wrapper",
      "flag_style": "2d",
      "flag_size": 24,
      "widget_look": "flags",
      "alt_flags": {
        "en": "canada",
      },
      "switcher_horizontal_position": "right",
    };

    // Load GTranslate script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="App">
      <Hero />
      <About />
      <Menu />
      <Order />
      <Contact />
      <Footer />
      <Analytics />
      {/* GTranslate widget container */}
      <div className="gtranslate_wrapper"></div>
    </div>
  );
}

export default App;