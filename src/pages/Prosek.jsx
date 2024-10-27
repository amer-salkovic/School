import React, { useState } from "react";
import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import PlaceHolder from "../components/PlaceHolder";

const predmetiPoSmeru = {
 "Službenik u bankarstvu i osiguranju": ["Ekonomija", "Bankarstvo", "Osiguranje","Matematika","Bosanski","Srpski","Kancelarisko"],
  "Komercijalista": ["Marketing", "Menadžment", "Trgovinsko pravo", "Matematika","Bosanski","Srpski","Kancelarisko"],
  "Poslovni administrator": ["Administracija", "Ekonomija", "Menadžment", "Matematika","Bosanski","Srpski","Kancelarisko"],
  "Finansijski administrator": ["Računovodstvo", "Finansije", "Statistika", "Matematika","Bosanski","Srpski","Kancelarisko"],
  "Pravni tehničar": ["Pravo", "Etika", "Kriminologija", "Matematika","Bosanski","Srpski","Kancelarisko"],
};

const Prosek = () => {
  const [selectedSmer, setSelectedSmer] = useState("");
  const [showPredmeti, setShowPredmeti] = useState(false);
  const [ocene, setOcene] = useState({});
  const [prosek, setProsek] = useState(null); // Za prikaz proseka

  const handleButtonClick = () => setShowPredmeti(true);

  const handleOcenaChange = (predmet, value) => {
    setOcene((prev) => ({ ...prev, [predmet]: parseFloat(value) }));
  };

  const izracunajProsek = () => {
    const sveOcene = Object.values(ocene).filter((ocena) => !isNaN(ocena));
    const suma = sveOcene.reduce((acc, ocena) => acc + ocena, 0);
    const prosekOcena = sveOcene.length > 0 ? (suma / sveOcene.length).toFixed(2) : 0;
    setProsek(prosekOcena);
  };

  const predmeti = predmetiPoSmeru[selectedSmer] || [];

  return (
    <Box sx={{ p: 3, backgroundColor: "background.default", color: "text.primary" }}>
      <Typography variant="h4" gutterBottom>
        Izaberi Smer:
      </Typography>
      <PlaceHolder setSelectedSmer={setSelectedSmer} />

      {!showPredmeti && selectedSmer && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleButtonClick}
          sx={{ mt: 2 }}
        >
          Prikaži Predmete
        </Button>
      )}

      {showPredmeti && (
        <>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {predmeti.map((predmet) => (
              <Grid item xs={12} sm={6} md={4} key={predmet}>
                <TextField
                  fullWidth
                  label={`Ocena za ${predmet}`}
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1, max: 5 }}
                  onChange={(e) => handleOcenaChange(predmet, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            color="primary"
            onClick={izracunajProsek}
            sx={{ mt: 3 }}
          >
            Izračunaj Prosek
          </Button>

          {prosek !== null && (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Prosek Ocena: {prosek}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Prosek;
