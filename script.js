const dialog = document.getElementById("helpDialog");
const closeDialogButton = document.getElementById("closeDialog");
const titleElement = document.getElementById("dialogTitle");
const durationElement = document.getElementById("dialogDuration");
const descriptionElement = document.getElementById("dialogDescription");
const stepsElement = document.getElementById("dialogSteps");
const video = document.getElementById("instructionVideo");
const placeholder = document.getElementById("videoPlaceholder");

function openInstruction(tile) {
  const {
    title,
    duration,
    description,
    steps,
    video: videoPath
  } = tile.dataset;

  titleElement.textContent = title;
  durationElement.textContent = `INSTRUCTIE • ${duration}`;
  descriptionElement.textContent = description;

  stepsElement.innerHTML = "";
  steps
    .split("|")
    .map(step => step.trim())
    .filter(Boolean)
    .forEach(step => {
      const item = document.createElement("li");
      item.textContent = step;
      stepsElement.appendChild(item);
    });

  video.classList.remove("is-ready");
  placeholder.classList.remove("is-hidden");

  video.pause();
  video.removeAttribute("src");
  video.load();

  if (videoPath) {
    video.src = videoPath;
    video.load();
  }

  dialog.showModal();
}

document.querySelectorAll(".help-tile").forEach(tile => {
  tile.addEventListener("click", () => openInstruction(tile));
});

video.addEventListener("loadedmetadata", () => {
  video.classList.add("is-ready");
  placeholder.classList.add("is-hidden");
});

video.addEventListener("error", () => {
  video.classList.remove("is-ready");
  placeholder.classList.remove("is-hidden");
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

  if (clickedOutside) {
    closeDialog();
  }
});

dialog.addEventListener("close", () => {
  video.pause();
});
