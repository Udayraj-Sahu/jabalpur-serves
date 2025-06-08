import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useAuth } from "../contexts/AuthContext";
import type { UserInfo } from "../types";
import { API_BASE_URL } from "../config";

const RegisterPage = () => {
	// Use a single state object for the form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		category: "cat-1", // Default category
		profilePictureUrl: "",
		instagramUrl: "",
		bio: "",
	});

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { login } = useAuth();
	const navigate = useNavigate();

	// A single handler for all form inputs
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			// Send the entire formData state object to the backend
			const response = await fetch(`${API_BASE_URL}/api/users/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data: UserInfo | { message: string } = await response.json();

			if (!response.ok) {
				throw new Error(
					(data as { message: string }).message ||
						"Failed to register. Please check your details."
				);
			}

			// If registration is successful, log the user in and redirect
			login(data as UserInfo);
			navigate("/");
		} catch (err: any) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form-card">
				<h2>Register as a Professional</h2>
				<p className="form-subheading">
					Create your profile to showcase your work.
				</p>

				{error && <p className="form-error">{error}</p>}

				<div className="form-group">
					<label htmlFor="name">Your Name / Brand Name</label>
					<input
						id="name"
						name="name"
						type="text"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="e.g., Anjali Clicks"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						id="email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						required
						placeholder="you@example.com"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						value={formData.password}
						onChange={handleChange}
						required
						placeholder="Must be at least 6 characters"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="phone">Contact Number</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						value={formData.phone}
						onChange={handleChange}
						required
						placeholder="+91..."
					/>
				</div>

				<div className="form-group">
					<label htmlFor="category">Your Service</label>
					<select
						id="category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						required>
						<option value="cat-1">Photographer</option>
						<option value="cat-2">Event Designer</option>
						<option value="cat-3">Electrician</option>
						<option value="cat-4">Plumber</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="profilePictureUrl">
						Profile Picture URL
					</label>
					<input
						id="profilePictureUrl"
						name="profilePictureUrl"
						type="text"
						value={formData.profilePictureUrl}
						onChange={handleChange}
						required
						placeholder="https://..."
					/>
				</div>

				<div className="form-group">
					<label htmlFor="instagramUrl">
						Instagram Profile Link (Optional)
					</label>
					<input
						id="instagramUrl"
						name="instagramUrl"
						type="text"
						value={formData.instagramUrl}
						onChange={handleChange}
						placeholder="https://instagram.com/yourprofile"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="bio">Short Bio (Optional)</label>
					<textarea
						id="bio"
						name="bio"
						value={formData.bio}
						onChange={handleChange}
						rows={3}
						placeholder="Tell us a little about your work..."></textarea>
				</div>

				<button
					type="submit"
					className="form-button"
					disabled={isLoading}>
					{isLoading ? "Creating Profile..." : "Create My Profile"}
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
