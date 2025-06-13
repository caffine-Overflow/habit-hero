import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  subjectId: { type: String, required: true },
  text: { type: String, required: true },
  completedBy: { type: [String], default: [] },
});

export default mongoose.models.Topic || mongoose.model("Topic", topicSchema);
