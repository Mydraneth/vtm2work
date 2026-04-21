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
					<Route path="/clans" element={<h1>Clans</h1>} />
					<Route path="/disciplines" element={<h1>Disciplines</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
