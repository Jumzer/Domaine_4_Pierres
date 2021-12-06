import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("Domaine");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{ justifyContent: "center" }}
    >
      <ToggleButton value="Domaine">Domaine</ToggleButton>
      <ToggleButton value="Achat Raisin">Achat Raisin</ToggleButton>
    </ToggleButtonGroup>
  );
}
