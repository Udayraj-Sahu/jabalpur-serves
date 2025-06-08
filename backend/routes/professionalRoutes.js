// backend/routes/professionalRoutes.js
import express from 'express';
import Professional from '../models/ProfessionalModel.js';
import { mockProfessionals } from '../data/seedData.js';

const router = express.Router();

// @desc   Fetch professionals by category ID
// @route  GET /api/professionals/category/:categoryId
router.get('/category/:categoryId', async (req, res) => {
  try {
    const professionals = await Professional.find({ category: req.params.categoryId });
    res.json(professionals);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @desc   Seed the database with initial professionals
// @route  POST /api/professionals/seed
router.post('/seed', async (req, res) => {
    await Professional.deleteMany({}); // Clear existing data
    const createdProfessionals = await Professional.insertMany(mockProfessionals);
    res.send({ createdProfessionals });
});

export default router;