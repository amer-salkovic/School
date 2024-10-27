import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const smerovi = [
  "Službenik u bankarstvu i osiguranju",
  "Komercijalista",
  "Poslovni administrator",
  "Finansijski administrator",
  "Pravni tehničar",
];

export default function PlaceHolder({ setSelectedSmer }) {
  const theme = useTheme();
  const [selectedSmerovi, setSelectedSmerovi] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedSmerovi(value);
    setSelectedSmer(value); // Obaveštava `Prosek` o izabranom smeru
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <Select
        displayEmpty
        value={selectedSmerovi}
        onChange={handleChange}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Izaberite smer" }}
      >
        <MenuItem disabled value="">
          <em>Izaberite smer</em>
        </MenuItem>
        {smerovi.map((smer) => (
          <MenuItem key={smer} value={smer}>
            {smer}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
