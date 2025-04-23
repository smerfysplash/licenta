import React, { useState } from "react";
import "./App.css";
import "./arata.css";

const organOptions = [
  "Creier",
  "Ochiul",
  "Urechea",
  "Nasul și sinusurile",
  "Laringele",
  "Plamanii",
  "Canale faringiene",
  "Cavitatea bucală și faringele",
  "Tiroidă",
  "Esofag",
  "Stomac și duoden",
  "Ficat și vezica biliară",
  "Pancreas",
  "Intestine și rect",
  "Rinichi și vezică urinară",
  "Organe sexuale masculine",
  "Organe sexuale feminine",
  "Sân feminine",
  "Piele",
  "Muschi scheletici",
  "Tesut conjunctiv",
  "Tesut adipos",
  "Oase si articulatii",
  "Periost",
  "Dinti si maxilar",
  "Sistem limfatic",
  "Vase de sânge",
  "Inimă",
];

const diagnosticOptions = {
  Creier: [
    "Glanda pituitară (sau hipofiza)",
    "Glanda pineală (sau epifiza)",
    "Talamus",
    "Plex coroid",
    "Teaca de mielină",
    "Meninge",
  ],
  Ochiul: [
    "Glande lacrimale",
    "Canale lacrimale",
    "Glande ale pleoapei",
    "Canale ale glandelor pleoapei",
    "Pielea pleoapei",
    "Mușchii pleoapei",
    "Conjunctivă",
    "Cornee",
    "Cristalin",
    "Coroidă",
    "Corp ciliar",
    "Iris",
    "Mușchii pupilei",
    "Mușchii Ciliary",
    "Mușchii extraoculari",
    "Retină",
    "Corp vitros",
  ],
  Urechea: [
    "Urechea medie",
    "Trompe lui Eustachio",
    "Mușchiul Stapedius",
    "Urechea internă - Cohleea",
    "Urechea internă - Sistem vestibular",
    "Urechea externă",
    "Canal auditiv",
    "Cartilajul urechii",
  ],
  "Nasul și sinusurile": [
    "Mucoasa nazală",
    "Sinusuri paranazale",
    "Nervi olfactivi",
  ],
  Laringele: ["Mucoasa laringiană", "Mușchii laringieni"],
  Plamanii: [
    "Alveole pulmonare",
    "Celule caliciforme",
    "Mucoasa bronșică",
    "Trahee",
    "Mușchii bronșici",
    "Pleură",
    "Diafragm",
  ],
  "Cavitatea bucală și faringele": [
    "Submucoasa cavității bucale și faringelui",
    "Mucoasa superficială a cavității bucale și faringelui",
    "Canale ale glandelor salivare",
    "Mușchii limbii",
  ],
  Tiroidă: ["Glanda tiroidă", "Glandele paratiroide", "Canale tiroidiene"],
  Esofag: [
    "Esofag (treimea inferioară)",
    "Esofag (primele două treimi)",
    "Mușchii esofagieni",
  ],
  "Stomac și duoden": [
    "Stomac (curbura mare)",
    "Duoden",
    "Stomac (curbura mică)",
    "Pilor și Bulb duodenal",
  ],
  "Ficat și vezica biliară": [
    "Parenchim hepatic",
    "Canale biliare / Vezica biliară",
  ],
  Pancreas: ["Glanda pancreatică", "Canale pancreatice", "Celule insulare"],
  "Intestine și rect": [
    "Intestin subțire",
    "Colon",
    "Colon sigmoid",
    "Mușchii intestinali",
    "Peritoneul",
    "Submucoasa rectului",
    "Mucoasa de suprafață a rectului",
    "Canale perianale",
    "Mușchii rectali (partea superioară a rectului)",
    "Mușchii rectali (partea inferioară a rectului) / Sfincterul extern",
    "Sfincter rectal intern",
  ],
  "Rinichi și vezică urinară": [
    "Tuburi colectoare renale",
    "Tuburile colectoare",
    "Măduva suprarenalei",
    "Cortex suprarenal",
    "Parenchimul renal",
    "Bazinet renal / Uretere",
    "Submucoasa vezicii urinare – Trigon",
    "Uretră / Mucoasă vezicală",
    "Mușchiul vezicii / Sfincterul extern vesical",
    "Sfincter vezical intern",
  ],
  "Organe sexuale masculine": [
    "Glandă prostatică",
    "Canale prostatice",
    "Canale ejaculatoare",
    "Celule germinale",
    "Testicule",
    "Tunica vaginală a testiculului (învelișul testiculului)",
    "Glande secretante de smegmă (glandele Tyson)",
    "Corpul penisului (corpi cavernoși, țesutul erectil al penisului)",
    "Glandul penisului",
  ],
  "Organe sexuale feminine": [
    "Uter / Trompe uterine (Fallopian tubes)",
    "Mușchii uterului",
    "Celule germinale",
    "Ovare",
    "Col uterin",
    "Mușchii colului uterin / Sfincterul cervical",
    "Glandele Bartholin",
    "Mucoasă vaginală",
    "Mușchi vaginali",
    "Glandele clitorisului",
  ],
  "Sân feminine": ["Glande mamare", "Canale mamare"],
  Piele: [
    "Coriu (dermul profund)",
    "Glande sebacee",
    "Glande sudoripare",
    "Epiderm",
  ],
  "Oase și articulații": [
    "Oase și articulații",
    "Cartilaj",
    "Ligament",
    "Tendoane",
  ],
  "Dinți și maxilar": [
    "Dentină și oasele maxilarului",
    "Smalț dentar",
    "Mușchii maxilarului",
  ],
  "Sistem limfatic": ["Vase limfatice și ganglioni limfatici", "Splină"],
  "Vase de sânge": ["Artere și vene"],
  Inimă: [
    "Miocard (ventricule)",
    "Endocard și valvele cardiace",
    "Pericard",
    "Artere și vene coronare",
    "Aortă și artere carotid",
    "Sinus carotidian",
  ],
};

const lateralDiagnoses = [
  "Glandă lacrimală inflamată",
  "Durere oculară",
  "Durere de rinichi",
];

const treatmentInfo = {
  "Glandă lacrimală inflamată": {
    stanga: "Conflict vizual - nu pot elimina o imagine (stânga)",
    dreapta: "Conflict vizual - nu pot elimina o imagine (dreapta)",
  },
  "Durere oculară": {
    stanga: "Oboseală vizuală pe partea stângă",
    dreapta: "Oboseală vizuală pe partea dreaptă",
  },
  Conjunctivită: "Inflamație cauzată de infecție sau iritație.",
};

function App() {
  const [organ, setOrgan] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [partea, setPartea] = useState("");
  const [simptome, setSimptome] = useState([]);
  const [durata, setDurata] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simptome.length < 2 || simptome.length > 3) {
      setError("Te rugăm să selectezi între 2 și 3 simptome.");
      return;
    }
    setError("");

    const simptomeText = simptome.join(", ");
    let tratament = "";

    if (lateralDiagnoses.includes(diagnostic)) {
      tratament = partea
        ? treatmentInfo[diagnostic]?.[partea] || "Tratament nespecificat."
        : "Selectează partea.";
    } else {
      tratament = treatmentInfo[diagnostic] || "Tratament nespecificat.";
    }

    let reflectie = "";
    if (durata === "1zi" || durata === "2-3zile") {
      reflectie = `\n\nPacientul trebuie să se gândească ce a făcut în ultimele 2-4 zile.`;
      if (diagnostic.includes("ochi")) {
        reflectie += " Poate a stat prea mult în fața ecranului.";
      } else if (diagnostic.includes("alimentar")) {
        reflectie += " Poate a consumat alimente alterate.";
      }
    }

    setResult(
      `<strong>Organ afectat:</strong> ${organ} ${
        partea ? `- Partea: ${partea}` : ""
      }<br />` +
        `<strong>Diagnostic:</strong> ${diagnostic}<br />` +
        `<strong>Simptome:</strong> ${simptomeText}<br />` +
        `<strong>Durata simptomelor:</strong> ${durata}<br />` +
        reflectie
    );
    setTreatment(`Conflictul: ${tratament}`);
  };

  const handleSymptomChange = (value) => {
    setSimptome((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <div style={{ width: "45%" }}>
        <h2>Formular Medical</h2>
        <form onSubmit={handleSubmit}>
          <label>Organul afectat:</label>
          <select
            value={organ}
            onChange={(e) => {
              setOrgan(e.target.value);
              setDiagnostic("");
            }}
          >
            <option value="">-- Selectează organul --</option>
            {organOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {diagnosticOptions[organ] && (
            <>
              <label>Diagnostic medical:</label>
              <select
                value={diagnostic}
                onChange={(e) => setDiagnostic(e.target.value)}
              >
                <option value="">-- Selectează diagnosticul --</option>
                {diagnosticOptions[organ].map((diag) => (
                  <option key={diag} value={diag}>
                    {diag}
                  </option>
                ))}
              </select>
            </>
          )}

          {lateralDiagnoses.includes(diagnostic) && (
            <>
              <label>Partea:</label>
              <select
                value={partea}
                onChange={(e) => setPartea(e.target.value)}
              >
                <option value="">-- Selectează partea --</option>
                <option value="stanga">Stânga</option>
                <option value="dreapta">Dreapta</option>
              </select>
            </>
          )}

          <label>Simptome:</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {["Durere", "Umflare", "Greață", "Oboseală", "Febră"].map(
              (symptom) => (
                <label key={symptom}>
                  <input
                    type="checkbox"
                    value={symptom}
                    onChange={(e) => handleSymptomChange(symptom)}
                  />{" "}
                  {symptom}
                </label>
              )
            )}
          </div>

          <label>De cât timp te doare?</label>
          <select value={durata} onChange={(e) => setDurata(e.target.value)}>
            <option value="">-- Selectează perioada --</option>
            <option value="1zi">De 1 zi</option>
            <option value="2-3zile">De 2-3 zile</option>
            <option value="1saptamana">De o săptămână</option>
            <option value="mai_mult">De mai mult timp</option>
          </select>

          <br />
          <br />
          <button className="butonCuloare" type="submit">
            Trimite
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>

      <div
        style={{ width: "45%", borderLeft: "2px solid #ccc", paddingLeft: 20 }}
      >
        <h2>Rezultate</h2>
        <div dangerouslySetInnerHTML={{ __html: result }} />
        <div style={{ marginTop: 15, fontWeight: "bold", color: "green" }}>
          {treatment}
        </div>
      </div>
    </div>
  );
}

export default App;
