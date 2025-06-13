"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "@/redux/onboardingSlice";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  Paper,
} from "@mui/material";

const questions = [
  {
    id: 1,
    question: "Do you have ADHD or suspect you might have it?",
    options: [
      "I have been diagnosed",
      "I think I might have it",
      "No, I don’t",
      "Prefer not to say",
    ],
  },
  {
    id: 2,
    question: "How many hours do you usually sleep at night?",
    options: ["7 or fewer", "7-9 hours", "9-12 hours", "12 or more"],
  },
  {
    id: 3,
    question: "Do you wake up feeling well-rested?",
    options: ["Always", "Usually", "Sometimes", "Rarely"],
  },
  {
    id: 4,
    question: "How much time do you usually have to start your day?",
    options: ["0–10 minutes", "10–20 minutes", "20–30 minutes", "30+ minutes"],
  },
  {
    id: 5,
    question: "Throughout your day, how are your energy levels?",
    options: [
      "High – I feel energized all day",
      "Medium – I have bursts of energy",
      "Low – My energy fades throughout the day",
      "Very low – I feel drained most of the time",
    ],
  },
  {
    id: 6,
    question: "How satisfied are you with your current fitness level?",
    options: [
      "Completely – I feel fit and healthy",
      "Somewhat – I’d like to see some improvement",
      "Not at all – I’d like to make a major change",
      "Unsure",
    ],
  },
  {
    id: 7,
    question: "Which habit troubles you the most?",
    options: [
      "Social media",
      "Negative self-talk",
      "Disorganization",
      "Procrastination",
    ],
  },
  {
    id: 8,
    question: "What single change would most improve your life right now?",
    options: ["More energy", "More strength", "More focus", "More calm"],
  },
  {
    id: 9,
    question: "Why are you embarking on this journey to build healthy habits?",
    options: [
      "To feel better",
      "To improve my health",
      "To set and achieve goals",
      "To be more like someone I admire",
    ],
  },
  {
    id: 10,
    question: "How often do you feel motivated?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    id: 11,
    question: "Do you set clear goals?",
    options: ["No", "Not sure", "Sometimes", "Yes"],
  },
];

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.onboarding.answers);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  const handleAnswer = (questionId, optionIndex) => {
    dispatch(setAnswer({ questionId, answer: optionIndex }));
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      router.push("/assessment-result");
    }
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const currentQuestion = questions[current];
  const selectedAnswer = answers[currentQuestion.id];

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Your answers help us better understand your needs.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Question {current + 1} of {questions.length}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question}
          </Typography>

          <RadioGroup
            value={selectedAnswer !== undefined ? String(selectedAnswer) : null}
            onChange={(e) =>
              handleAnswer(currentQuestion.id, Number(e.target.value))
            }
          >
            {currentQuestion.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={String(index)}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="outlined" onClick={prev}>
            Previous
          </Button>
          <Button
            variant="contained"
            color={current === questions.length - 1 ? "success" : "primary"}
            onClick={next}
          >
            {current === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
