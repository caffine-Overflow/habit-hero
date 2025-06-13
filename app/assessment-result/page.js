"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";

// Score mapping (based on your previous mapping)
const questionCategoryMap = {
  1: "Mental Wellness",
  2: "Mental Wellness",
  3: "Mental Wellness",
  4: "Productivity",
  5: "Mental Wellness",
  6: "Fitness",
  7: "Mental Wellness",
  8: "Productivity",
  9: "Support System",
  10: "Mental Wellness",
  11: "Productivity",
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const getInsight = (score) => {
  if (score <= 2) return "Could be better";
  if (score <= 3.2) return "On track";
  return "Doing great";
};

export default function AssessmentResultPage() {
  const answers = useSelector((state) => state.onboarding.answers);
  const router = useRouter();

  const categoryScores = {
    "Mental Wellness": [],
    Productivity: [],
    Fitness: [],
    "Support System": [],
  };

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const id = parseInt(questionId, 10);
    const score = optionIndex + 1;
    const category = questionCategoryMap[id];
    if (category) categoryScores[category].push(score);
  });

  const averagedScores = Object.entries(categoryScores).map(
    ([category, scores]) => ({
      name: category,
      value:
        scores.length > 0
          ? parseFloat(
              (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
            )
          : 0,
    })
  );

  return (
    <Container maxWidth="sm">
      <Card elevation={3} sx={{ mt: 5, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Your Assessment Summary
        </Typography>

        <Box height={300}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={averagedScores}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {averagedScores.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box mt={4}>
          {averagedScores.map((entry) => (
            <Card key={entry.name} sx={{ mb: 2, background: "#f9f9f9" }}>
              <CardContent>
                <Typography variant="h6">{entry.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Score: {entry.value} – {getInsight(entry.value)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box textAlign="center" mt={3}>
          <Button
            variant="contained"
            onClick={() => router.push("/habit-contract")}
          >
            Continue
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
