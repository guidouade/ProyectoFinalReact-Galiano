import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ img, title, autor, precio, id }) => {
  // const  { titulo, desc, precio } = prop

  return (
    <Card sx={{ width: 345, height: 350, backgroundColor: "white" }}>
    <CardMedia
      sx={{ height: 140 }}
      image={img}
      title={title}
      component="img"
    />
    <CardContent sx={{ height: 150 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign={"center"}>
        {autor}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        ${precio}.-
      </Typography>
    </CardContent>
    <CardActions style={{ display: "flex", justifyContent: "center" }}>
      <Link to={`/item/${id}`}>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
        >
          Ver detalle
        </Button>
      </Link>
    </CardActions>
  </Card>
  );
};