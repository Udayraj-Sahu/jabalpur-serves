// backend/models/CategoryModel.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);
export default Category;