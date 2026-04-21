import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import logo from "../assets/logo.png";
import { clans } from "../data/clans";
import { disciplines } from "../data/disciplines";
import { sects } from "../data/sects";

export default function Header() {
	const navClass = ({ isActive }) =>
		`px-3 py-2 rounded-md transition-colors ${
			isActive
				? "bg-red-900 text-white font-bold"
				: "text-gray-300 hover:bg-gray-700 hover:text-white"
		}`;

	return (
		<header className="bg-zinc-900 p-3 shadow-lg relative z-50">
			<nav className="max-w-6xl  flex items-center gap-4">
				<NavLink to="/" className="max-w-10 mr-7 ml-5">
					<img src={logo} alt="logo" />
				</NavLink>
				<NavLink to="/" end className={navClass}>
					Home
				</NavLink>
				<NavDropdown title="Sects" to="/sects" navClass={navClass}>
					{sects.map((sect) => {
						return (
							<NavLink
								key={sect.id}
								to={`/sects/${sect.name.toLowerCase()}`}
								className="block px-4 py-2 hover:bg-red-900/40"
							>
								{sect.name}
							</NavLink>
						);
					})}
				</NavDropdown>
				<NavDropdown title="Clans" to="/clans" navClass={navClass}>
					{clans.map((clan) => {
						return (
							<NavLink
								key={clan.id}
								to={`/clans/${clan.name.toLowerCase()}`}
								className="block px-4 py-2 hover:bg-red-900/40"
							>
								{clan.name}
							</NavLink>
						);
					})}
				</NavDropdown>
				<NavDropdown
					title="Disciplines"
					to="/disciplines"
					navClass={navClass}
				>
					{disciplines.map((discipline) => {
						return (
							<NavLink
								key={discipline.id}
								to={`/disciplines/${discipline.name.toLowerCase()}`}
								className="block px-4 py-2 hover:bg-red-900/40"
							>
								{discipline.name}
							</NavLink>
						);
					})}
				</NavDropdown>
			</nav>
		</header>
	);
}

function NavDropdown({ title, to, children, navClass }) {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	// Logic to keep parent highlighted if any child route is active
	const isParentActive = location.pathname.startsWith(to);

	return (
		<div
			className="relative"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{/* NavLink replaces the button to make the title clickable */}
			<NavLink
				to={to}
				className={() =>
					navClass({ isActive: isParentActive }) +
					" flex items-center gap-1"
				}
				onClick={() => setIsOpen(false)} // Close menu when clicking the parent link
			>
				{title}
				<svg
					className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</NavLink>

			{isOpen && (
				<div
					className="absolute left-0 mt-0 w-48 bg-zinc-800 border border-zinc-700/50 rounded-b-md shadow-xl py-2 flex flex-col text-gray-300"
					onClick={() => setIsOpen(false)} // Close menu when a sub-link is clicked
				>
					{children}
				</div>
			)}
		</div>
	);
}
