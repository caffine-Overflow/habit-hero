// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // This will be hashed
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite issue in dev
export default mongoose.models.User || mongoose.model("User", UserSchema);
