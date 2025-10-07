import './styles/About.css';
import aboutVideo from '../assets/VAN168COFFEE-ABOUT.mp4';
import OwnerCharacter from '../assets/owner-character.png';
import aboutPoster from '../assets/about-poster.png';

function About() {
  const storyData = {
    title: "A Founder's Journey",
    subtitle: "From Resilience to Restaurant",
    paragraphs: [
      "Van 168 Coffee began with founder Lynda’s journey to Canada nearly 40 years ago. Bringing her mother’s recipes and the rich culinary traditions of Northern Vietnam, she combined her love of cooking with a passion for sharing her heritage. Now a proud wife and mother of three, Lynda is excited to share her culture—one delicious dish at a time. Van 168 Coffee was established in 2023."
    ],
    quote: {
      text: "Seeing people enjoy the food I make is my greatest joy.",
      author: "- Lynda, The Owner"
    },
    highlights: [
      {
        title: <strong>ᯓ Ngon</strong>,
        description: "Delicious Dishes with variety."
      },
      {
        title: <strong>ᯓ Bổ</strong>,
        description: "Nutritious Ingredients for Health."
      },
      {
        title: <strong>ᯓ Rẻ</strong>,
        description: "Affordable Prices for All."
      }
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="about-grid-container">
        <div className="about-story-panel">
          <h2 className="about-main-title">{storyData.title}</h2>
          <h3 className="about-main-subtitle">{storyData.subtitle}</h3>
          <div className="about-story-paragraphs">
            {storyData.paragraphs.map((p, i) => (
              <p key={i} className="about-story-text">{p}</p>
            ))}
          </div>
          <blockquote className="about-story-quote">
          <div className="about-quote-content">
            <p className="about-quote-text">"{storyData.quote.text}"</p>
            <img className="about-quote-image" src={OwnerCharacter} alt="Owner Character" />
          </div>
          <footer className="about-quote-author">{storyData.quote.author}</footer>
          </blockquote>
        </div>
        <div className="about-visuals-panel">
          <div className="about-video-container">
            <video 
              className="about-showcase-video"
              src={aboutVideo}
              poster={aboutPoster}
              title="Van 168 Coffee"
              controls
            ></video>
          </div>
          <div className="handwritten-note-container">
            <div className="note-pin"></div>
            <div className="handwritten-note">
              <h4 className="note-title">What We Offer</h4>
              {storyData.highlights.map((highlight, index) => (
                <div key={index} className="note-item">
                  <p className="note-text">{highlight.title}: <span className="note-description">{highlight.description}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;