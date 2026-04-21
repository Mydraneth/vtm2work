// main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import ClanDetailPage from "./pages/ClansDetailsPage.jsx";
import ClansPage from "./pages/ClansPage.jsx";
import DisciplinesDetailPage from "./pages/DisciplinesDetails.jsx";
import DisciplinesPage from "./pages/DisciplinesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SectDetailPage from "./pages/SectsDetails.jsx";
import SectsPage from "./pages/SectsPage.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route element={<App />}>
				<Route path="/" element={<HomePage />} />
				<Route path="sects">
					<Route index element={<SectsPage />} />
					<Route path=":sect" element={<SectDetailPage />} />
				</Route>
				<Route path="clans">
					<Route index element={<ClansPage />} />
					<Route path=":clan" element={<ClanDetailPage />} />
				</Route>
				<Route path="disciplines">
					<Route index element={<DisciplinesPage />} />
					<Route
						path=":discipline"
						element={<DisciplinesDetailPage />}
					/>
				</Route>
			</Route>
		</Routes>
	</BrowserRouter>,
);
