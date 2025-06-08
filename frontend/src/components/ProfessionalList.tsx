// src/components/ProfessionalList.tsx
import React from "react";
import type { Professional } from "../types";
import ProfessionalCard from "./ProfessionalCard";
import "./ProfessionalList.css"; // We'll create this file

interface ProfessionalListProps {
	professionals: Professional[];
}

const ProfessionalList: React.FC<ProfessionalListProps> = ({
	professionals,
}) => {
	return (
		<div className="professional-list-container">
			<h2>Available Professionals</h2>
			{professionals.length > 0 ? (
				<div className="professional-list">
					{professionals.map((pro) => (
						<ProfessionalCard key={pro.id} professional={pro} />
					))}
				</div>
			) : (
				<p>No professionals found for this category yet.</p>
			)}
		</div>
	);
};

export default ProfessionalList;
