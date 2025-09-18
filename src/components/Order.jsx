import './styles/Order.css';

function Order() {
	return (
		<section id="order" className="order">
			<div className="order-container">
				<header className="order-header">
					<h2 className="order-title">Order Now</h2>
					<p className="order-subtitle">Pick up in-store or enjoy delivery</p>
				</header>

				<div className="order-cards">
					<a className="order-card" href="#" onClick={(e)=>e.preventDefault()}>
						<div className="order-icon">🏠</div>
						<h3 className="order-card-title">Pick Up</h3>
						<p className="order-card-text">Call us to place an order and we’ll have it ready.</p>
						<div className="order-cta">(604) 555-0168</div>
					</a>

					<a className="order-card" href="#" onClick={(e)=>e.preventDefault()}>
						<div className="order-icon">🚗</div>
						<h3 className="order-card-title">Delivery</h3>
						<p className="order-card-text">Order through your favorite delivery app.</p>
						<div className="order-cta">DoorDash • Uber Eats • Skip</div>
					</a>

					<a className="order-card" href="#" onClick={(e)=>e.preventDefault()}>
						<div className="order-icon">🪑</div>
						<h3 className="order-card-title">Dine In</h3>
						<p className="order-card-text">Visit us for the full experience in our cozy space.</p>
						<div className="order-cta">See Location</div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Order;
