// components/ContractPreview.js
import { Paper, Typography } from "@mui/material";

export default function ContractPreview({ contractText }) {
  return (
    <Paper elevation={3} sx={{ padding: 4, whiteSpace: "pre-wrap", mt: 4 }}>
      <Typography variant="body1">{contractText}</Typography>
    </Paper>
  );
}
