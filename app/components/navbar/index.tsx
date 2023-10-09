import { NAVIGATION_MENU_ITEMS } from "@/app/constants";

interface INavbar {
	activeIndex: number;
	setCurrentScreenIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<INavbar> = ({ activeIndex, setCurrentScreenIndex }) => {
	const handleNavItemClick = (index: number) => {
		setCurrentScreenIndex(index);
	};

	return (
		<nav className="navbar">
			<ul className="navbar-list">
				{NAVIGATION_MENU_ITEMS.map((navItem, index) => (
					<li key={navItem} className="navbar-item">
						<button
							className={`navbar-link ${activeIndex === index ? "active" : ""}`}
							data-nav-link
							onClick={() => handleNavItemClick(index)}
						>
							{navItem}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
