import React from "react";
import type { Professional } from "../types";
import "./ProfessionalCard.css";

interface ProfessionalCardProps {
	professional: Professional;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
	professional,
}) => {
	return (
		<div className="professional-card">
			<div className="card-top">
				<img
					src={professional.profilePictureUrl}
					alt={professional.name}
					className="card-profile-pic"
					onError={(e) => {
						e.currentTarget.src =
							"https://placehold.co/60x60/fdf8f0/402a23?text=Img";
					}}
				/>
				<div className="card-header">
					<h3>{professional.brandName || professional.name}</h3>
					{professional.isVerified && (
						<span className="verified-badge">✔ Verified</span>
					)}
				</div>
			</div>

			{/* The visible contact number text */}
			<p className="card-contact-number">📞 {professional.phone}</p>

			{/* The bio, which only shows if it exists */}
			{professional.bio && <p className="card-bio">{professional.bio}</p>}

			<div className="card-actions">
				<a
					href={`tel:${professional.phone}`}
					className="action-button primary">
					Call Now
				</a>

				{professional.instagramUrl && (
					<a
						href={professional.instagramUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="action-button secondary">
						Instagram
					</a>
				)}
			</div>
		</div>
	);
};

export default ProfessionalCard;
