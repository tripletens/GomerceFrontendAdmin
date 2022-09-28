
import { Orders } from "./pages/orders";

const App = () => {
  return <Orders />;
};


import Dynamics from "./components/vendor/Dynamics";


function App() {
    return (
      <>
        <Dynamics />
      </>
  );
}

export default App;


 /*
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";

import Dynamics from "./components/vendor/Dynamics";

function App() {
  
 
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <Box bgcolor={"background.default"} color={"text.primary"}>
    //     <Navbar />
    //     <Grid  container spacing={2} >
    //         <Sidebar setMode={setMode} mode={mode}/>
    //         <Box flex={4} p={4} bgcolor='#fafafa' minHeight='100vh' >
    //             <Header justifyContent="center"/>
    //             <Vendors />
    //         </Box>
    //     </Grid>
    //   </Box>
    // </ThemeProvider>
    <>
      <Dynamics />
    </>
  );
}

export default App;
*/
