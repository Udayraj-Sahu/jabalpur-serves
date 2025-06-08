import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProfessionalList from "../components/ProfessionalList";
import type { Professional } from "../types";

const ProfessionalsPage = () => {
	// 1. Get the categoryId from the URL (e.g., 'cat-1')
	const { categoryId } = useParams<{ categoryId: string }>();

	// 2. Add state for professionals, loading, and errors
	const [professionals, setProfessionals] = useState<Professional[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	// 3. Use useEffect to fetch data when the categoryId changes
	useEffect(() => {
		const fetchProfessionals = async () => {
			if (!categoryId) return; // Don't fetch if there's no categoryId

			setIsLoading(true);
			setError("");

			try {
				const response = await fetch(
					`http://localhost:5000/api/professionals/category/${categoryId}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch professionals");
				}
				const data: Professional[] = await response.json();
				setProfessionals(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProfessionals();
	}, [categoryId]); // This effect re-runs whenever the categoryId in the URL changes

	// 4. Update rendering logic to handle loading and error states
	return (
		<div>
			<Link to="/" className="back-button">
				← Back to Categories
			</Link>

			{isLoading && <p>Loading professionals...</p>}
			{error && <p className="form-error">{error}</p>}
			{!isLoading && !error && (
				<ProfessionalList professionals={professionals} />
			)}
		</div>
	);
};

export default ProfessionalsPage;
