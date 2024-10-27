import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',           // Visina 100% prozora
        display: 'flex',            // Aktiviramo Flexbox
        flexDirection: 'column',    // Poravnanje u koloni
        justifyContent: 'center',   // Vertikalno centriranje
        alignItems: 'center',       // Horizontalno centriranje
        textAlign: 'center',        // Centrirani tekst
        backgroundColor: 'background.default', // Pozadinska boja iz teme
        color: 'text.primary',      // Boja teksta iz teme
      }}
    >
      <Typography variant="h3" gutterBottom>
        Dobro došli na sajt
      </Typography>
      <Typography variant="h1">
        Ekonomsko-trgovinske škole
      </Typography>
    </Box>
  );
};

export default Home;
