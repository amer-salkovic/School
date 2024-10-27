import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardActions, Button, Collapse } from "@mui/material";

const smeroviInfo = {
  "Službenik u bankarstvu i osiguranju": 
    "Obrazovni profil koji obučava učenike za rad u finansijskom sektoru, sa fokusom na bankarstvo, osiguranje i ekonomiju.",
  "Komercijalista": 
    "Smer posvećen učenju o trgovini, marketingu i poslovnom menadžmentu, pripremajući učenike za komercijalne poslove.",
  "Poslovni administrator": 
    "Priprema učenike za administrativne poslove i poslovno upravljanje u preduzećima različitih sektora.",
  "Finansijski administrator": 
    "Fokusiran na računovodstvo i finansije, pružajući osnovne veštine za rad u finansijskim institucijama.",
  "Pravni tehničar": 
    "Obrazovni profil koji priprema učenike za rad u pravnom sektoru kroz studije prava, etike i kriminologije."
};

const Smerovi = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (smer) => {
    setExpanded((prev) => ({ ...prev, [smer]: !prev[smer] }));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "background.default", color: "text.primary" }}>
      <Typography variant="h3" gutterBottom>
        Naši Smerovi
      </Typography>

      {Object.entries(smeroviInfo).map(([smer, opis]) => (
        <Card key={smer} sx={{ mb: 3, backgroundColor: "background.paper" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {smer}
            </Typography>
            <Collapse in={expanded[smer]} timeout="auto" unmountOnExit>
              <Typography sx={{ mt: 1 }} color="text.secondary">
                {opis}
              </Typography>
            </Collapse>
          </CardContent>
          <CardActions>
            <Button 
              size="small" 
              onClick={() => toggleExpand(smer)}
              color="secondary"
            >
              {expanded[smer] ? "Show" : "Learn More..."}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Smerovi;
