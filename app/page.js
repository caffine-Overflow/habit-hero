"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="primary">
            Habit Hero
          </Typography>
          <Box>
            <Button
              component={Link}
              href="/login"
              color="primary"
              sx={{ textTransform: "none", marginRight: 2 }}
            >
              Login
            </Button>
            <Button
              component={Link}
              href="/register"
              color="primary"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
