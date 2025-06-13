"use client";

import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function IntroPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/assessment");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/intro-pg1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          mb: 2,
        }}
      >
        What is behavioral Science?
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: 600,
          mb: 4,
          textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
        }}
      >
        Behavioral Science seeks to understand why people behave the way they do
        . It also provides solutions to help people follow through on their good
        intentions .
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: 600,
          mb: 4,
          textShadow: "1px 1px 3px rgba(16, 16, 16, 0.6)",
        }}
      >
        Welcome to Habit-hero , where you will learn to use behavioral science,
        to transform your life .
      </Typography>

      <Button
        onClick={handleStart}
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: "#ffffffdd",
          color: "#000",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "999px",
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        Let’s Get Started
      </Button>
    </Box>
  );
}
