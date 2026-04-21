// src/pages/DisciplinesDetailPage.jsx
import { useParams } from "react-router";

export default function DisciplinesDetailPage() {
	// URL'deki :discipline parametresini alıyoruz
	const { discipline } = useParams();

	return (
		<div className="p-4">
			<h1>{discipline} Detayları</h1>
			<p className="text-gray-400">
				Bu sayfa, {discipline} seçildiğinde render edilen özel
				bileşendir.
			</p>
		</div>
	);
}
