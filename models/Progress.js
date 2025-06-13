// models/Progress.js
import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    topicId: { type: String, required: true },
    date: { type: Date, required: true }, // for daily resets
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

progressSchema.index({ userId: 1, topicId: 1, date: 1 }, { unique: true });

export default mongoose.models.Progress ||
  mongoose.model("Progress", progressSchema);
