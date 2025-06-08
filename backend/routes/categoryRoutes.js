// backend/routes/categoryRoutes.js
import express from "express";
import Category from "../models/CategoryModel.js";
import { mockCategories } from "../data/seedData.js";
const router = express.Router();

// @desc   Fetch all categories
// @route  GET /api/categories
router.get("/", async (req, res) => {
	try {
		const categories = await Category.find({});
		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
});

router.post("/seed", async (req, res) => {
	await Category.deleteMany({}); // Clear existing data
	const createdCategories = await Category.insertMany(mockCategories);
	res.send({ createdCategories });
});

export default router;
