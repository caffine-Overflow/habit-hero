import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const SubjectCard = ({ subject, selected, onSelect }) => {
  const fallbackImage = "/images/placeholder.jpg";

  return (
    <Card
      sx={{
        width: 200,
        height: 200,
        border: selected ? "3px solid #1976d2" : "2px solid #ccc",
        borderRadius: 2,
        overflow: "hidden",
        transition: "border 0.3s",
      }}
    >
      <CardActionArea onClick={onSelect} sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          image={subject.image || fallbackImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          alt={subject.name}
          sx={{
            height: 140,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            padding: 1,
            textAlign: "center",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" fontWeight="medium" noWrap>
            {subject.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SubjectCard;
