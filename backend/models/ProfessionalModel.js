import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const portfolioItemSchema = new mongoose.Schema({
	imageUrl: { type: String, required: true },
});

const professionalSchema = mongoose.Schema(
	{
		// The manual 'id' field has been removed. MongoDB's _id will be the unique identifier.
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		phone: { type: String, required: true },
		category: { type: String, required: true },
		profilePictureUrl: { type: String, required: true },
		instagramUrl: { type: String },
		bio: { type: String },
		portfolio: [portfolioItemSchema],
	},
	{
		timestamps: true,
	}
);

// Hash password before saving
professionalSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare passwords
professionalSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// This transform correctly converts the database _id to a user-friendly id in JSON responses
professionalSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.password;
	},
});

const Professional = mongoose.model("Professional", professionalSchema);
export default Professional;
