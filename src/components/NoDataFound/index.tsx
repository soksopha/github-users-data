import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./style.css"

const NoDataFoundCard: React.FC = () => {
  return (
    <Card sx={{ p: 2 }} className="not-found-container">
      <CardContent>
        <Grid container spacing={2} textAlign="center" justifyContent="center">
          <Grid item lg={12} justifyContent="center">
            <SentimentVeryDissatisfiedIcon fontSize="large" className="icon-styles" />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h2" gutterBottom className="title-styles">
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
