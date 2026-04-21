import { Outlet } from "react-router";
import Header from "./components/Header.jsx";

function App() {
	return (
		<div className="min-h-screen bg-zinc-800 text-slate-200">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
