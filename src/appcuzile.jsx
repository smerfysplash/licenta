import React, { useState, useEffect } from "react";
import { organOptions } from "./data/organOptions";
import { diagnosticOptions } from "./data/diagnosticOptions";
import { lateralDiagnoses } from "./data/lateralDiagnoses";
import { treatmentInfo } from "./data/treatmentInfo";

export default function MedicalForm() {
  const [selectedOrgan, setSelectedOrgan] = useState("");
  const [diagnosticList, setDiagnosticList] = useState([]);
  const [selectedDiagnostic, setSelectedDiagnostic] = useState("");
  const [showSide, setShowSide] = useState(false);
  const [selectedSide, setSelectedSide] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [duration, setDuration] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    setDiagnosticList(diagnosticOptions[selectedOrgan] || []);
    setSelectedDiagnostic("");
  }, [selectedOrgan]);

  useEffect(() => {
    setShowSide(lateralDiagnoses.includes(selectedDiagnostic));
  }, [selectedDiagnostic]);

  const handleSymptomChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSymptoms((prev) => [...prev, value]);
    } else {
      setSelectedSymptoms((prev) =>
        prev.filter((symptom) => symptom !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedSymptoms.length < 2 || selectedSymptoms.length > 3) {
      setErrorMessage("Te rugăm să selectezi între 2 și 3 simptome.");
      return;
    }

    const simptomeText = selectedSymptoms.join(", ");
    const treatment =
      treatmentInfo[selectedDiagnostic]?.[selectedSide] ||
      treatmentInfo[selectedDiagnostic]?.general ||
      "Tratament nespecificat.";

    let tipHint = "";
    if (["1zi", "2-3zile"].includes(duration)) {
      tipHint = getTipHint(selectedDiagnostic);
    }

    setErrorMessage("");
    setResult({
      organ: selectedOrgan,
      side: selectedSide,
      diagnostic: selectedDiagnostic,
      symptoms: simptomeText,
      duration,
      treatment,
      tipHint,
    });
  };

  const getTipHint = (diagnostic) => {
    const hints = {
      "toxiinfectie alimentara":
        "Gândește-te ce ai mâncat în ultimele 2-4 zile.",
      "dureri oculare":
        "Gândește-te dacă ai stat prea mult în fața ecranului în ultimele zile.",
    };
    return (
      hints[diagnostic.toLowerCase()] ||
      "Reflectează la evenimentele recente care ar fi putut declanșa simptomele."
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Formular Medical</h2>

        <label>Organul afectat:</label>
        <select
          value={selectedOrgan}
          onChange={(e) => setSelectedOrgan(e.target.value)}
        >
          <option value="">-- Selectează organul --</option>
          {organOptions.map((organ) => (
            <option key={organ} value={organ}>
              {organ}
            </option>
          ))}
        </select>

        {diagnosticList.length > 0 && (
          <>
            <label>Diagnostic medical:</label>
            <select
              value={selectedDiagnostic}
              onChange={(e) => setSelectedDiagnostic(e.target.value)}
            >
              <option value="">-- Selectează diagnosticul --</option>
              {diagnosticList.map((diag) => (
                <option key={diag} value={diag}>
                  {diag}
                </option>
              ))}
            </select>
          </>
        )}

        {showSide && (
          <>
            <label>Partea:</label>
            <select
              value={selectedSide}
              onChange={(e) => setSelectedSide(e.target.value)}
            >
              <option value="">-- Lateralitatea --</option>
              <option value="stânga">Stânga</option>
              <option value="dreapta">Dreapta</option>
            </select>
          </>
        )}

        <label>Simptome (poți selecta 2-3):</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {["durere", "umflare", "greață", "oboseală", "febră"].map(
            (symptom) => (
              <label key={symptom}>
                <input
                  type="checkbox"
                  name="simptome"
                  value={symptom}
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={handleSymptomChange}
                />
                {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
              </label>
            )
          )}
        </div>

        <label>De cât timp te doare?</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">-- Selectează perioada --</option>
          <option value="1zi">De 1 zi</option>
          <option value="2-3zile">De 2-3 zile</option>
          <option value="1saptamana">De o săptămână</option>
          <option value="mai_mult">De mai mult timp</option>
        </select>

        <br />
        <br />
        <button type="submit">Trimite</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>

      <div
        className="result-container"
        style={{
          width: "45%",
          paddingLeft: "20px",
          borderLeft: "2px solid #ccc",
        }}
      >
        <h2>Rezultate</h2>
        {result && (
          <>
            <div>
              <strong>Organ afectat:</strong> {result.organ}{" "}
              {result.side && `- Partea: ${result.side}`}
            </div>
            <div>
              <strong>Diagnostic:</strong> {result.diagnostic}
            </div>
            <div>
              <strong>Simptome:</strong> {result.symptoms}
            </div>
            <div>
              <strong>Durata simptomelor:</strong> {result.duration}
            </div>
            <div
              style={{ marginTop: "15px", fontWeight: "bold", color: "green" }}
            >
              Conflictul: {result.treatment}
            </div>
            {result.tipHint && (
              <div style={{ marginTop: "10px", fontStyle: "italic" }}>
                {result.tipHint}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
