import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        maxWidth="150"
        height="236"
        image={product.imageLink}
      />

      <CardContent>
        <Typography>{product.description}</Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          {/* <Button size="small">Edit</Button> */}
          <IconButton color="primary">
            <EditIcon />
            Edit
          </IconButton>
          <IconButton color="primary">
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
