import PageContainer from "components/PageContainer";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ColorToggleButton from "components/toggleButton";
import {
  Typography,
  Box,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import EventCard from "components/EventCard";
import ricochets from "assets/ricochets.jpg";

const Wines = () => {
  return (
    <PageContainer>
      <Box>
        <Typography variant="h4" gutterBottom align="center">
          LES CUVÉES
        </Typography>
      </Box>
      <ColorToggleButton />
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 300,
        }}
      >
        <Typography>
          D'abord, il y a le domaine et son terroir, ensuite les cépages et
          enfin l'esprit de l'homme. Le tout forme un organisme vivant en
          perpétuel mouvement où la Vie s'exprime librement. Le domaine est
          situé à Aragon, en Cabardès, au nord-ouest de Carcassonne sur les
          premiers contreforts du massif central, à la croisée des vents du sud
          et de l'atlantique.
        </Typography>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              Les Ricochets
            </Typography>
          </CardContent>
          <CardMedia component="img" alt="green iguana" image={ricochets} />
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button size="small">Précédent</Button>
            <Button size="small">Suivant</Button>
          </CardActions>
        </Card>
        <Typography>
          Deux terroirs le composent : argilo-calcaire sur roche-mère d'anciens
          fonds lacustres appelé « calcaire à alvéoline », et pour la cuvée El
          Pépé, du calcaire dur de Ventenac. Ces deux terroirs se situent à 300
          mètres d'altitude dans un écrin de nature sauvage méditerranéenne. Les
          vignes sont cultivées en agriculture biologique, avec une attention
          particulière concernant le cuivre. Les vendanges manuelles se font en
          caissettes et les raisins sont transformés en cave de façon naturelle.
        </Typography>
      </Box>
    </PageContainer>
  );
};
export default Wines;
