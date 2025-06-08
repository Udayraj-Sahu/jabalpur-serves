import { useParams } from "react-router-dom";
import { mockProfessionals } from "../data/mockData";
import "./ProfessionalDetailPage.css";

const ProfessionalDetailPage = () => {
	const { professionalId } = useParams<{ professionalId: string }>();
	const professional = mockProfessionals.find((p) => p.id === professionalId);

	if (!professional) {
		return <div>Professional not found.</div>;
	}

	return (
		<div className="detail-page-container">
			<header className="profile-header">
				<img
					src={professional.profilePictureUrl}
					alt={professional.name}
					className="profile-picture"
				/>
				<div className="profile-info">
					<h2 className="profile-name">
						{professional.brandName || professional.name}
					</h2>
					<p className="profile-contact">📞 {professional.phone}</p>
					<p className="profile-bio">{professional.bio}</p>
				</div>
			</header>
			<nav className="portfolio-nav">
				<button className="nav-item active">Portfolio</button>

				{/* This section adds the Instagram button, and only if a link exists. */}
				{professional.instagramUrl && (
					<a
						href={professional.instagramUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="nav-item">
						Instagram
					</a>
				)}
			</nav>

			<main className="portfolio-grid">
				{professional.portfolio && professional.portfolio.length > 0 ? (
					professional.portfolio.map((item) => (
						<div key={item.id} className="portfolio-item">
							<img
								src={item.imageUrl}
								alt={item.title || "Portfolio work"}
							/>
						</div>
					))
				) : (
					<p className="no-portfolio">
						No portfolio items to display.
					</p>
				)}
			</main>
		</div>
	);
};

export default ProfessionalDetailPage;
