import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./MyWork.css";

function MyWorkCard({ image, title, text }) {
  return (
    <div className="home-card-container">
      <Card sx={{ width: "100%" }} className="home-card">
        <CardActionArea style={{ display: "flex" }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Find more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MyWorkCard;
