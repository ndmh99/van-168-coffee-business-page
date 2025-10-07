
import './styles/Hero.css';
import heroImg from '../assets/hero-main-image.png';
import heroImg2 from '../assets/hero-secondary-image-1.png';
import heroImg3 from '../assets/hero-secondary-image-2.png';
import heroImg4 from '../assets/hero-secondary-image-3.png';

function Hero() {
    const scrollToMenu = () => {
        const el = document.getElementById('menu');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="hero-section">
            {/* Decorative Lanterns */}
            <div className="lanterns-bg">
                <div className="lantern-item lantern-red"></div>
                <div className="lantern-item lantern-pink"></div>
                <div className="lantern-item lantern-yellow"></div>
            </div>

            {/* Hero Main Content */}
            <div className="hero-content-container">
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Van 168 Coffee
                    </h1>
                    <p className="hero-tagline">
                        138-888 Kingsway Vancouver, BC V5V3C3. <br />
                        From 10am - 10pm Daily <br />
                        Phone: (604) 428-6968
                    </p>
                    <button className="hero-cta-button" onClick={scrollToMenu}>
                        Explore Our Menu
                    </button>
                </div>
                <div className="hero-image-container">
                <img src={heroImg} className="hero-showcase-image hero-showcase-image--main" alt="Main hero" />
                <img src={heroImg4} className="hero-showcase-image hero-showcase-image--secondary" alt="Secondary 1" />
                <img src={heroImg2} className="hero-showcase-image hero-showcase-image--secondary" alt="Secondary 2" />
                <img src={heroImg3} className="hero-showcase-image hero-showcase-image--secondary" alt="Secondary 3" />
                </div>
            </div>
        </section>
    );
}

export default Hero;