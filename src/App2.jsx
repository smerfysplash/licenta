import React, { useState } from "react";

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    organ: "",
    partea: "",
    diagnostic: "",
    simptome: [],
    durata: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const organeCuParti = ["rinichi", "plămân"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSymptomChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const simptome = checked
        ? [...prev.simptome, value]
        : prev.simptome.filter((s) => s !== value);
      return { ...prev, simptome };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.simptome.length < 2 || formData.simptome.length > 3) {
      setError("Te rugăm să selectezi între 2 și 3 simptome.");
      return;
    }

    setError("");
    const treatment = getTreatment(formData.diagnostic);
    setResult({ ...formData, treatment });
  };

  const getTreatment = (diagnostic) => {
    const treatments = {
      inflamatie:
        "Conflict legat de o bucățică vizuală • Partea stângă: neputința de a elimina o bucățică vizuală (nu pot scăpa de o imagine, un detaliu vizual sau o imagine care mă obsedează)",
      infectie: "Tratament cu antibiotice.",
      leziune: "Repaus și fizioterapie.",
      tumora: "Consultație oncologică.",
      altul: "Consult medical pentru diagnostic specific.",
    };
    return treatments[diagnostic] || "Nu este specificat un tratament.";
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <div style={{ width: "45%" }}>
        <h2>Formular Medical</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Organul afectat:
            <select name="organ" value={formData.organ} onChange={handleChange}>
              <option value="">-- Selectează organul --</option>
              <option value="ficat">Ficat</option>
              <option value="ochi">Ochi</option>
              <option value="inima">Inimă</option>
              <option value="plămân">Plămân</option>
              <option value="creier">Creier</option>
            </select>
          </label>

          {organeCuParti.includes(formData.organ) && (
            <label>
              Partea:
              <select
                name="partea"
                value={formData.partea}
                onChange={handleChange}
              >
                <option value="">-- Lateralitatea --</option>
                <option value="stânga">Stânga</option>
                <option value="dreapta">Dreapta</option>
              </select>
            </label>
          )}

          <label>
            Diagnostic medical:
            <select
              name="diagnostic"
              value={formData.diagnostic}
              onChange={handleChange}
            >
              <option value="">-- Selectează diagnosticul --</option>
              <option value="inflamatie">Glande lacrimale</option>
              <option value="infectie">Infecție</option>
              <option value="leziune">Leziune</option>
              <option value="tumora">Tumoră</option>
              <option value="altul">Altul</option>
            </select>
          </label>

          <label>Simptome (poți selecta 2-3):</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
            {["durere", "umflare", "greață", "oboseală", "febră"].map(
              (symptom) => (
                <label key={symptom}>
                  <input
                    type="checkbox"
                    name="simptome"
                    value={symptom}
                    checked={formData.simptome.includes(symptom)}
                    onChange={handleSymptomChange}
                  />{" "}
                  {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                </label>
              )
            )}
          </div>

          <label>
            De cât timp te doare?
            <select
              name="durata"
              value={formData.durata}
              onChange={handleChange}
            >
              <option value="">-- Selectează perioada --</option>
              <option value="1zi">De 1 zi</option>
              <option value="2-3zile">De 2-3 zile</option>
              <option value="1saptamana">De o săptămână</option>
              <option value="mai_mult">De mai mult timp</option>
            </select>
          </label>

          <br />
          <button type="submit">Trimite</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>

      <div
        style={{ width: "45%", borderLeft: "2px solid #ccc", paddingLeft: 20 }}
      >
        <h2>Rezultate</h2>
        {result && (
          <>
            <div>
              <strong>Organ afectat:</strong> {result.organ}{" "}
              {result.partea && `- Partea: ${result.partea}`}
            </div>
            <div>
              <strong>Diagnostic:</strong> {result.diagnostic}
            </div>
            <div>
              <strong>Simptome:</strong> {result.simptome.join(", ")}
            </div>
            <div>
              <strong>Durata simptomelor:</strong> {result.durata}
            </div>
            <div style={{ marginTop: 15, fontWeight: "bold", color: "green" }}>
              Conflictul: {result.treatment}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MedicalForm;
