import './styles/Menu.css';
import { useState } from 'react';
import snailVermicelli from '../assets/menu-items/snail-vermicelli-soup-24.png';
import phoSpecialBeef from '../assets/menu-items/spicy-beef-pho-3.png';
import phoChicken from '../assets/menu-items/chicken-pho-5.png';
import condensedMilkCoffee from '../assets/menu-items/viet-condensed-milk-coffee.png';
// Featured items (top sellers / signatures)
const featuredItems = [
	{ name: '24. BÚN ỐC CHẢ ỐC', en: 'Freshwater Snail and Snail Stick Vermicelli', prices: { S: 15, L: 17.5 }, tag: 'Signature', img: snailVermicelli },
	{ name: '19. BÚN RIÊU CHẢ CÁ, CHẢ TÔM', en: 'Fish Cake, Shrimp Cake & Crab Paste Vermicelli Soup', prices: { S: 15, L: 17.5 }, tag: 'Signature', img: 'https://placehold.co/400' },
	{ name: '16. BÚN BÒ HUẾ', en: 'Spicy Huế Style Soup', prices: { S: 15, L: 17.5 }, tag: 'Spicy', img: phoSpecialBeef },
	{ name: '5. PHỞ GÀ', en: 'Chicken Noodle Soup', prices: { S: 14, L: 16 }, tag: 'Customer Favorite', img: phoChicken },
	{ name: 'CÀ PHÊ SỮA ĐÁ', en: 'Vietnamese Iced Coffee', price: 7.5, tag: 'Best Seller', img: condensedMilkCoffee },
	{ name: 'GỎI CUỐN TÔM THỊT GÀ (2 CUỐN)', en: 'Steamed Salad Roll with Chicken and Shrimp. Comes in 2 Pieces', price: 10, tag: 'Light', img: 'https://placehold.co/400' },
	{ name: 'CHÈ THẬP CẨM', en: 'Assorted Dessert', price: 8.5, tag: 'Sweet', img: 'https://placehold.co/400' },
];

// Categorized full set (subset here for UI)
const categories = [
	{
		key: 'pho',
		label: 'Phở & Vermicelli',
		icon: '🥣',
		items: [
			{ name: '1. PHỞ ĐẶC BIỆT BÒ', en: 'House Special Noodle Soup with Beef', prices: { S: 16, L: 18 } },
			{ name: '2. PHỞ ĐẶC BIỆT GÀ CAY SATÉ', en: 'Spicy Chicken Noodle Soup', prices: { S: 16, L: 18 } },
			{ name: '3. PHỞ BÒ CAY SATÉ', en: 'Spicy Beef Noodle Soup', prices: { S: 16, L: 18 } },
			{ name: '16. BÚN BÒ HUẾ', en: 'Spicy Hue-style Vermicelli Soup', prices: { S: 15, L: 17.5 } },
			{ name: '19. BÚN RIÊU CHẢ CÁ, CHẢ TÔM', en: 'Fish Cake, Shrimp Cake & Crab Paste Vermicelli Soup', prices: { S: 15, L: 17.5 } },
			{ name: '20. BÚN RIÊU CHẢ CÁ', en: 'Fish Cake and Crab Paste Vermicelli Soup', prices: { S: 14, L: 16 } },
			{ name: '23. BÚN ỐC', en: 'Freshwater Snail Vermicelli Soup', prices: { S: 14, L: 16 } },
			{ name: '24. BÚN ỐC CHẢ ỐC', en: 'Freshwater Snail and Snail Stick Vermicelli', prices: { S: 15, L: 17.5 } },
		]
	},
	{
		key: 'rice-noodle',
		label: 'Rice & Noodle Plates',
		icon: '🍚',
		items: [
			{ name: '25. CƠM HOẶC BÚN CHẢ LÁ LỐT VÀ SƯỜN BÒ VÀ CHẢ TÔM', en: 'Grilled Beef in Lolot Leaves, with Beef Ribs and Shrimp Cakes on Rice or Noodles', price: 23 },
			{ name: '26. CƠM HOẶC BÚN SƯỜN BÒ NƯỚNG CHẢ LÁ LỐT', en: 'Grilled Pork in Lolot Leaves, with Beef Ribs or Noodles', price: 18 },
			{ name: '27. CƠM HOẶC BÚN CHẢ LÁ LỐT', en: 'Grilled Pork in Lolot Leaves on Rice or Noodles', price: 16 },
			{ name: '28. CƠM HOẶC BÚN CHẢ TÔM', en: 'Shrimp Cakes on Rice or Noodles', price: 18 },
			{ name: '29. CƠM GÀ HẢI NAM', en: 'Hainanese Chicken Rice', price: 18 },
			{ name: '30. BÒ XÀO LÚC LẮC', en: 'Vietnamese Shaking Beef on Rice or Noodle', price: 18 },
		]
	},
	{
		key: 'appetizers',
		label: 'Appetizers',
		icon: '🥢',
		items: [
			{ name: '31. GỎI CUỐN TÔM THỊT GÀ (2 CUỐN)', en: 'Steamed Salad Roll with Chicken and Shrimp. Comes in 2 Pieces', price: 10 },
			{ name: '32. GỎI CUỐN GÀ (2 CUỐN)', en: 'Chicken Salad Rolls. Comes in 2 Pieces', price: 10 },
			{ name: '33. GỎI CUỐN TÔM (2 CUỐN)', en: 'Steamed Shrimp Rolls. Comes in 2 Pieces', price: 10 },
			{ name: '34. GỎI CUỐN CHẢ LÁ LỐT (2 CUỐN)', en: 'Grilled Pork in Lolot Leaves Salad Rolls. Comes in 2 Pieces', price: 10 },
			{ name: '36. NEM THÍNH TAI HEO BÁN 500G', en: 'Roasted Rice Powder Pig Ear (500g)', price: 30 },
			{ name: '37. CHẢ ỐC (4 CUỐN)', en: 'Steamed Snail Sticks', price: 11 },
		]
	},
	{
		key: 'drinks',
		label: 'Coffee & Drinks',
		icon: '☕',
		items: [
			{ name: 'CÀ PHÊ SỮA ĐÁ', en: 'Iced Coffee w/ Condensed Milk', price: 7.5 },
			{ name: 'CÀ PHÊ ĐEN', en: 'Black Coffee (Hot/Iced)', price: 7.5 },
			{ name: 'CÀ PHÊ BẠC XỈU', en: 'Coconut Milk Coffee', price: 7.5 },
			{ name: 'CHÈ THẬP CẨM', en: 'Assorted Dessert', price: 8.5 },
			{ name: 'TRÀ ĐÀO CAM SẢ', en: 'Peach, Orange & Lemongrass Iced Tea', price: 8.5 },
			{ name: 'NƯỚC NGỌT', en: 'Pop Drink', price: 2.5 },
			{ name: 'NƯỚC CAM TƯƠI', en: 'Fresh Orange Juice', price: 7.5 },
		]
	}
];

function PriceDisplay({ price, prices }) {
	if (prices) {
		return <span className="price-multi">C${prices.S.toFixed(2)} <span className="divider">|</span>C${prices.L.toFixed(2)}</span>;
	}
	return <span className="price-single">C${price.toFixed(2)}</span>;
}

function FeaturedCard({ item }) {
	return (
		<div className="featured-card">
			<img
				src={item.img}
				alt={item.name}
				className="featured-image"
				loading="lazy"
			/>
			<div className="featured-card-header">
				<h4 className="featured-name">{item.name}</h4>
				{item.tag && <span className="featured-tag">{item.tag}</span>}
			</div>
			<p className="featured-en">{item.en}</p>
			<div className="featured-price">
				<PriceDisplay price={item.price} prices={item.prices} />
			</div>
		</div>
	);
}

function CategoryPanel({ activeKey, cat }) {
	return (
		<div
			role="tabpanel"
			id={`panel-${cat.key}`}
			aria-labelledby={`tab-${cat.key}`}
			hidden={activeKey !== cat.key}
			className="category-panel"
		>
			<ul className="category-items">
				{cat.items.map(i => (
					<li key={i.name} className="category-item">
						<div className="ci-head">
							<span className="ci-name">{i.name}</span>
							<PriceDisplay price={i.price} prices={i.prices} />
						</div>
						<div className="ci-en">{i.en}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

function Menu() {
	const [activeKey, setActiveKey] = useState(categories[0].key);
	const handleKey = (e, key) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			setActiveKey(key);
		}
	};
	// PDF link logic
	const drinksKey = 'drinks';
	const pdfUrl = activeKey === drinksKey ? '/drinks.pdf' : '/menu.pdf';
	const pdfLabel = activeKey === drinksKey ? 'See Full Drinks Menu (PDF) ->' : 'See Full Food Menu (PDF) ->';
	return (
		<section id="menu" className="menu showcase-menu">
			<div className="menu-overlay" aria-hidden />
			<div className="menu-inner">
				<header className="menu-top">
					<h2 className="menu-heading">MENU</h2>
				</header>
				<p className="menu-intro">Top Featured Items</p>
				<div className="featured-scroll">
					{featuredItems.map(fi => <FeaturedCard key={fi.name} item={fi} />)}
				</div>

				<div className="menu-tabs" role="tablist" aria-label="Menu Categories">
					{categories.map(cat => (
						<button
							key={cat.key}
							id={`tab-${cat.key}`}
							role="tab"
							aria-selected={activeKey === cat.key}
							aria-controls={`panel-${cat.key}`}
							tabIndex={activeKey === cat.key ? 0 : -1}
							className={`menu-tab ${activeKey === cat.key ? 'is-active' : ''}`}
							onClick={() => setActiveKey(cat.key)}
							onKeyDown={(e) => handleKey(e, cat.key)}
						>
							<span className="tab-icon" aria-hidden>{cat.icon}</span>
							{cat.label}
						</button>
					))}
				</div>

				{categories.map(cat => (
					<CategoryPanel key={cat.key} activeKey={activeKey} cat={cat} />
				))}

				<div className="full-menu-cta">
					<a href={pdfUrl} target="_blank" rel="noopener" className="pdf-button">{pdfLabel}</a>
				</div>
			</div>
		</section>
	);
}

export default Menu;
