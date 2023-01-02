import { ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function DashboardHeader(props) {
  return (
    <>
      <Stack direction="column">
           <ThemeProvider theme={theme}>
              <Typography variant="h5" fontWeight={"700"} sx={{fontWeight: 'bold', color:'#757575'}}>
                  {props.title}
              </Typography>
           </ThemeProvider>
        <Stack direction="row" alignItems="center">
            <ThemeProvider theme={theme}>
                <Typography variant='p' href="#" textDecoration="none">
                  Home
                </Typography>
            </ThemeProvider>
            <ChevronRight />
            <ThemeProvider variant='p' theme={theme}>
                <Typography > {props.page}</Typography>
            </ThemeProvider>
          </Stack>
      </Stack>
    </>
  );
}

export default DashboardHeader;
