import './styles/About.css';
import aboutVideo from '../assets/VAN168COFFEE-ABOUT.mp4'; // Make sure to add your video file here

function About() {
  const storyData = {
    title: "A Founder's Journey",
    subtitle: "From Resilience to Restaurant",
    paragraphs: [
      "The story of Van 168 Coffee is the story of the founder when she first came to Canada almost 40 years ago, Lynda carried with her the recipes and culinary traditions taught by her mother. This love for cooking, combined with a desire to share the amazing flavors of Northern Vietnam, became the heart of Van 168 Coffee. Today, she is proud to have built a life with her husband and three wonderful children, and starting to share her heritage one delicious dish at a time. Van 168 Coffee was established in 2023."
    ],
    quote: {
      text: "I wanted to bring the unique taste of my home to everyone. Seeing people enjoy the food I make is my greatest joy.",
      author: "- Lynda, The Owner"
    },
    highlights: [
      {
        icon: "🍽️",
        title: <strong>Flavorful Dishes</strong>,
        description: "Experience the rich flavors of Viet Cuisine."
      },
      {
        icon: "☕",
        title: <strong>Premium Coffee Taste</strong>,
        description: "Savor the amazing taste of one of the finest coffees."
      },
      {
        icon: "❤️",
        title: <strong>Customer-Centric</strong>,
        description: "A welcoming space for connection and community."
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
            <p>"{storyData.quote.text}"</p>
            <footer>{storyData.quote.author}</footer>
          </blockquote>
        </div>
        <div className="about-visuals-panel">
          <div className="about-video-container">
            <video 
              className="about-showcase-video"
              src={aboutVideo}
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
                  <span className="note-icon">{highlight.icon}</span>
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