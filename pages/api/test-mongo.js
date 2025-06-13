import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();

  const users = await User.find({});
  res.status(200).json({ success: true, count: users.length });
}
