import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const SkeletonCard: React.FC = () => {
  return (
    <Grid item lg={3} xl={3} md={3} sm={6} xs={12} sx={{ height: 250 }}>
      <Stack spacing={2}>
        <Skeleton variant="text" height={70} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton variant="circular" width={60} height={60} />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton variant="rounded" width={"80%"} height={10} />
        </Grid>
      </Stack>
    </Grid>
  );
};

export default SkeletonCard;