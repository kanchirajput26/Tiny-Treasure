import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const buttonStyle = {
  borderRadius: "14px",
  margin: "0 10px",
};

const containerStyle = {
  padding: "20px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const outerContainerStyle = {
  paddingBottom: "20px", // Add bottom padding
};

export default function ShoppingButtons() {
  return (
    <Box textAlign="center" style={outerContainerStyle}>
      <Box style={containerStyle}>
        <Typography variant="body1" gutterBottom>
          Who are you shopping for?
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" style={{ ...buttonStyle, color: "#000000", borderColor: "#D1F1FD" }} sx={{ textTransform: 'none', backgroundColor: 'rgba(209, 241, 253, 0.3)' }}>
            Boy
          </Button>
          <Button variant="outlined" style={{ ...buttonStyle, color: "#000000", borderColor: "#F8BACF" }} sx={{ textTransform: 'none', backgroundColor: 'rgba(248,186,207,0.2)'}}>
            Girl
          </Button>
          <Button variant="outlined" style={{ ...buttonStyle, color: "#000000", borderColor: "#E9C7FF" }} sx={{ textTransform: 'none', backgroundColor: 'rgba(233,199,255,0.2)'}}>
            Expecting
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
