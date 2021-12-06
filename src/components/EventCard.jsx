import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";

const EventCard = (props) => {
  const { id, title, date, location, description, image } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt="event" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} - {location}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">Précédent</Button>
        <Button size="small">Suivant</Button>
      </CardActions>
    </Card>
  );
};
export default EventCard;
