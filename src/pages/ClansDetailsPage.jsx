import { useParams } from "react-router";

export default function ClansDetailPage() {
	const { clan } = useParams();

	return (
		<div className="p-4">
			<h1>{clan.charAt(0).toUpperCase() + clan.slice(1)} Detayları</h1>
			<p className="text-gray-400">
				Bu sayfa, {clan} seçildiğinde görülen yer.
			</p>
		</div>
	);
}
