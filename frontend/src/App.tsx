import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import ProfessionalDetailPage from "./pages/ProfessionalDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./contexts/AuthContext";

function App() {
	const { userInfo, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<div className="App">
			<header className="App-header">
				<Link
					to="/"
					style={{ textDecoration: "none", color: "inherit" }}>
					<h1>JabalpurServes</h1>
				</Link>
				<p>Your trusted source for local service professionals.</p>

				{/* The navigation is now moved here, directly below the subtitle */}
				<nav className="main-nav">
					{userInfo ? (
						<div className="user-controls">
							<span className="nav-user">
								Hello, {userInfo.name}
							</span>
							<button onClick={handleLogout} className="nav-link">
								Logout
							</button>
						</div>
					) : (
						<div className="visitor-controls">
							<Link to="/login" className="nav-link secondary">
								Log In
							</Link>
							<Link to="/register" className="nav-link primary">
								Register as Professional
							</Link>
						</div>
					)}
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route
						path="/category/:categoryId"
						element={<ProfessionalsPage />}
					/>
					<Route
						path="/professional/:professionalId"
						element={<ProfessionalDetailPage />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
