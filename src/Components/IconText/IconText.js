import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const IconWithText = ({ text }) => {
  return (
    <Box display="flex" alignItems="center">
      <ArrowForwardIosIcon />
      <Typography variant="body1" marginLeft={1} sx={{
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateX(10px)',
          },
        }}>
        {text}
      </Typography>
    </Box>
  );
};

export default IconWithText;
