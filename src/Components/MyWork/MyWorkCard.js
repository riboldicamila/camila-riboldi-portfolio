import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./MyWork.css";

function MyWorkCard({ image, title, text, findMore }) {
  return (
    <Card style={{ width: "70%" }} className="project-card">
      <CardActionArea style={{ display: "flex" }}>
        <CardMedia
          component="img"
          style={{
            maxWidth: "50%",
            minWidth: "50%",
            objectFit: "cover",
            height: "100%",
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => (window.location.href = findMore)}
            >
              Find more
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyWorkCard;
