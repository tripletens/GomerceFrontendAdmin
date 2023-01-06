import { ChevronRight } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import React from "react";

function PageHeader(props) {
  return (
    <Grid container justifyContent="space-between">
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#757575" }}>
        {props.title}
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography href="#" textDecoration="none">
          Home
        </Typography>
        <ChevronRight />
        <Typography> {props.page}</Typography>
      </Stack>
    </Grid>
  );
}

export default PageHeader;
