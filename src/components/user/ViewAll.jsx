import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import {
  Avatar, Button, ButtonGroup, Modal,
  Stack, styled, TextField, Typography,
} from "@mui/material";
import {
   DateRange, EmojiEmotions, Image,
  PersonAdd, VideoCameraBack,
} from "@mui/icons-material";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "white"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  borderRadius: "2em",
  fontSize: 14,
  height: "55px",
  padding: "12px 2rem",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: blue[300],
  borderColor: "",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#039be5",
    borderColor: "#039be5",
  }
});


const ViewAll = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BootstrapButton
        onClick={(e) => setOpen(true)}
        variant="contained"
        startIcon=""
        size="medium">
        View All
      </BootstrapButton>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          // bgcolor={"background.default"}
          bgcolor={"white"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Add Seller
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What do you trade on?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group" >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default ViewAll;
