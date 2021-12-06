import PageContainer from "components/PageContainer";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Partners = () => {
  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom align="center">
        PARTENAIRES
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Caviste
          </Typography>
          <Typography variant="h5" component="div">
            La Cave Spirituelle
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            31 rue de la Concorde 31000 Toulouse
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Découvrir</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Caviste
          </Typography>
          <Typography variant="h5" component="div">
            La Cave Spirituelle
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            31 rue de la Concorde 31000 Toulouse
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Découvrir</Button>
        </CardActions>
      </Card>
    </PageContainer>
  );
};
export default Partners;
