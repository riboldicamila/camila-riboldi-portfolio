import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./MyWork.css";

function MyWorkCard({
  image,
  projectName,
  technologies,
  purpose,
  deployment,
  findMore,
}) {
  return (
    <Card className="project-card">
      <CardActionArea className="card-action-area" style={{ display: "flex" }}>
        <CardMedia
          component="img"
          className="project-card-image"
          image={image}
          alt="project image"
        />
        <CardContent>
          <div className="project-card-details">
            <div className="project-card-field">
              <strong>Project Name:</strong>
              <div>{projectName}</div>
            </div>
            <div className="project-card-field">
              <strong>Technologies Used:</strong>
              <div>{technologies}</div>
            </div>
            {purpose ? (
              <div className="project-card-field">
                <strong>Purpose/Aim:</strong>
                <div>{purpose}</div>
              </div>
            ) : (
              ""
            )}

            {deployment ? (
              <div className="project-card-field">
                <strong>Deployment:</strong>
                <div>{deployment}</div>
              </div>
            ) : (
              ""
            )}
          </div>
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
