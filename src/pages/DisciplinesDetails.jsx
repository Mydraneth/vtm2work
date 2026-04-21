import { useParams } from "react-router";

export default function DisciplinesDetailPage() {
	const { discipline } = useParams();

	return (
		<div className="p-4">
			<h1>
				{discipline.charAt(0).toUpperCase() + discipline.slice(1)}{" "}
				Detayları
			</h1>
			<p className="text-gray-400">
				Bu sayfa, {discipline} seçildiğinde görülen yer.
			</p>
		</div>
	);
}
