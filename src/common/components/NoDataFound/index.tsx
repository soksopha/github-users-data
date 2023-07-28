import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoDataFoundCard: React.FC = () => {
  return (
    <Card sx={{ p: 2, backgroundColor: "#f0f0f0", boxShadow: "none" }}>
      <CardContent>
        <Grid container spacing={2} textAlign="center" justifyContent="center">
          <Grid item lg={12} justifyContent="center">
            <SentimentVeryDissatisfiedIcon fontSize="large" style={{ color: '#5FAD16' }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h2" gutterBottom style={{ color: '#5FAD16' }}>
              Oops! No Data Found
            </Typography>
            <Typography color="textSecondary">
              Your search did not match any records.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NoDataFoundCard;
