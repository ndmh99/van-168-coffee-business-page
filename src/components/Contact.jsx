import './styles/Contact.css';

function Contact() {
	const hours = [
		{ day: 'Mon - Sun', time: '10:00 AM – 10:00 PM' },
	];

	return (
		<section id="contact" className="contact">
			<div className="contact-container">
				<header className="contact-header">
					<h2 className="contact-title">Get in Touch</h2>
					<p className="contact-subtitle">We’d love to hear from you</p>
				</header>

				<div className="contact-grid">
					{/* Info Column */}
					<div className="contact-info">
						<div className="info-card">
							<div className="info-icon">📍</div>
							<div>
								<div className="info-title">Location</div>
								<div className="info-detail">138-888 Kingsway, Vancouver, BC V5V 3C3</div>
							</div>
						</div>
						<div className="info-card">
							<div className="info-icon">☎️</div>
							<div>
								<div className="info-title">Phone</div>
								<div className="info-detail">604-428-6968</div>
							</div>
						</div>
						<div className="info-card">
							<div className="info-icon">⏰</div>
							<div>
								<div className="info-title">Hours</div>
								<ul className="hours-list">
									{hours.map((h) => (
										<li key={h.day}><span>{h.day}</span><span>{h.time}</span></li>
									))}
								</ul>
							</div>
						</div>
						<div className="info-card">
							<div className="info-icon">🌐</div>
							<div>
								<div className="info-title">Follow</div>
								<div className="info-detail">Instagram • Facebook • TikTok</div>
							</div>
						</div>
					</div>

					{/* Form Column */}
					<form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
						<div className="form-row">
							<div className="form-field">
								<label htmlFor="name">Name</label>
								<input id="name" name="name" type="text" placeholder="Your name" required />
							</div>
							<div className="form-field">
								<label htmlFor="email">Email</label>
								<input id="email" name="email" type="email" placeholder="you@example.com" required />
							</div>
						</div>
						<div className="form-field">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" rows={5} placeholder="How can we help?" required />
						</div>
						<button className="contact-submit" type="submit">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
