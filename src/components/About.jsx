import './styles/About.css';
import aboutVideo from '../assets/VAN168COFFEE-ABOUT.mp4';
import OwnerCharacter from '../assets/owner-character.png';
import aboutPoster from '../assets/about-poster.png';
import restaurantInside from '../assets/restaurant-inside.png';
import restaurantOutside from '../assets/restaurant-outside.jpg';
import restaurantCounter from '../assets/restaurant-counter.png';
import restaurantCustomerSeat from '../assets/restaurant-customer-seat.jpg';
import restaurantVibe from '../assets/restaurant-vibe.jpg';

function About() {
  const storyData = {
    title: "A Founder's Journey",
    subtitle: "The birth of Van 168 Coffee",
    paragraphs: [
      "Van 168 Coffee began with founder Lynda's journey to Canada nearly 40 years ago. Bringing her mother's recipes and the rich culinary traditions of Northern Vietnam, she combined her love of cooking with a passion for sharing her heritage. Now a proud wife and mother of three, Lynda is excited to share her culture—one delicious dish at a time. Van 168 Coffee was established in 2023."
    ],
    quote: {
      text: "Seeing people enjoy the food I make is my greatest joy.",
      author: "Lynda, The Owner"
    },
    highlights: [
      {
        icon: "🍜",
        title: "Ngon",
        description: "Delicious dishes with variety"
      },
      {
        icon: "🥗",
        title: "Bổ",
        description: "Nutritious ingredients for health"
      },
      {
        icon: "💰",
        title: "Rẻ",
        description: "Affordable prices for all"
      }
    ]
  };

  return (
    <section id="about" className="about-section">
      

      <div className="about-container">
        <header className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">Our story, passion, and commitment to authentic Vietnamese cuisine</p>
        </header>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-story-card">
              <h3 className="story-title">{storyData.title}</h3>
              <p className="story-subtitle">{storyData.subtitle}</p>
              
              <div className="story-text">
                {storyData.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="about-quote-card">
                <div className="quote-content">
                  <div className="quote-text">"{storyData.quote.text}"</div>
                  <div className="quote-author">— {storyData.quote.author}</div>
                </div>
                <img className="quote-image" src={OwnerCharacter} alt="Owner Lynda" />
              </div>
            </div>

            <div className="about-highlights">
              {storyData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-content">
                    <div className="highlight-title">{highlight.title}</div>
                    <div className="highlight-description">{highlight.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-media">
            <div className="about-video-card">
              <div className="media-header">
                <h3 className="media-title">Our Story</h3>
                <p className="media-subtitle">Experience Van 168 Coffee</p>
              </div>
              <video
                className="about-video"
                src={aboutVideo}
                poster={aboutPoster}
                title="Van 168 Coffee Story"
                controls
                aria-label="Video showcasing Van 168 Coffee"
              ></video>
            </div>

            <div className="about-gallery">
              <div className="gallery-header">
                <h3 className="gallery-title">Our Space</h3>
                <p className="gallery-subtitle">A welcoming atmosphere</p>
              </div>
              <div className="gallery-grid">
                <div className="gallery-item gallery-large">
                  <img src={restaurantInside} alt="Restaurant interior" />
                  <div className="gallery-overlay">
                    <span className="overlay-text">Cozy Interior</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src={restaurantCounter} alt="Restaurant counter" />
                  <div className="gallery-overlay">
                    <span className="overlay-text">Counter Service</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src={restaurantCustomerSeat} alt="Coffee shop atmosphere" />
                  <div className="gallery-overlay">
                    <span className="overlay-text">Various Items</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src={restaurantVibe} alt="About Van 168 Coffee" />
                  <div className="gallery-overlay">
                    <span className="overlay-text">Café Vibes</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src={restaurantOutside} alt="About Van 168 Coffee" />
                  <div className="gallery-overlay">
                    <span className="overlay-text">Restaurant Outside</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;