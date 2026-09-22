const helpItems = [
  {
    index: 1,
    title: "Stopfe timeout",
    meta: "STORING",
    duration: "< 1 minuut",
    description: "Stopfe vastgelopen tijdens de cyclus.",
    shortText: "Stopfe vastgelopen tijdens de cyclus.",
    steps: ["Controleer de melding op het HMI.", "Controleer de productpositie.", "Voer daarna de normale herstelstap uit."],
    video: "videos/stopfe-timeout.mp4",
    icon: "!"
  },
  {
    index: 2,
    title: "Veiligheidshek open",
    meta: "SAFETY",
    duration: "< 1 minuut",
    description: "De machine deuren zijn niet gesloten of niet vrijgegeven.",
    shortText: "De machine deuren zijn niet gesloten of niet vrijgegeven.",
    steps: ["Controleer alle deuren.", "Controleer of niets de sluiting blokkeert.", "Reset daarna volgens de normale procedure."],
    video: "videos/veiligheidshek-open.mp4",
    icon: "⌑"
  },
  {
    index: 3,
    title: "Veiligheidsloop inconsistent",
    meta: "SAFETY",
    duration: "1–2 minuten",
    description: "Deursensoren zijn in error",
    shortText: "Deursensoren zijn in error",
    steps: ["Lees de melding op het HMI.", "Controleer of de deuren gesloten zijn.", "Reset daarna volgens de normale procedure."],
    video: "videos/veiligheidsloop-inconsistent.mp4",
    icon: "∞"
  },
  {
    index: 4,
    title: "Rode lamp bij start",
    meta: "STORING",
    duration: "< 1 minuut",
    description: "Controleer of alle producten volledig in de mal zitten.",
    shortText: "Een startvoorwaarde blokkeert de cyclus.",
    steps: ["Controleer of alle producten aanwezig zijn.", "Controleer of de goede onderdelen aanwezig zijn.", "Duw de producten aan", "Druk daarna opnieuw op START."],
    video: "videos/rode-lamp-start.mp4",
    icon: "!"
  },
  {
    index: 5,
    title: "Opstart guide",
    meta: "GUIDE",
    duration: "2–5 minuten",
    description: "Stapsgewijs de machine opstarten.",
    shortText: "Stapsgewijs de machine opstarten.",
    steps: ["Controleer de machineomgeving.", "Schakel de hoofdschakelaar in.", "Wacht een minuut", "Druk op de blauwe deur knop","MEER STAPPEN"],
    video: "videos/Turn%20on%20machine.mp4",
    icon: "▶"
  },
  {
    index: 6,
    title: "Afsluiten guide",
    meta: "GUIDE",
    duration: "2–5 minuten",
    description: "Machine gecontroleerd afsluiten.",
    shortText: "Machine gecontroleerd afsluiten.",
    steps: ["Maak de cyclus af.", "Breng de machine naar de juiste eindtoestand.", "Schakel systemen uit volgens de procedure."],
    video: "videos/afsluiten-guide.mp4",
    icon: "■"
  },
  {
    index: 7,
    title: "Stopfe op/bijvullen",
    meta: "AANVOER",
    duration: "1–2 minuten",
    description: "Stopfe veilig bijvullen.",
    shortText: "Stopfe veilig bijvullen.",
    steps: ["Controleer het huidige niveau.", "Vul bij volgens de afgesproken werkwijze.", "Controleer daarna de aanvoer."],
    video: "videos/stopfe-bijvullen.mp4",
    icon: "+"
  },
  {
    index: 8,
    title: "2 trays bij het vullen",
    meta: "VULLEN",
    duration: "< 1 minuut",
    description: "De tray op een veilige juiste wijze terug zetten",
    shortText: "Een tray is doorgeschoten.",
    steps: ["Gebruik twee trays volgens de instructie.", "Controleer de positie.", "Ga pas verder als beide correct staan."],
    video: "videos/twee-trays-vullen.mp4",
    icon: "▣"
  },
  {
    index: 9,
    title: "Afvalkrat vol",
    meta: "AFVAL",
    duration: "1–2 minuten",
    description: "Afvalkrat legen en opnieuw vrijgeven.",
    shortText: "Afvalkrat legen en opnieuw vrijgeven.",
    steps: ["Stop volgens de normale procedure.", "Leeg of vervang de afvalkrat.", "Controleer de detectie.", "Start daarna opnieuw."],
    video: "videos/afvalkrat-vol.mp4",
    icon: "⌫"
  },
  {
    index: 10,
    title: "Systeem fout",
    meta: "SYSTEM",
    duration: "1–3 minuten",
    description: "Algemene systeemfout.",
    shortText: "Algemene systeemfout.",
    steps: ["Lees de volledige foutmelding.", "Noteer eventueel de foutcode.", "Voer alleen de toegestane herstelstappen uit."],
    video: "videos/system-fout.mp4",
    icon: "⚙"
  },
  {
    index: 11,
    title: "Calibratie nodig",
    meta: "CALIBRATIE",
    duration: "2–5 minuten",
    description: "Bij elke 10x opstarten is callibratie vereist.",
    shortText: "Systeem vraagt om calibratie.",
    steps: ["Controleer welk onderdeel calibratie vraagt.", "Volg de calibratiestappen op het HMI.", "Controleer het resultaat voordat de productie wordt hervat."],
    video: "videos/calibratie-nodig.mp4",
    icon: "◎"
  }

  /*
  {
    index: 12,
    title: "Nieuwe tegel",
    meta: "NIEUW",
    duration: "< 1 minuut",
    description: "Gebruik dit blok als template voor een nieuwe tegel.",
    shortText: "Kopieer dit blok, pas de tekst aan en verwijder de commentaartekens.",
    steps: ["Stap 1", "Stap 2", "Stap 3"],
    video: "videos/nieuwe-tegel.mp4",
    icon: "+"
  }
  */
];

const dialog = document.getElementById("helpDialog");
const closeDialogButton = document.getElementById("closeDialog");
const titleElement = document.getElementById("dialogTitle");
const durationElement = document.getElementById("dialogDuration");
const descriptionElement = document.getElementById("dialogDescription");
const stepsElement = document.getElementById("dialogSteps");
const video = document.getElementById("instructionVideo");
const placeholder = document.getElementById("videoPlaceholder");
const placeholderTitle = document.getElementById("videoPlaceholderTitle");
const placeholderText = document.getElementById("videoPlaceholderText");
const helpGrid = document.getElementById("helpGrid");

function createTile(item) {
  const tile = document.createElement("button");
  tile.className = "help-tile";
  tile.type = "button";
  tile.dataset.index = item.index;

  tile.innerHTML = `
    <span class="tile-icon">${item.icon}</span>
    <span class="tile-content">
      <span class="tile-meta">${item.meta} • ${item.duration.toUpperCase()}</span>
      <span class="tile-title">${item.title}</span>
      <span class="tile-text">${item.shortText}</span>
    </span>
    <span class="tile-arrow" aria-hidden="true">→</span>
  `;

  tile.addEventListener("click", () => openInstruction(item));
  return tile;
}

function renderTiles() {
  helpGrid.innerHTML = "";

  [...helpItems]
    .sort((a, b) => a.index - b.index)
    .forEach(item => helpGrid.appendChild(createTile(item)));
}

function openInstruction(item) {
  titleElement.textContent = item.title;
  durationElement.textContent = `INSTRUCTIE • ${item.duration}`;
  descriptionElement.textContent = item.description;

  stepsElement.innerHTML = "";
  item.steps.forEach(step => {
    const listItem = document.createElement("li");
    listItem.textContent = step;
    stepsElement.appendChild(listItem);
  });

  video.classList.remove("is-ready");
  placeholder.classList.remove("is-hidden");
  placeholderTitle.textContent = item.video ? "Video laden…" : "Geen video";
  placeholderText.textContent = item.video ? "Even geduld." : "Voor deze instructie is nog geen video toegevoegd.";

  video.pause();
  video.removeAttribute("src");
  video.load();

  if (item.video) {
    video.src = item.video;
    video.load();
  }

  dialog.showModal();
}

video.addEventListener("loadedmetadata", () => {
  video.classList.add("is-ready");
  placeholder.classList.add("is-hidden");
});

video.addEventListener("error", () => {
  video.classList.remove("is-ready");
  placeholder.classList.remove("is-hidden");
  placeholderTitle.textContent = "Video niet beschikbaar";
  placeholderText.textContent = "De video kon niet worden geladen.";
});

function closeDialog() {
  video.pause();
  dialog.close();
}

closeDialogButton.addEventListener("click", closeDialog);

dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) closeDialog();
});

dialog.addEventListener("close", () => {
  video.pause();
});

renderTiles();
