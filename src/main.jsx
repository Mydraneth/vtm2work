import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				{/* App acts as the Layout for all sub-routes */}
				<Route element={<App />}>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/sects" element={<h1>Sects</h1>} />
					<Route
						path="/clans"
						element={<div className="p-8">Clans</div>}
					/>
					<Route
						path="/disciplines"
						element={<div className="p-8">Disciplines</div>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
