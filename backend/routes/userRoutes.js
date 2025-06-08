import express from "express";
import Professional from "../models/ProfessionalModel.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// @desc    Register a new professional
// @route   POST /api/users/register
router.post("/register", async (req, res) => {
	const {
		name,
		email,
		password,
		phone,
		category,
		profilePictureUrl,
		instagramUrl,
		bio,
	} = req.body;

	const professionalExists = await Professional.findOne({ email });

	if (professionalExists) {
		res.status(400).json({
			message: "A professional with this email already exists",
		});
		return;
	}

	const professional = await Professional.create({
		name,
		email,
		password,
		phone,
		category,
		profilePictureUrl,
		instagramUrl,
		bio,
	});

	if (professional) {
		res.status(201).json({
			_id: professional._id,
			name: professional.name,
			email: professional.email,
			token: generateToken(professional._id),
		});
	} else {
		res.status(400).json({ message: "Invalid professional data" });
	}
});

// NEW: @desc    Auth professional & get token (Login)
//      @route   POST /api/users/login
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const professional = await Professional.findOne({ email });

	if (professional && (await professional.matchPassword(password))) {
		res.json({
			_id: professional._id,
			name: professional.name,
			email: professional.email,
			token: generateToken(professional._id),
		});
	} else {
		res.status(401).json({ message: "Invalid email or password" });
	}
});

export default router;
