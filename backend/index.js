// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import categoryRoutes from "./routes/categoryRoutes.js"; // 1. Import mongoose
import professionalRoutes from "./routes/professionalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
	origin: [
		"http://localhost:5173", // For local development
		"https://jabalpur-serves.vercel.app/", // <-- PASTE YOUR VERCEL URL HERE
	],
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.use("/api/professionals", professionalRoutes);
app.use("/api/users", userRoutes);

// 2. Add Mongoose connection logic
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected successfully."))
	.catch((err) => console.error("MongoDB connection failed:", err));

app.get("/api", (req, res) => {
	res.json({ message: "Hello from JabalpurServes Backend! 🚀" });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
