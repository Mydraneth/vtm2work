// src/pages/ClansDetailPage.jsx
import { useParams } from "react-router";

export default function ClansDetailPage() {
	// URL'deki :clan parametresini alıyoruz
	const { clan } = useParams();

	return (
		<div className="p-4">
			<h1>{clan} Detayları</h1>
			<p className="text-gray-400">
				Bu sayfa, {clan} seçildiğinde render edilen özel bileşendir.
			</p>
		</div>
	);
}
