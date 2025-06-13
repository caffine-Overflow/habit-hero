"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [completed, setCompleted] = useState({});
  const userId = "demo-user"; // Replace with real user ID from auth

  const getTodayISO = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchTopics = async () => {
      const res = await fetch("/api/topics");
      const data = await res.json();
      setTopics(data);
    };

    const fetchProgress = async () => {
      const today = getTodayISO();
      const res = await fetch(`/api/progress?userId=${userId}&date=${today}`);
      const data = await res.json();

      const progressMap = {};
      data.forEach((entry) => {
        progressMap[entry.topicId] = entry.completed;
      });
      setCompleted(progressMap);
    };

    const storedSubjects = localStorage.getItem("selectedSubjects");
    if (storedSubjects) {
      setSelectedSubjects(JSON.parse(storedSubjects));
    }

    fetchTopics();
    fetchProgress();
  }, []);

  const handleCheck = async (topicId) => {
    const updated = !completed[topicId];
    const today = getTodayISO();

    setCompleted({ ...completed, [topicId]: updated });

    await fetch("/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        topicId,
        date: today,
        completed: updated,
      }),
    });
  };

  const filteredTopics = topics.filter((topic) =>
    selectedSubjects.includes(topic.subjectId)
  );

  const grouped = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.subjectId]) acc[topic.subjectId] = [];
    acc[topic.subjectId].push(topic);
    return acc;
  }, {});

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Your Daily Topics
      </Typography>

      {Object.entries(grouped).map(([subjectId, subjectTopics]) => {
        const doneCount = subjectTopics.filter((t) => completed[t.id]).length;
        const total = subjectTopics.length;
        const progress =
          total === 0 ? 0 : Math.round((doneCount / total) * 100);

        return (
          <Box key={subjectId} mb={5}>
            <Typography variant="h6" gutterBottom>
              {subjectId.replace(/-/g, " ").toUpperCase()}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mb: 2, height: 10, borderRadius: 5 }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              {doneCount}/{total} tasks done
            </Typography>

            <Grid container spacing={2}>
              {subjectTopics.map((topic) => (
                <Grid item xs={12} sm={6} md={4} key={topic.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          checked={!!completed[topic.id]}
                          onChange={() => handleCheck(topic.id)}
                        />
                        <Typography>{topic.text}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default Dashboard;
