import { NavLink } from "react-router";

export default function Header() {
	// Define a helper for active styling to keep the JSX clean
	const navClass = ({ isActive }) =>
		`px-3 py-2 rounded-md transition-colors ${
			isActive
				? "bg-red-800 text-white font-bold" // Active state
				: "text-gray-300 hover:bg-gray-700 hover:text-white" // Inactive state
		}`;

	return (
		<header className="bg-gray-900 p-4 shadow-lg">
			<nav className="max-w-6xl mx-auto flex gap-4">
				<NavLink to="/" end className={navClass}>
					Home
				</NavLink>
				<NavLink to="/sects" className={navClass}>
					Sects
				</NavLink>
				<NavLink to="/clans" className={navClass}>
					Clans
				</NavLink>
				<NavLink to="/disciplines" className={navClass}>
					Disciplines
				</NavLink>
			</nav>
		</header>
	);
}
