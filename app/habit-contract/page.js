"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Typography, Button, Container } from "@mui/material";
import ContractPreview from "@/components/ContractPreview";
import contractGenerator from "@/utils/contractGenerator";

export default function HabitContractPage() {
  const answers = useSelector((state) => state.onboarding.answers);
  const nameFromStore = useSelector((state) => state.onboarding.name);
  const name = nameFromStore || "User"; // fallback to "User" if name is empty
  const contractText = contractGenerator(answers, name);
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {name}'s Contract
      </Typography>

      <ContractPreview contractText={contractText} />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 4 }}
        onClick={() => router.push("/subjects")}
      >
        Continue
      </Button>
    </Container>
  );
}
