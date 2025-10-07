import './styles/Order.css';
import DoordashIcon from '../assets/doordash.svg?react';
import UberEatsIcon from '../assets/uber-eats.svg?react';
import SkipIcon from '../assets/skip-the-dishes.svg?react';
import DineInIcon from '../assets/dine-in.svg?react';
import PickupIcon from '../assets/pickup.svg?react';

function Order() {
	return (
		<section id="order" className="order-section-v2">
			<div className="order-container-v2">
				<header className="order-header-v2">
					<h2 className="order-title-v2">How to Enjoy</h2>
					<p className="order-subtitle-v2">Dine with us, pick up, or get it delivered.</p>
				</header>

				<div className="order-panels-container-v2">
					{/* In-Person Panel */}
					<div className="order-panel-v2 in-person-panel">
						<div className="panel-header">
							<h3 className="panel-title">In Person</h3>
							<p className="panel-description">Experience the ambiance or grab it to go.</p>
						</div>
						<div className="panel-options">
							<a href="#contact" className="panel-option-card">
								<DineInIcon className="option-icon" />
								<span className="option-title">Dine In</span>
								<span className="option-cta">Find Our Location</span>
							</a>
							<a href="tel:604-428-6968" className="panel-option-card">
								<PickupIcon className="option-icon" />
								<span className="option-title">Pick-Up</span>
								<span className="option-cta">Call to Order</span>
							</a>
						</div>
					</div>

					{/* Delivery Panel */}
					<div className="order-panel-v2 delivery-panel">
						<div className="panel-header">
							<h3 className="panel-title">Home Delivery</h3>
							<p className="panel-description">Your favorite dishes, delivered.</p>
						</div>
						<div className="panel-options">
							<a href="https://www.doordash.com/store/van-168-coffee-vancouver-29694586" target="_blank" rel="noopener noreferrer" className="panel-option-card">
								<DoordashIcon className="option-icon delivery-icon" />
								<span className="option-title">DoorDash</span>
								<span className="option-cta">Order Now</span>
							</a>
							<a href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer" className="panel-option-card">
								<UberEatsIcon className="option-icon delivery-icon" />
								<span className="option-title">Uber Eats</span>
								<span className="option-cta">Order Now</span>
							</a>
							<a href="https://www.skipthedishes.com/van-168-coffee" target="_blank" rel="noopener noreferrer" className="panel-option-card">
								<SkipIcon className="option-icon delivery-icon" />
								<span className="option-title">SkipTheDishes</span>
								<span className="option-cta">Order Now</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Order;
