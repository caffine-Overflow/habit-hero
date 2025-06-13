// pages/api/progress/index.js
import dbConnect from "@/lib/mongodb";
import Progress from "@/models/Progress";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  if (method === "POST") {
    const { userId, topicId, date, completed } = req.body;
    try {
      const today = new Date(date);
      const progress = await Progress.findOneAndUpdate(
        { userId, topicId, date: today },
        { completed },
        { upsert: true, new: true }
      );
      res.status(200).json(progress);
    } catch (err) {
      res.status(500).json({ error: "Failed to update progress." });
    }
  } else if (method === "GET") {
    const { userId, date } = req.query;
    const filter = { userId };
    if (date) filter.date = new Date(date);
    const progress = await Progress.find(filter);
    res.status(200).json(progress);
  } else {
    res.status(405).end();
  }
}
