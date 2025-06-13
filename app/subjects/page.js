"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, Typography } from "@mui/material";
import SubjectCard from "@/components/SubjectCard";
import subjects from "@/models/Subject";
import { toggleSubject } from "@/redux/subjectSlice";

const SubjectSelectionPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selected = useSelector((state) => state.subjects.selected);

  const handleToggle = (subjectName) => {
    dispatch(toggleSubject(subjectName));
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      localStorage.setItem("selectedSubjects", JSON.stringify(selected));
      router.push("/dashboard");
    }
  };

  return (
    <Box sx={{ px: 4, py: 6, maxWidth: "lg", margin: "auto" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Choose Your Interests
      </Typography>

      <Grid container spacing={3}>
        {subjects.map((subject) => (
          <Grid item xs={12} sm={6} md={4} key={subject.id}>
            <SubjectCard
              subject={subject}
              selected={selected.includes(subject.id)}
              onSelect={() => handleToggle(subject.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={6}>
        <Button
          variant="contained"
          color="primary"
          disabled={selected.length === 0}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default SubjectSelectionPage;
