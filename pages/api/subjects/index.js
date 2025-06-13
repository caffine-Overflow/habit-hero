// pages/api/subjects/index.js

import subjects from "@/models/Subject";

export default function handler(req, res) {
  res.status(200).json(subjects);
}
