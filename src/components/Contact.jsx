import { useState } from 'react';
import './styles/Contact.css';

function Icon({ name, className = '' }) {
	// small set of flat SVG icons used inline for crisp rendering
	const icons = {
		location: (
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
			</svg>
		),
		phone: (
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
			</svg>
		),
		clock: (
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm1 12.59V7a1 1 0 0 0-2 0v6a1 1 0 0 0 .29.71l4 4a1 1 0 0 0 1.42-1.42z" />
			</svg>
		),
		follow: (
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
			</svg>
		),
	};

	return <span className={"info-icon svg " + className}>{icons[name]}</span>;
}

function Contact() {
	const hours = [
		{ day: 'Mon - Sun', time: '10:00 AM – 10:00 PM' },
	];

	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('idle'); // idle | sending | success

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) return;
		setStatus('sending');
		// simulate async send
		setTimeout(() => {
			setStatus('success');
			setForm({ name: '', email: '', message: '' });
			setTimeout(() => setStatus('idle'), 3500);
		}, 900);
	}

	return (
		<section id="contact" className="contact">
			<div className="contact-decor" aria-hidden="true">
				<div className="shape shape-1" />
				<div className="shape shape-2" />
			</div>

			<div className="contact-container">
				<header className="contact-header">
					<h2 className="contact-title">Contact Us</h2>
					<p className="contact-subtitle">Questions, orders, or just say hi — we’re here.</p>
				</header>

				<div className="contact-grid">
					<div className="contact-info">
						<div className="info-card flat">
							<Icon name="location" />
							<div>
								<div className="info-title">Location</div>
								<div className="info-detail">138-888 Kingsway, Vancouver, BC V5V 3C3</div>
							</div>
						</div>

						<div className="info-card flat">
							<Icon name="phone" />
							<div>
								<div className="info-title">Phone</div>
								<div className="info-detail">604-428-6968</div>
							</div>
						</div>

						<div className="info-card flat">
							<Icon name="clock" />
							<div>
								<div className="info-title">Hours</div>
								<ul className="hours-list">
									{hours.map((h) => (
										<li key={h.day}><span className="day">{h.day}</span><span className="time">{h.time}</span></li>
									))}
								</ul>
							</div>
						</div>

						<div className="info-card flat">
							<Icon name="follow" />
							<div>
								<div className="info-title">Follow</div>
								<div className="info-detail social">Instagram · Facebook · TikTok</div>
							</div>
						</div>

						{/* Map Card */}
						<div className="map-card" aria-hidden="false">
							<iframe
								className="map-iframe"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.1430176836207!2d-123.08597870000001!3d49.2547351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717e58de0b3d%3A0x6469f8c985d21dd4!2sVan%20168%20Coffee!5e0!3m2!1sen!2sca!4v1759905294518!5m2!1sen!2sca"
								width="100%"
								height="220"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Van 168 Coffee location map"
								aria-label="Map showing location of Van 168 Coffee"
							></iframe>
							<a className="map-open" href="https://www.google.com/maps/place/Van+168+Coffee/@49.2547351,-123.0859787,17z" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
						</div>
					</div>

					<form className="contact-form" onSubmit={handleSubmit} aria-live="polite">
						<div className="form-top">
							<div className="form-heading">Send us a message</div>
							<div className="form-sub">We aim to respond within 24 hours</div>
						</div>

						<div className="form-row">
							<div className="form-field">
								<label htmlFor="name">Name</label>
								<input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
							</div>
							<div className="form-field">
								<label htmlFor="email">Email</label>
								<input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
							</div>
						</div>

						<div className="form-field">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" rows={5} placeholder="How can we help?" value={form.message} onChange={handleChange} required />
						</div>

						<div className="form-actions">
							<button className="contact-submit" type="submit" disabled={status === 'sending'}>
								{status === 'sending' ? 'Sending...' : 'Send Message'}
							</button>
							{status === 'success' && <div className="success-pill" role="status">Thanks — message sent!</div>}
						</div>

						<iframe src="https://app.reviewconnect.me/embed/reviews/k5AriEL1Fal2cjRrdjzhCrLZc8Ew3rkK" width="100%" height="490" frameborder="0" title="Top Newest Reviews Reviews"></iframe>
					</form>
					
				</div>
			</div>
		</section>
	);
}

export default Contact;
