import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea, CardActions } from "@mui/material";

import "./HomeCard.css";

function HomeCard({ image, title, text, className }) {
  const classNameDefine = `home-card-about-me${
    className ? ` ${className}` : ""
  }`;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={classNameDefine}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              style={{ textAlign: "center", fontSize: 16 }}
              variant="h6"
              component="div"
            >
              {title}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt="green iguana"
              sx={{ marginTop: "15px", marginBottom: "20px" }}
            />
            <Typography variant="body2" color="text.secondary">
              {Array.isArray(text) ? (
                <ul className="no-bullets">
                  {text.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                text
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  );
}

export default HomeCard;
