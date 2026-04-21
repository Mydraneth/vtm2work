// src/pages/SectDetailPage.jsx
import { useParams } from "react-router";

export default function SectDetailPage() {
	// URL'deki :sectId parametresini alıyoruz
	const { sect } = useParams();

	return (
		<div className="p-4">
			<h1>{sect} Detayları</h1>
			<p className="text-gray-400">
				Bu sayfa, {sect} seçildiğinde render edilen özel bileşendir.
			</p>
		</div>
	);
}
