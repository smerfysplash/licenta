export default function Boliorgane({ setDiagnostic }) {
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

  return (
    <div>
      {diagnosticOptions.Ochiul.map((diag) => (
        <button key={diag} onClick={() => setDiagnostic(diag)}>
          {diag}
        </button>
      ))}
    </div>
  );
}
