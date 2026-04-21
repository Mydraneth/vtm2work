import { useParams } from "react-router";

export default function SectDetailPage() {
	const { sect } = useParams();

	return (
		<div className="p-4">
			<h1>{sect.charAt(0).toUpperCase() + sect.slice(1)} Detayları</h1>
			<p className="text-gray-400">
				Bu sayfa, {sect} seçildiğinde görülen yer.
			</p>
		</div>
	);
}
