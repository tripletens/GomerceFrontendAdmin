import {createTheme } from "@mui/material/styles";
import { createBreakpoints } from '@mui/system';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const BREAKPOINTS = {
    mobile_sm1:   320,
    mobile_sm2:   361,
    mobile_md1:   376,
    mobile_md2:   395,
    mobile_lg1:   415,
    mobile_lg2:   430,
    tablet:       640,
    minipad:      769,
    sampad:       801,
    ajiozpad:     821,
    ipad:         836,
    laptop:       1024,
    desktop:      1200,
    smartTVs:     20036,
};

const breakpointsValues  = createTheme({
    breakpoints: createBreakpoints({
    values: BREAKPOINTS
  })
});

const myTheme = { ...defaultTheme };

export const theme = createTheme(myTheme, breakpointsValues);