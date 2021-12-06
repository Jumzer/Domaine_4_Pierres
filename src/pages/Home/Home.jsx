import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import PageContainer from "components/PageContainer";
import home1 from "assets/home1.jpg";
import EventCard from "components/EventCard";
import events from "data/events";

const Home = () => {
  return (
    <PageContainer>
      <CardMedia
        //sx={{ width: "auto" }}
        component="img"
        alt="green iguana"
        image={home1}
      />
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          DOMAINE DES 4 PIERRES 11600 ARAGON EDOUARD FORTIN
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pour déguster, commander ou pour toute demande d’information,
          contactez nous
        </Typography>
      </Box>
      {events.map((event) => {
        return (
          <EventCard
            title={event.title}
            image={event.image}
            description={event.description}
            location={event.location}
            date={event.date}
          />
        );
      })}
    </PageContainer>
  );
};
export default Home;
