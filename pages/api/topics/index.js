// pages/api/topics/index.js
import dbConnect from "@/lib/mongodb";
import Topic from "@/models/Topic";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const topics = await Topic.find({});
    return res.status(200).json(topics);
  }

  if (req.method === "POST") {
    const { topicId, userId, done } = req.body;

    const update = done
      ? { $addToSet: { completedBy: userId } }
      : { $pull: { completedBy: userId } };

    await Topic.updateOne({ id: topicId }, update);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
