import { useState } from "react";
import { Checkbox, FormControlLabel, TextField, Box } from "@mui/material";

export default function TopicItem({ task, onSelect, isCustom }) {
  const [customText, setCustomText] = useState("");

  if (isCustom) {
    return (
      <Box mb={2}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => onSelect(customText)}
              disabled={!customText.trim()}
            />
          }
          label={
            <TextField
              variant="outlined"
              size="small"
              placeholder="Write your own task..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              fullWidth
            />
          }
        />
      </Box>
    );
  }

  return (
    <Box mb={2}>
      <FormControlLabel
        control={<Checkbox onChange={() => onSelect(task._id)} />}
        label={task.text}
      />
    </Box>
  );
}
