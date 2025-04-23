import React, { useState } from "react";
import OrganSelect from "./test";
import "./arata.css";

const App3 = () => {
  const [selectedOrgan, setSelectedOrgan] = useState("");

  const organsList = [
    { value: "creier", label: "Creier" },
    { value: "ochiul", label: "Ochiul" },
    { value: "urechea", label: "Urechea" },
    { value: "nasul", label: "Nasul și sinusurile" },
    { value: "laringele", label: "Laringele" },
    { value: "plamanii", label: "Plămânii" },
    { value: "canale_faringiene", label: "Canale faringiene" },
    { value: "cavitate_bucala", label: "Cavitate bucală și faringele" },
    { value: "tiroida", label: "Tiroida" },
    { value: "esofag", label: "Esofag" },
    { value: "stomac_duoden", label: "Stomac și duoden" },
    { value: "ficat_vezica_biliara", label: "Ficat și vezica biliară" },
    { value: "pancreas", label: "Pancreas" },
    { value: "intestine_rect", label: "Intestine și rect" },
    { value: "rinichi_vezica_urinara", label: "Rinichi și vezica urinară" },
    { value: "organe_sexuale_masculine", label: "Organe sexuale masculine" },
    { value: "organe_sexuale_feminine", label: "Organe sexuale feminine" },
    { value: "san_feminin", label: "San feminin" },
    { value: "piele", label: "Piele" },
    { value: "muschi_scheletici", label: "Mușchi scheletici" },
    { value: "tesut_conjunctiv", label: "Țesut conjunctiv" },
    { value: "tesut_adipos", label: "Țesut adipos" },
    { value: "oase_articulatii", label: "Oase și articulații" },
    { value: "periost", label: "Periost (învelisul oaselor)" },
    { value: "dinti_maxilar", label: "Dinți și maxilar" },
    { value: "sistem_limfatic", label: "Sistem limfatic" },
    { value: "vase_sange", label: "Vase de sânge" },
    { value: "inima", label: "Inimă" },
  ];

  const handleOrganChange = (newOrgan) => {
    setSelectedOrgan(newOrgan);
    console.log("Organ selectat:", newOrgan);
  };

  return (
    <div class="form-container">
      <h2>Selectează un organ</h2>
      <OrganSelect
        organs={organsList}
        selectedOrgan={selectedOrgan}
        onOrganChange={handleOrganChange}
      />
    </div>
  );
};

export default App3;
