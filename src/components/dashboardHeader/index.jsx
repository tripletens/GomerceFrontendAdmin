import { ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function DashboardHeader(props) {
  return (
    <>
      <Stack direction="column">
        <Typography variant="h5" sx={{fontWeight: 'bold', color:'#757575'}}>{props.title}</Typography>
        <Stack direction="row" alignItems="center">
          <Typography href="#" textDecoration="none">
            Home
          </Typography>
          <ChevronRight />
          <Typography> {props.page}</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default DashboardHeader;
