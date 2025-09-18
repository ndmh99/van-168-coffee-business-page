import './styles/Footer.css';

function Footer() {
	const scrollTo = (id) => () => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-brand">
					<div className="brand-name">Van 168 Coffee</div>
					<div className="brand-tag">Authentic Vietnamese flavors in Vancouver</div>
				</div>

				<nav className="footer-nav">
					<button onClick={scrollTo('menu')}>Menu</button>
					<button onClick={scrollTo('order')}>Order</button>
					<button onClick={scrollTo('contact')}>Contact</button>
				</nav>

				<div className="footer-social">
					<a href="#" onClick={(e)=>e.preventDefault()} aria-label="Instagram">📷</a>
					<a href="#" onClick={(e)=>e.preventDefault()} aria-label="Facebook">📘</a>
					<a href="#" onClick={(e)=>e.preventDefault()} aria-label="TikTok">🎵</a>
				</div>
			</div>

			<div className="footer-bottom">
				<span>© {new Date().getFullYear()} Van 168 Coffee</span>
				<span>168 Main St, Vancouver, BC</span>
			</div>
		</footer>
	);
}

export default Footer;
