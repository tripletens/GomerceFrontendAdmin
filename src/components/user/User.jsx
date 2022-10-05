import React from "react"
import Post from "./Post";
import store from "../../my_db"
import { Grid } from "@mui/material";


const User = () => {
  return (
    <>
      <Grid
        sx={{
          flexGrow: 1,
          gap: 2,
          justifyContent: "center",
          alignItems: "center"
        }}
        container
        spacing={2}
      >
        {store.map((user) => {
          return <Post key={user.id} {...user} />
        })}
      </Grid>
    </>

  )
}

export default User