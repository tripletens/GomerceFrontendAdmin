import React from "react"
import {
  Stack, CardMedia, Typography, Card,
  CardHeader, Avatar, IconButton, CardContent
} from "@mui/material";
import { cyan } from "@mui/material/colors";
import { AllInclusive } from "@mui/icons-material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";


const Text = styled(Typography)({
  backgroundColor: "#eee",
  padding: "3px 10px 0px 10px",
  borderRadius: "10px",
  fontSize: "14px",
  margin: "10px auto",
  marginTop: "20px"
})

const Text2 = styled(Typography)({
  fontWeight: "bold",
  fontSize: "15px",
  margin: "0 auto",
  marginLeft: "30px",
  color: "#757575"
})

const Text3 = styled(Typography)({
  color: "#757575",
  fontSize: "14px",
  margin: "0 auto",
})

const Post = ({
  image,
  first_name,
  last_name,
  mobile,
  email,
  items,
  sold,
  payout
}) => {
  return (
    <Card sx={{
      width: 270,
      borderRadius: "10px",
    }}
      elevation={2}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: cyan[300] }} aria-label="recipe">
            {first_name[0]}{last_name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <AllInclusive />
          </IconButton>
        } />
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        margin: "auto 0",

      }}>
        <Box sx={{
          bgcolor: "#fafafa",
          width: "60%",
          height: 140,
          borderRadius: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto 0",

        }}>
          <CardMedia
            component="img"
            image={image}
            alt={first_name}
            sx={{ width: "90%", height: "90%" }}
          />
        </Box>
      </Box>
      <CardContent>
        <Stack
          direction="column"
          alignItems="center"
        >
          <Typography
            variant="h6"
          >
            {first_name} {last_name}
          </Typography>
          <Text3>
            {mobile}
          </Text3>
          <Text3>
            {email}
          </Text3>
        </Stack>
        <Stack
          direction="row" justifyContent="space-between"
        >
          <Text>items</Text>
          <Text>Sold</Text>
          <Text>Payout</Text>
        </Stack>
        <Stack
          direction="row" justifyContent="space-between"
        >
          <Text2>{items}</Text2>
          <Text2>{sold}</Text2>
          <Text2>{payout}</Text2>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Post