const helpItems = [
  {
    index: 1,
    title: "Stopfe timeout",
    meta: "STORING",
    duration: "< 1 minuut",
    description: "Stopfe vastgelopen tijdens de cyclus.",
    shortText: "Stopfe vastgelopen tijdens de cyclus.",
    steps: ["Druk op Error reset.", "Controleer: Machine run staat UIT.", "Open de veiligheidsdeur.", "Verwijder ALLE stopfe uit de triltrommelbaan.", "BELANGRIJK: Controleer zorgvuldig of geen stopfe diep in de goot vastzitten.", "Sluit de veiligheidsdeur.", "Druk op de blauwe knop. Druk daarna op Error reset.", "Druk op Start."],
    video: "videos/Stopfe%20timeout.mp4",
    icon: "!"
  },
  {
    index: 2,
    title: "Veiligheidshek open",
    meta: "SAFETY",
    duration: "< 1 minuut",
    description: "De machine deuren zijn niet gesloten of niet vrijgegeven.",
    shortText: "De machine deuren zijn niet gesloten of niet vrijgegeven.",
    steps: ["Sluit de veiligheidsdeur.", "Druk op de blauwe knop.", "Druk op Error reset.", "Druk op Start."],
    video: "videos/Veiligheidsdeur%20open.mp4",
    icon: "⌑"
  },
  {
    index: 3,
    title: "Veiligheidsloop inconsistent",
    meta: "SAFETY",
    duration: "1–2 minuten",
    description: "Deursensoren zijn in error",
    shortText: "Deursensoren zijn in error",
    steps: ["Druk op Error reset.", "Druk op de blauwe knop.", "Druk opnieuw op Error reset.", "Druk op Start."],
    video: "videos/Veiligheidsdeur%20inconsistent.mp4",
    icon: "∞"
  },
  {
    index: 4,
    title: "Rode lamp bij start",
    meta: "STORING",
    duration: "< 1 minuut",
    description: "Controleer of alle producten volledig in de mal zitten.",
    shortText: "Een startvoorwaarde blokkeert de cyclus.",
    steps: ["Controleer of de juiste onderdelen aanwezig zijn.", "Controleer of alle onderdelen volledig in de mal zitten.", "Druk opnieuw op Start."],
    video: "videos/Rode%20lamp%20start.mp4",
    icon: "!"
  },
  {
    index: 5,
    title: "Opstart guide",
    meta: "GUIDE",
    duration: "2–5 minuten",
    description: "Stapsgewijs de machine opstarten.",
    shortText: "Stapsgewijs de machine opstarten.",
    steps: ["Open de veiligheidsdeur.", "Zet de lastschakelaar AAN.", "Sluit de veiligheidsdeur.", "Wacht enkele minuten tot de machine is opgestart.", "Druk op de blauwe knop.", "Druk op Error reset.", "Druk op Autocyclus.", "Houd Start ingedrukt totdat de robot stopt met bewegen.", "Druk op Autocyclus.", "Druk op Start."],
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
    steps: ["Wacht totdat de machine de cyclus heeft voltooid.", "Druk op Stop.", "Open de veiligheidsdeur.", "Zet de lastschakelaar UIT."],
    video: "videos/Turn%20off%20machine.mp4",
    icon: "■"
  },
  {
    index: 7,
    title: "Stopfe op/bijvullen",
    meta: "AANVOER",
    duration: "1–2 minuten",
    description: "Stopfe veilig bijvullen.",
    shortText: "Stopfe veilig bijvullen.",
    steps: ["Zet de afvalkar onder de stopfe-opening.", "Pak de krat met stopfe.", "Zet de krat op de afvalkar.", "Vul de machine MET DE HAND.", "BELANGRIJK: Gebruik GEEN schep.", "Vul tot de vulindicatie."],
    video: "videos/Stopfe%20vullen.mp4",
    icon: "+"
  },
  {
    index: 8,
    title: "2 trays bij het vullen",
    meta: "VULLEN",
    duration: "< 1 minuut",
    description: "De tray op een veilige juiste wijze terug zetten",
    shortText: "Een tray is doorgeschoten.",
    steps: ["Vul de tweede tray.", "Pak de tweede tray op.", "Leg de tray voorzichtig neer achter de normale vulpositie."],
    video: "videos/Double%20tray.mp4",
    icon: "▣"
  },
  {
    index: 9,
    title: "Afvalkrat vol",
    meta: "AFVAL",
    duration: "1–2 minuten",
    description: "Afvalkrat legen en opnieuw vrijgeven.",
    shortText: "Afvalkrat legen en opnieuw vrijgeven.",
    steps: ["Verwijder de volle krat.", "Plaats een nieuwe rode krat.", "Druk op OK."],
    video: "videos/Afvalbak%20vol.mp4",
    icon: "⌫"
  },
  {
    index: 10,
    title: "Systeem fout",
    meta: "SYSTEM",
    duration: "1–3 minuten",
    description: "Algemene systeemfout.",
    shortText: "Algemene systeemfout.",
    steps: ["Bij elke systeemfout \"X\" is een herstart vereist.", "Volg de instructie ‘Afsluiten guide’.", "Volg daarna de instructie ‘Opstart guide’."],
    video: "",
    icon: "⚙"
  },
  {
    index: 11,
    title: "Calibratie nodig",
    meta: "CALIBRATIE",
    duration: "2–5 minuten",
    description: "Bij elke 10x opstarten is callibratie vereist.",
    shortText: "Systeem vraagt om calibratie.",
    steps: ["De machine vraagt na elke 10 opstarts om calibratie.", "Druk op Automatisch calibreren.", "Kies NEE in de pop-up.", "Houd Start ingedrukt totdat de robot stopt.", "Druk op Error reset.", "Druk op Autorun.", "Houd Start ingedrukt totdat de robot stilstaat.", "Druk op Autorun.", "Druk op Start."],
    video: "",
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
