import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import categoryRoutes from "./routes/categoryRoutes.js";
import professionalRoutes from "./routes/professionalRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// THE FIX: Updated and more robust CORS Configuration
const allowedOrigins = [
	"http://localhost:5173", // For local development
	"https://jabalpur-serves.vercel.app", // Your live frontend URL from the error message
];

const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
		if (allowedOrigins.indexOf(origin) === -1) {
			const msg =
				"The CORS policy for this site does not allow access from the specified Origin.";
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected successfully."))
	.catch((err) => console.error("MongoDB connection failed:", err));

// API Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/professionals", professionalRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
