import {
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
        maxWidth="180"
        height="180"
        image={product.imageLink}
        alt={product.alt}
      />

      <CardContent>
        <Typography>{product.description}</Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Grid container justifyContent="space-between">
          <IconButton
            color="primary"
            sx={{ background: "#eee", borderRadius: 1, fontSize: 20 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ background: "#eee", borderRadius: 1, fontSize: 20 }}
            color="primary"
          >
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
