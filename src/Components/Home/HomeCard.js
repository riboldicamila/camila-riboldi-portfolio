import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./HomeCard.css";

function HomeCard({ image, title, text, className }) {
  const classNameDefine = `home-card${className ? ` ${className}` : ""}`;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={classNameDefine}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
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

export default HomeCard;
