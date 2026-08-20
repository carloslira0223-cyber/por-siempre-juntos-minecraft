const memories = [
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-01.jpeg",
    title: "Un rinc\u00f3n rosita",
    caption: "Un rinconcito construido entre bloques, justo como los que hacen bonito nuestro mundo."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-02.jpeg",
    title: "Camino bajo la lluvia",
    caption: "Una noche de lluvia y cerezos que merec\u00eda quedarse guardada."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-03.jpeg",
    title: "Bajo los cerezos",
    caption: "Una vista bonita de nuestro mundo mientras la noche segu\u00eda encendida."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-04.jpeg",
    title: "Un momento de exploraci\u00f3n",
    caption: "Otro momento de nuestro mundo, guardado tal como pas\u00f3."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-05.jpeg",
    title: "Explorando el bosque",
    caption: "Otro camino de nuestro mundo, descubierto paso a paso."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-06.jpeg",
    title: "Un rinc\u00f3n con cerditos",
    caption: "Un peque\u00f1o rinc\u00f3n lleno de vida dentro de nuestro mundo."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-07.jpeg",
    title: "El cuartito de las gallinitas",
    caption: "Uno de esos lugares que se quedan guardados por lo divertido que se ve."
  },
  {
    type: "image",
    source: "assets/recuerdos/recuerdo-08.jpeg",
    title: "El portal abierto",
    caption: "Una entrada lista para seguir descubriendo mundos juntos."
  },
  {
    type: "video",
    source: "assets/recuerdos/recuerdo-09.mp4",
    title: "Una aventura en movimiento",
    caption: "Un video cortito de una de nuestras partidas."
  },
  {
    type: "video",
    source: "assets/recuerdos/recuerdo-10.mp4",
    title: "Un momento guardado",
    caption: "Una aventura que ahora tambi\u00e9n tiene su lugar en este \u00e1lbum."
  },
  {
    type: "video",
    source: "assets/recuerdos/recuerdo-11.mp4",
    title: "Otra vuelta por el mundo",
    caption: "Otro pedacito de nuestro mundo que vale la pena volver a mirar."
  }
];

const memoryAlbum = document.querySelector("#memoryAlbum");
const galleryLoading = document.querySelector("#galleryLoading");
const galleryFound = document.querySelector("#galleryFound");
const galleryFeatured = document.querySelector("#galleryFeatured");
const galleryMore = document.querySelector("#galleryMore");
const galleryToggle = document.querySelector("#galleryToggle");
const galleryFavorite = document.querySelector("#galleryFavorite");
const memoryLightbox = document.querySelector("#memoryLightbox");
const memoryLightboxMedia = document.querySelector("#memoryLightboxMedia");
const memoryLightboxCount = document.querySelector("#memoryLightboxCount");
const memoryLightboxTitle = document.querySelector("#memoryLightboxTitle");
const memoryLightboxDescription = document.querySelector("#memoryLightboxDescription");
const memoryLightboxClose = document.querySelector("#memoryLightboxClose");
const memoryLightboxPrevious = document.querySelector("#memoryLightboxPrevious");
const memoryLightboxNext = document.querySelector("#memoryLightboxNext");
const memoryFavoriteButton = document.querySelector("#memoryFavoriteButton");
const inventoryMessage = document.querySelector("#inventoryMessage");
const inventoryDrawer = document.querySelector("#inventoryDrawer");
const inventoryToggle = document.querySelector("#inventoryToggle");
const inventoryClose = document.querySelector("#inventoryClose");
const inventoryScrim = document.querySelector("#inventoryScrim");
const topbar = document.querySelector(".topbar");
const navSectionLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const buildJourney = document.querySelector("[data-build-journey]");
const buildCards = Array.from(document.querySelectorAll("[data-build-card]"));
const introExperience = document.querySelector("#introExperience");
const introBookTrigger = document.querySelector("#introBookTrigger");
const introSlides = Array.from(document.querySelectorAll("[data-intro-slide]"));
const introPrevious = document.querySelector("#introPrevious");
const introNext = document.querySelector("#introNext");
const introProgress = document.querySelector("#introProgress");
const introEnter = document.querySelector("#introEnter");
const ambientMusic = document.querySelector("#ambientMusic");
const xpSound = document.querySelector("#xpSound");
const creeperExplosionSound = document.querySelector("#creeperExplosionSound");
const audioToggle = document.querySelector("#audioToggle");
const netherSection = document.querySelector("[data-nether-section]");
const netherNavLink = document.querySelector("[data-nether-nav]");
const netherGate = document.querySelector("#netherGate");
const netherPortalButton = document.querySelector("#netherPortalButton");
const netherPortalAction = document.querySelector("#netherPortalAction");
const netherAccessLabel = document.querySelector("#netherAccessLabel");
const netherGateTitle = document.querySelector("#netherGateTitle");
const netherEnter = document.querySelector("#netherEnter");
const netherEnterText = document.querySelector("#netherEnterText");
const netherGateStatus = document.querySelector("#netherGateStatus");
const netherTransition = document.querySelector("#netherTransition");
const netherArrival = document.querySelector("#netherArrival");
const netherMine = document.querySelector("#netherMine");
const netherPickaxe = document.querySelector("#netherPickaxe");
const netherPickaxeLabel = document.querySelector("#netherPickaxeLabel");
const netherOreField = document.querySelector("#netherOreField");
const netherOreCount = document.querySelector("#netherOreCount");
const netherStatus = document.querySelector("#netherStatus");
const netherGoldDiscovery = document.querySelector("#netherGoldDiscovery");
const netherGoldPickup = document.querySelector("#netherGoldPickup");
const netherBookReward = document.querySelector("#netherBookReward");
const netherRewardOverlay = document.querySelector("#netherRewardOverlay");
const netherRewardDismiss = document.querySelector("#netherRewardDismiss");
const treasureSection = document.querySelector("[data-treasure-section]");
const treasureChestStage = document.querySelector("#treasureChestStage");
const treasureChestButton = document.querySelector("#treasureChestButton");
const treasureChestButtonLabel = document.querySelector("#treasureChestButtonLabel");
const treasureProgress = document.querySelector("#treasureProgress");
const treasureChestTitle = document.querySelector("#treasureChestTitle");
const treasureStatus = document.querySelector("#treasureStatus");
const treasureOpenButton = document.querySelector("#treasureOpenButton");
const treasureLetter = document.querySelector("#treasureLetter");
const treasureLetterCopy = document.querySelector("#treasureLetterCopy");
const treasureLetterTemplate = document.querySelector("#treasureLetterTemplate");
const relationshipStart = new Date(2025, 1, 20, 20, 0, 0);
const NETHER_PROGRESS_STORAGE_KEY = "por-siempre-juntos-nether-progress-v2";
const MEMORY_FAVORITE_STORAGE_KEY = "por-siempre-juntos-memory-favorite-v1";
const TREASURE_PROGRESS_STORAGE_KEY = "por-siempre-juntos-treasure-v1";
const NETHER_BLOCK_TOTAL = 15;
const counterFields = {
  years: document.querySelector("#countYears"),
  months: document.querySelector("#countMonths"),
  days: document.querySelector("#countDays"),
  hours: document.querySelector("#countHours"),
  minutes: document.querySelector("#countMinutes"),
  seconds: document.querySelector("#countSeconds")
};

const coordinateSearch = document.querySelector("#coordinateSearch");
const coordinateLoader = document.querySelector("#coordinateLoader");
const coordinateStatus = document.querySelector("#coordinateStatus");
const coordinateProgress = document.querySelector("#coordinateProgress");
const coordinatePercent = document.querySelector("#coordinatePercent");
const coordinateSuccess = document.querySelector("#coordinateSuccess");
const mapReveal = document.querySelector("#mapReveal");
const triviaQuestion = document.querySelector("#triviaQuestion");
const triviaChoices = document.querySelector("#triviaChoices");
const triviaStatus = document.querySelector("#triviaStatus");
const triviaProgress = document.querySelector("#triviaProgress");
const triviaSeedNumber = document.querySelector("#triviaSeedNumber");
const memorySeedTrack = document.querySelector("#memorySeedTrack");
const memoryQuestionVisual = document.querySelector("#memoryQuestionVisual");
const gardenQuiz = document.querySelector(".garden-quiz");
const seedCount = document.querySelector("#seedCount");
const inventorySeedCount = document.querySelector("#inventorySeedCount");
const gardenStatus = document.querySelector("#gardenStatus");
const waterReward = document.querySelector("#waterReward");

const gardenTrivia = [
  {
    question: "\u00bfCuando hago alguna de mis nacadas, qu\u00e9 espero conseguir casi siempre?",
    answers: [
      { text: "Sacarte una sonrisa o hacerte re\u00edr \u{1F979}\u{1F497}", correct: true },
      { text: "Que me tengas que aguantar porque no queda de otra \u{1F608}", correct: false },
      { text: "Demostrar que puedo hacer todav\u00eda m\u00e1s nacadas", correct: false }
    ]
  },
  {
    question: "\u00bfQu\u00e9 quiero decir cuando te digo que te amo \u201cinfinitamente y m\u00e1s all\u00e1\u201d?",
    answers: [
      { text: "Que te amo much\u00edsimo, pero alg\u00fan d\u00eda se acaba", correct: false },
      { text: "Que mi amor por ti no tiene una medida ni un final \u{1F497}", correct: true },
      { text: "Que tenemos que encontrar el borde del mundo de Minecraft", correct: false }
    ]
  },
  {
    question: "\u00bfCu\u00e1l ser\u00eda para m\u00ed el verdadero hogar?",
    answers: [
      { text: "La casa m\u00e1s grande y bonita que podamos construir", correct: false },
      { text: "Cualquier lugar donde tengamos nuestras cosas", correct: false },
      { text: "El lugar donde pueda estar contigo \u{1F3E1}\u{1F497}", correct: true }
    ]
  },
  {
    question: "\u00bfQu\u00e9 parte de ti me parece m\u00e1s bonita?",
    answers: [
      { text: "Solamente tus ojitos", correct: false },
      { text: "Toda t\u00fa: tu forma de ser, tu risa, tus expresiones, tus gestitos y todo lo que te hace ser t\u00fa \u{1F979}\u{1F497}", correct: true },
      { text: "Solamente cuando te arreglas mucho", correct: false }
    ]
  },
  {
    question: "\u00bfQu\u00e9 significa cuando digo que te elegir\u00eda en todas las vidas?",
    answers: [
      { text: "Que si pudiera volver a empezar una y otra vez, volver\u00eda a encontrarte y elegirte a ti \u{1F497}", correct: true },
      { text: "Que tendr\u00edamos infinitas partidas de Minecraft", correct: false },
      { text: "Que quiero respawnear contigo cada vez que perdamos", correct: false }
    ]
  },
  {
    question: "\u00bfQu\u00e9 quiero seguir construyendo contigo?",
    answers: [
      { text: "Solamente nuestro mundo de Minecraft", correct: false },
      { text: "Una casa enorme y much\u00edsimas construcciones", correct: false },
      { text: "Much\u00edsimos recuerdos, aventuras y una historia que siga siendo nuestra \u{1F979}\u{1F497}", correct: true }
    ]
  }
];

let selectedItemId = null;
let draggedItemId = null;
let pointerDrag = null;
let suppressNextClickItemId = null;
let triviaIndex = 0;
let triviaLocked = false;
let seedsAvailable = 0;
let plantedFlowerCount = 0;
let isMusicMuted = false;
let coordinateSearchStarted = false;
let netherProgress = loadNetherProgress();
let netherKeyReady = netherProgress.creeperKeyObtained;
let netherUnlocked = netherProgress.netherUnlocked;
let netherPickaxeSelected = false;
let netherPortalTimer = null;
let netherArrivalTimer = null;
let memoryGalleryStarted = false;
let memoryGalleryExpanded = false;
let activeMemoryIndex = 0;
let favoriteMemoryIndex = null;
let memoryLightboxLastFocus = null;
let memoryTouchStart = null;
let treasureOpened = loadTreasureProgress().opened;
let treasureLetterObserver = null;

const inventoryDetails = {
  "infinite-love": {
    label: "Amor infinito",
    message: "Amor infinito guardado: un recurso que nunca se acaba cuando estamos juntos."
  },
  "shared-key": {
    label: "Llave de los dos",
    message: "Llave de los dos guardada: ya tenemos la salida para nuestra pr\u00f3xima escapada."
  },
  "flower-seeds": {
    label: "Semillas de flores",
    message: "Semillas de flores guardadas: los recuerdos verdaderos tambi\u00e9n saben florecer."
  },
  "water-bucket": {
    label: "Cubo de agua",
    message: "Cubo de agua guardado: ahora nuestro jard\u00edn tiene con qu\u00e9 seguir creciendo."
  },
  "nether-book": {
    label: "Libro rescatado del Nether",
    message: "Libro del Nether guardado: una aventura nueva ya qued\u00f3 escrita para los dos."
  },
  "nether-pickaxe": {
    label: "Pico del Nether",
    message: "Pico del Nether guardado: ahora podemos abrirnos camino juntos entre cualquier roca."
  },
  "nether-gold": {
    label: "Oro del Nether",
    message: "Oro del Nether guardado: mi minerita favorita encontr\u00f3 algo que brillaba para los dos."
  }
};

function formatMemoryNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function createMemoryMedia(memory, thumbnail) {
  if (memory.type === "video") {
    const video = document.createElement("video");
    video.src = memory.source;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.preload = thumbnail ? "auto" : "metadata";

    if (thumbnail) {
      video.muted = true;
      video.defaultMuted = true;
      video.tabIndex = -1;
      video.setAttribute("aria-hidden", "true");
      video.addEventListener("loadeddata", () => {
        if (Number.isFinite(video.duration) && video.duration > 0.15) {
          video.currentTime = Math.min(0.12, video.duration / 4);
        }
      }, { once: true });
    } else {
      video.controls = true;
      video.setAttribute("aria-label", "Video: " + memory.title);
    }

    return video;
  }

  const image = document.createElement("img");
  image.src = memory.source;
  image.alt = thumbnail ? "" : memory.title;
  image.decoding = "async";
  image.loading = thumbnail ? "lazy" : "eager";

  if (thumbnail) {
    image.setAttribute("aria-hidden", "true");
  }

  return image;
}

function createMemoryTile(memory, index, variant) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "memory-tile memory-tile--" + variant;
  tile.style.setProperty("--memory-order", String(index));
  tile.setAttribute("aria-label", "Abrir captura " + formatMemoryNumber(index) + ": " + memory.title);

  const frame = document.createElement("span");
  frame.className = "memory-tile-frame";

  const media = createMemoryMedia(memory, true);
  media.className = "memory-tile-media";
  frame.appendChild(media);

  const label = document.createElement("span");
  label.className = "memory-tile-label";
  label.textContent = variant === "featured"
    ? "Captura " + formatMemoryNumber(index) + " / " + memories.length
    : "Captura " + formatMemoryNumber(index);
  frame.appendChild(label);

  if (memory.type === "video") {
    const videoLabel = document.createElement("span");
    videoLabel.className = "memory-tile-video";
    videoLabel.textContent = "Video";
    frame.appendChild(videoLabel);
  }

  if (favoriteMemoryIndex === index) {
    const favoriteMark = document.createElement("span");
    favoriteMark.className = "memory-tile-favorite";
    favoriteMark.textContent = "\u2665";
    frame.appendChild(favoriteMark);
  }

  const title = document.createElement("span");
  title.className = "memory-tile-title";
  title.textContent = memory.title;

  tile.append(frame, title);
  tile.addEventListener("click", () => openMemoryLightbox(index));
  return tile;
}

function updateGalleryFavorite() {
  if (!galleryFavorite) {
    return;
  }

  if (!memoryGalleryStarted) {
    galleryFavorite.hidden = true;
    return;
  }

  galleryFavorite.hidden = false;
  galleryFavorite.textContent = favoriteMemoryIndex === null
    ? "Todav\u00eda puedes escoger tu recuerdo favorito \u2661"
    : "\u2665 Recuerdo favorito de nuestro mundo: " + memories[favoriteMemoryIndex].title;
}

function renderMemoryGallery() {
  if (!galleryFeatured || !galleryMore || !galleryToggle) {
    return;
  }

  galleryFeatured.replaceChildren();
  galleryMore.replaceChildren();

  const firstMemory = memories[0];
  if (firstMemory) {
    galleryFeatured.appendChild(createMemoryTile(firstMemory, 0, "featured"));
  }

  const secondaryMemories = memories.slice(1, 3);
  if (secondaryMemories.length) {
    const pair = document.createElement("div");
    pair.className = "memory-featured-pair";
    secondaryMemories.forEach((memory, secondaryIndex) => {
      pair.appendChild(createMemoryTile(memory, secondaryIndex + 1, "secondary"));
    });
    galleryFeatured.appendChild(pair);
  }

  const additionalMemories = memories.slice(3);
  if (additionalMemories.length) {
    const grid = document.createElement("div");
    grid.className = "memory-gallery-grid";
    additionalMemories.forEach((memory, additionalIndex) => {
      grid.appendChild(createMemoryTile(memory, additionalIndex + 3, "grid"));
    });
    galleryMore.appendChild(grid);
  }

  if (galleryFound) {
    galleryFound.textContent = memories.length + " recuerdos encontrados \u2661";
    galleryFound.hidden = !memoryGalleryStarted;
  }

  galleryFeatured.hidden = !memoryGalleryStarted;
  galleryMore.hidden = !memoryGalleryStarted || !memoryGalleryExpanded || additionalMemories.length === 0;
  galleryToggle.hidden = !memoryGalleryStarted || additionalMemories.length === 0;
  galleryToggle.setAttribute("aria-expanded", String(memoryGalleryExpanded));
  galleryToggle.textContent = memoryGalleryExpanded
    ? "Ocultar recuerdos ^"
    : "Ver " + additionalMemories.length + " recuerdos mas";

  updateGalleryFavorite();
}

function setMemoryGalleryExpanded(expanded) {
  memoryGalleryExpanded = Boolean(expanded) && memories.length > 3;
  renderMemoryGallery();
}

function loadFavoriteMemory() {
  try {
    const storedValue = Number.parseInt(window.localStorage.getItem(MEMORY_FAVORITE_STORAGE_KEY), 10);
    return Number.isInteger(storedValue) && storedValue >= 0 && storedValue < memories.length
      ? storedValue
      : null;
  } catch (error) {
    return null;
  }
}

function saveFavoriteMemory(index) {
  favoriteMemoryIndex = index;

  try {
    window.localStorage.setItem(MEMORY_FAVORITE_STORAGE_KEY, String(index));
  } catch (error) {
    // The favorite remains available for the current visit when storage is unavailable.
  }
}

function refreshMemoryFavoriteButton() {
  if (!memoryFavoriteButton) {
    return;
  }

  const isFavorite = favoriteMemoryIndex === activeMemoryIndex;
  memoryFavoriteButton.classList.toggle("is-selected", isFavorite);
  memoryFavoriteButton.setAttribute("aria-pressed", String(isFavorite));
  memoryFavoriteButton.textContent = isFavorite
    ? "\u2665 Nuestro recuerdo favorito"
    : "\u2661 Guardar como favorito";
}

function setLightboxMemory(index) {
  if (!memories.length) {
    return;
  }

  activeMemoryIndex = (index + memories.length) % memories.length;
  const memory = memories[activeMemoryIndex];

  if (memoryLightboxMedia) {
    const media = createMemoryMedia(memory, false);
    media.className = "memory-lightbox-content";
    memoryLightboxMedia.replaceChildren(media);
  }

  if (memoryLightboxCount) {
    memoryLightboxCount.textContent = "Captura " + formatMemoryNumber(activeMemoryIndex) + " / " + memories.length;
  }

  if (memoryLightboxTitle) {
    memoryLightboxTitle.textContent = memory.title;
  }

  if (memoryLightboxDescription) {
    memoryLightboxDescription.textContent = memory.caption;
  }

  refreshMemoryFavoriteButton();
}

function openMemoryLightbox(index) {
  if (!memoryLightbox || !memories.length) {
    return;
  }

  memoryLightboxLastFocus = document.activeElement;
  setLightboxMemory(index);
  memoryLightbox.hidden = false;
  memoryLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("memory-lightbox-open");

  window.requestAnimationFrame(() => {
    memoryLightbox.classList.add("is-open");
    memoryLightboxClose?.focus();
  });
}

function closeMemoryLightbox() {
  if (!memoryLightbox || memoryLightbox.hidden) {
    return;
  }

  memoryLightbox.classList.remove("is-open");
  memoryLightbox.hidden = true;
  memoryLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("memory-lightbox-open");

  if (memoryLightboxLastFocus && typeof memoryLightboxLastFocus.focus === "function") {
    memoryLightboxLastFocus.focus({ preventScroll: true });
  }
}

function showAdjacentMemory(direction) {
  setLightboxMemory(activeMemoryIndex + direction);
}

function trapMemoryLightboxFocus(event) {
  const focusable = Array.from(memoryLightbox.querySelectorAll("button:not([disabled]), video[controls]"))
    .filter((element) => !element.hidden);

  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleMemoryLightboxKeydown(event) {
  if (!memoryLightbox || memoryLightbox.hidden) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeMemoryLightbox();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    showAdjacentMemory(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showAdjacentMemory(1);
  } else if (event.key === "Tab") {
    trapMemoryLightboxFocus(event);
  }
}

function initializeMemoryGallery() {
  if (!memoryAlbum || !memories.length) {
    return;
  }

  favoriteMemoryIndex = loadFavoriteMemory();
  renderMemoryGallery();

  const revealGallery = () => {
    if (memoryGalleryStarted) {
      return;
    }

    memoryGalleryStarted = true;
    window.setTimeout(() => {
      if (galleryLoading) {
        galleryLoading.hidden = true;
      }
      memoryAlbum.classList.add("is-ready");
      renderMemoryGallery();
    }, 760);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        currentObserver.disconnect();
        revealGallery();
      }
    }, { threshold: 0.12 });
    observer.observe(memoryAlbum);
  } else {
    revealGallery();
  }

  galleryToggle?.addEventListener("click", () => {
    setMemoryGalleryExpanded(!memoryGalleryExpanded);
  });

  memoryLightboxClose?.addEventListener("click", closeMemoryLightbox);
  memoryLightboxPrevious?.addEventListener("click", () => showAdjacentMemory(-1));
  memoryLightboxNext?.addEventListener("click", () => showAdjacentMemory(1));
  memoryFavoriteButton?.addEventListener("click", () => {
    saveFavoriteMemory(activeMemoryIndex);
    renderMemoryGallery();
    refreshMemoryFavoriteButton();
    memoryFavoriteButton.classList.remove("is-saved");
    void memoryFavoriteButton.offsetWidth;
    memoryFavoriteButton.classList.add("is-saved");
  });

  memoryLightbox?.addEventListener("click", (event) => {
    if (event.target === memoryLightbox) {
      closeMemoryLightbox();
    }
  });

  memoryLightboxMedia?.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    memoryTouchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }, { passive: true });

  memoryLightboxMedia?.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    if (!memoryTouchStart || !touch) {
      return;
    }

    const horizontalDistance = touch.clientX - memoryTouchStart.x;
    const verticalDistance = touch.clientY - memoryTouchStart.y;
    memoryTouchStart = null;

    if (Math.abs(horizontalDistance) < 70 || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) {
      return;
    }

    showAdjacentMemory(horizontalDistance < 0 ? 1 : -1);
  }, { passive: true });

  window.addEventListener("keydown", handleMemoryLightboxKeydown);
}

function setInventoryMessage(message) {
  if (inventoryMessage) {
    inventoryMessage.textContent = message;
  }
}

function unlockInventoryItem(itemId) {
  const slot = document.querySelector('[data-inventory-item="' + itemId + '"]');
  const details = inventoryDetails[itemId];

  if (!slot || !details) {
    return;
  }

  slot.classList.add("is-unlocked");
  slot.disabled = false;
  slot.title = details.label;
  slot.setAttribute("aria-label", details.label);
  setInventoryMessage(details.message);
  updateTreasureChest();
}

function loadTreasureProgress() {
  try {
    const stored = window.localStorage.getItem(TREASURE_PROGRESS_STORAGE_KEY);
    if (!stored) {
      return { opened: false };
    }

    const parsed = JSON.parse(stored);
    return { opened: Boolean(parsed && parsed.opened) };
  } catch (error) {
    return { opened: false };
  }
}

function saveTreasureProgress() {
  try {
    window.localStorage.setItem(TREASURE_PROGRESS_STORAGE_KEY, JSON.stringify({ opened: treasureOpened }));
  } catch (error) {
    // Reading the letter still works when storage is unavailable.
  }
}

function getTreasureRequiredItemIds() {
  return Object.keys(inventoryDetails);
}

function getCollectedTreasureItemIds() {
  return getTreasureRequiredItemIds().filter((itemId) => {
    const slot = document.querySelector('[data-inventory-item="' + itemId + '"]');
    return Boolean(slot && slot.classList.contains("is-unlocked"));
  });
}

function isTreasureReady() {
  const requiredItemIds = getTreasureRequiredItemIds();
  return requiredItemIds.length > 0 && getCollectedTreasureItemIds().length === requiredItemIds.length;
}

function updateTreasureChest() {
  if (!treasureSection || !treasureChestStage || !treasureChestButton) {
    return;
  }

  const requiredItemIds = getTreasureRequiredItemIds();
  const collectedItemIds = getCollectedTreasureItemIds();
  const total = requiredItemIds.length;
  const collected = collectedItemIds.length;
  const ready = total > 0 && collected === total;
  const canReadLetter = ready || treasureOpened;

  treasureSection.classList.toggle("is-complete", canReadLetter);
  treasureChestStage.classList.toggle("is-ready", ready && !treasureOpened);
  treasureChestStage.classList.toggle("is-open", treasureOpened);

  if (treasureProgress) {
    treasureProgress.textContent = treasureOpened
      ? "Tesoro guardado para los dos"
      : "Objetos reunidos: " + collected + " / " + total;
  }

  if (treasureOpenButton) {
    treasureOpenButton.hidden = !canReadLetter;
    treasureOpenButton.textContent = treasureOpened ? "VOLVER A LEER LA CARTITA" : "ABRIR COFRE";
  }

  if (treasureOpened) {
    if (treasureChestButtonLabel) {
      treasureChestButtonLabel.textContent = "Carta guardada";
    }
    if (treasureChestTitle) {
      treasureChestTitle.textContent = "Nuestro tesoro ya est\u00e1 abierto";
    }
    if (treasureStatus) {
      treasureStatus.textContent = "La cartita qued\u00f3 guardada aqu\u00ed para que podamos volver a leerla cuando queramos.";
    }
    treasureChestButton.setAttribute("aria-label", "Volver a leer la carta final");
    treasureChestButton.title = "Volver a leer la carta final";
    return;
  }

  if (ready) {
    if (treasureChestButtonLabel) {
      treasureChestButtonLabel.textContent = "Tesoro desbloqueado";
    }
    if (treasureChestTitle) {
      treasureChestTitle.textContent = "Ya reuniste todo lo que construimos juntos";
    }
    if (treasureStatus) {
      treasureStatus.textContent = "El cofrecito ya est\u00e1 listo. Hay una carta esper\u00e1ndote adentro.";
    }
    treasureChestButton.setAttribute("aria-label", "Abrir el cofre de nuestra historia");
    treasureChestButton.title = "Abrir cofre";
    return;
  }

  const missing = Math.max(total - collected, 0);
  if (treasureChestButtonLabel) {
    treasureChestButtonLabel.textContent = "Cofre cerrado";
  }
  if (treasureChestTitle) {
    treasureChestTitle.textContent = "Todav\u00eda hay cositas por descubrir";
  }
  if (treasureStatus) {
    treasureStatus.textContent = missing === 1
      ? "Falta un hallazgo para completar todo nuestro mundo."
      : "Este cofrecito se abrir\u00e1 cuando completes todo nuestro mundo.";
  }
  treasureChestButton.setAttribute("aria-label", "Cofre cerrado: " + collected + " de " + total + " objetos reunidos");
  treasureChestButton.title = "Cofre cerrado";
}

function renderTreasureLetter() {
  if (!treasureLetterCopy || !treasureLetterTemplate) {
    return;
  }

  const source = treasureLetterTemplate.content.textContent.trim();
  const paragraphs = source.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const fragment = document.createDocumentFragment();

  paragraphs.forEach((paragraph, index) => {
    const element = document.createElement("p");
    element.className = "treasure-letter-paragraph";
    if (index === 0) {
      element.classList.add("treasure-letter-paragraph--title");
    }
    if (index === 1) {
      element.classList.add("treasure-letter-paragraph--salutation");
    }

    paragraph.split(/\r?\n/).forEach((line, lineIndex) => {
      if (lineIndex > 0) {
        element.append(document.createElement("br"));
      }
      element.append(document.createTextNode(line.trim()));
    });
    fragment.append(element);
  });

  treasureLetterCopy.replaceChildren(fragment);
}

function initializeTreasureLetterReveal() {
  const paragraphs = Array.from(document.querySelectorAll(".treasure-letter-paragraph"));
  if (paragraphs.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    paragraphs.forEach((paragraph) => paragraph.classList.add("is-visible"));
    return;
  }

  treasureLetterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  paragraphs.forEach((paragraph) => treasureLetterObserver.observe(paragraph));
}

function revealTreasureLetter(shouldFocus) {
  if (!treasureLetter) {
    return;
  }

  const wasHidden = treasureLetter.hidden;
  treasureLetter.hidden = false;
  window.requestAnimationFrame(() => treasureLetter.classList.add("is-revealed"));

  if (shouldFocus) {
    window.setTimeout(() => {
      treasureLetter.scrollIntoView({ behavior: "smooth", block: "start" });
      treasureLetter.focus({ preventScroll: true });
    }, wasHidden ? 360 : 80);
  }
}

function hintTreasureLocked() {
  if (!treasureChestStage || !treasureStatus) {
    return;
  }

  const required = getTreasureRequiredItemIds().length;
  const collected = getCollectedTreasureItemIds().length;
  treasureChestStage.classList.remove("is-hinting");
  void treasureChestStage.offsetWidth;
  treasureChestStage.classList.add("is-hinting");
  treasureStatus.textContent = "Todav\u00eda faltan " + Math.max(required - collected, 0) + " cositas por descubrir en nuestra aventura.";
  window.setTimeout(() => treasureChestStage.classList.remove("is-hinting"), 580);
}

function openTreasureChest() {
  if (treasureOpened) {
    revealTreasureLetter(true);
    return;
  }

  if (!isTreasureReady()) {
    hintTreasureLocked();
    return;
  }

  if (!treasureChestStage || treasureChestStage.classList.contains("is-opening")) {
    return;
  }

  treasureChestStage.classList.add("is-opening");
  if (treasureStatus) {
    treasureStatus.textContent = "El cofre se abre despacito...";
  }
  playSoundEffect(xpSound, 0.38);
  spawnSparkleBlocks(8);

  window.setTimeout(() => {
    treasureOpened = true;
    saveTreasureProgress();
    treasureChestStage.classList.remove("is-opening");
    updateTreasureChest();
    revealTreasureLetter(true);
  }, 620);
}

function initializeTreasure() {
  if (!treasureSection) {
    return;
  }

  renderTreasureLetter();
  initializeTreasureLetterReveal();
  treasureChestButton?.addEventListener("click", openTreasureChest);
  treasureOpenButton?.addEventListener("click", openTreasureChest);
  updateTreasureChest();
}

function initializeInventory() {
  document.querySelectorAll("[data-inventory-item]").forEach((slot) => {
    slot.addEventListener("click", () => {
      const details = inventoryDetails[slot.dataset.inventoryItem];
      if (slot.classList.contains("is-unlocked") && details) {
        document.querySelectorAll("[data-inventory-item]").forEach((item) => item.classList.remove("is-active"));
        slot.classList.add("is-active");
        setInventoryMessage(details.message);
      }
    });
  });
}

function setInventoryDrawer(isOpen) {
  if (!inventoryDrawer || !inventoryToggle) {
    return;
  }

  inventoryDrawer.classList.toggle("is-open", isOpen);
  inventoryDrawer.setAttribute("aria-hidden", String(!isOpen));
  inventoryDrawer.inert = !isOpen;
  inventoryToggle.setAttribute("aria-expanded", String(isOpen));
  inventoryToggle.setAttribute("aria-label", isOpen ? "Cerrar inventario" : "Abrir inventario");
  inventoryToggle.title = isOpen ? "Cerrar inventario" : "Abrir inventario";
  if (inventoryScrim) {
    inventoryScrim.setAttribute("aria-hidden", String(!isOpen));
    inventoryScrim.inert = !isOpen;
  }
  document.body.classList.toggle("inventory-drawer-open", isOpen);
}

function initializeInventoryDrawer() {
  if (!inventoryDrawer || !inventoryToggle || !inventoryClose) {
    return;
  }

  inventoryToggle.addEventListener("click", () => {
    const isOpen = !inventoryDrawer.classList.contains("is-open");
    setInventoryDrawer(isOpen);
    if (isOpen) {
      inventoryClose.focus();
    }
  });

  inventoryClose.addEventListener("click", () => {
    setInventoryDrawer(false);
    inventoryToggle.focus();
  });

  if (inventoryScrim) {
    inventoryScrim.addEventListener("click", () => {
      setInventoryDrawer(false);
      inventoryToggle.focus();
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && inventoryDrawer.classList.contains("is-open")) {
      setInventoryDrawer(false);
      inventoryToggle.focus();
    }
  });
}

function initializeNavigation() {
  if (!topbar || navSectionLinks.length === 0) {
    return;
  }

  const sectionLinks = navSectionLinks
    .map((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActiveLink = (sectionId) => {
    sectionLinks.forEach(({ link, section }) => {
      const isActive = section.id === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const syncNavigation = () => {
    const topbarBottom = topbar.getBoundingClientRect().bottom;
    const activeThreshold = Math.max(topbarBottom + 88, window.innerHeight * 0.24);
    topbar.classList.toggle("is-light", window.scrollY > 92);

    let activeSection = "inicio";
    sectionLinks.forEach(({ section }) => {
      if (section.getBoundingClientRect().top <= activeThreshold) {
        activeSection = section.id;
      }
    });
    setActiveLink(activeSection);
  };

  window.addEventListener("scroll", syncNavigation, { passive: true });
  window.addEventListener("resize", syncNavigation);
  syncNavigation();
}

function initializeBuildJourney() {
  if (!buildJourney || buildCards.length === 0) {
    return;
  }

  buildCards.forEach((card, index) => {
    card.style.setProperty("--build-order", String(index));
  });

  if (!("IntersectionObserver" in window)) {
    buildCards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  buildJourney.classList.add("is-enhanced");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
  );

  buildCards.forEach((card) => observer.observe(card));
}

function playSoundEffect(sound, volume) {
  if (!sound) {
    return;
  }

  try {
    sound.volume = volume;
    sound.currentTime = 0;
    const playAttempt = sound.play();
    if (playAttempt) {
      playAttempt.catch(() => {});
    }
  } catch (error) {
    // Audio can be unavailable until the first user interaction.
  }
}

function startAmbientMusic() {
  if (!ambientMusic || isMusicMuted) {
    return Promise.resolve(false);
  }

  ambientMusic.volume = 0.18;
  ambientMusic.muted = false;

  try {
    const playAttempt = ambientMusic.play();

    if (playAttempt) {
      return playAttempt
        .then(() => true)
        .catch(() => false);
    }
  } catch (error) {
    return Promise.resolve(false);
  }

  return Promise.resolve(!ambientMusic.paused);
}

function setMusicMuted(isMuted) {
  isMusicMuted = isMuted;

  if (ambientMusic) {
    ambientMusic.muted = isMuted;
    if (isMuted) {
      ambientMusic.pause();
    } else {
      startAmbientMusic();
    }
  }

  if (audioToggle) {
    audioToggle.classList.toggle("is-muted", isMuted);
    audioToggle.setAttribute("aria-pressed", String(isMuted));
    audioToggle.setAttribute("aria-label", isMuted ? "Activar m\u00fasica" : "Silenciar m\u00fasica");
    audioToggle.title = isMuted ? "Activar m\u00fasica" : "Silenciar m\u00fasica";
  }
}

function initializeAudio() {
  if (xpSound) {
    xpSound.volume = 0.48;
  }

  if (creeperExplosionSound) {
    creeperExplosionSound.volume = 0.62;
  }

  if (audioToggle) {
    audioToggle.addEventListener("click", () => setMusicMuted(!isMusicMuted));
  }

  if (!ambientMusic) {
    return;
  }

  ambientMusic.autoplay = true;
  ambientMusic.preload = "auto";
  ambientMusic.load();

  const requestAmbientMusic = () => {
    startAmbientMusic();
  };

  ambientMusic.addEventListener("canplay", requestAmbientMusic, { once: true });
  ambientMusic.addEventListener("loadeddata", requestAmbientMusic, { once: true });
  window.addEventListener("pageshow", requestAmbientMusic);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      requestAmbientMusic();
    }
  });

  requestAmbientMusic();

  const wakeAmbientMusic = () => {
    startAmbientMusic().then((hasStarted) => {
      if (hasStarted) {
        document.removeEventListener("pointerdown", wakeAmbientMusic, true);
        document.removeEventListener("touchstart", wakeAmbientMusic, true);
        document.removeEventListener("keydown", wakeAmbientMusic, true);
      }
    });
  };

  document.addEventListener("pointerdown", wakeAmbientMusic, { capture: true });
  document.addEventListener("touchstart", wakeAmbientMusic, { capture: true, passive: true });
  document.addEventListener("keydown", wakeAmbientMusic, { capture: true });
}

function getDefaultNetherProgress() {
  return {
    creeperKeyObtained: false,
    netherUnlocked: false,
    netherPickaxeObtained: false,
    netherGoldFound: false,
    netherBookUnlocked: false,
    netherGoldBlockIndex: null,
    netherBlockHits: {}
  };
}

function loadNetherProgress() {
  const defaults = getDefaultNetherProgress();

  try {
    const savedProgress = JSON.parse(window.localStorage.getItem(NETHER_PROGRESS_STORAGE_KEY));

    if (!savedProgress || typeof savedProgress !== "object") {
      return defaults;
    }

    return {
      ...defaults,
      ...savedProgress,
      netherGoldBlockIndex: Number.isInteger(savedProgress.netherGoldBlockIndex)
        ? savedProgress.netherGoldBlockIndex
        : null,
      netherBlockHits: savedProgress.netherBlockHits && typeof savedProgress.netherBlockHits === "object"
        ? savedProgress.netherBlockHits
        : {}
    };
  } catch (error) {
    return defaults;
  }
}

function saveNetherProgress() {
  try {
    window.localStorage.setItem(NETHER_PROGRESS_STORAGE_KEY, JSON.stringify(netherProgress));
  } catch (error) {
    // The adventure still works when a browser has local storage disabled.
  }
}

function getNetherOres() {
  return Array.from(document.querySelectorAll("[data-nether-ore]"));
}

function getNetherGoldIndex() {
  const savedIndex = netherProgress.netherGoldBlockIndex;

  if (!Number.isInteger(savedIndex) || savedIndex < 0 || savedIndex >= NETHER_BLOCK_TOTAL) {
    netherProgress.netherGoldBlockIndex = Math.floor(Math.random() * NETHER_BLOCK_TOTAL);
    saveNetherProgress();
  }

  return netherProgress.netherGoldBlockIndex;
}

function setNetherStatus(message) {
  if (netherStatus) {
    netherStatus.textContent = message;
  }
}

function updateNetherQuickInventory() {
  const itemStates = {
    key: netherProgress.creeperKeyObtained,
    pickaxe: netherProgress.netherPickaxeObtained,
    gold: netherProgress.netherGoldFound,
    book: netherProgress.netherBookUnlocked
  };

  document.querySelectorAll("[data-nether-quick-item]").forEach((slot) => {
    const itemId = slot.dataset.netherQuickItem;
    slot.classList.toggle("is-collected", Boolean(itemStates[itemId]));
    slot.classList.toggle("is-used", itemId === "key" && netherProgress.netherUnlocked);
  });
}

function restoreNetherProgress() {
  netherKeyReady = Boolean(netherProgress.creeperKeyObtained);
  netherUnlocked = Boolean(netherProgress.netherUnlocked);

  if (netherProgress.creeperKeyObtained) {
    unlockInventoryItem("shared-key");
  }

  if (netherProgress.netherPickaxeObtained) {
    unlockInventoryItem("nether-pickaxe");
  }

  if (netherProgress.netherGoldFound) {
    unlockInventoryItem("nether-gold");
  }

  if (netherProgress.netherBookUnlocked) {
    unlockInventoryItem("nether-book");
  }
}

function updateNetherAccess() {
  if (!netherSection || !netherEnter) {
    return;
  }

  const portalIsOpen = Boolean(netherProgress.netherUnlocked);

  netherSection.classList.toggle("has-key", netherKeyReady);
  netherSection.classList.toggle("is-locked", !netherKeyReady);
  netherSection.classList.toggle("is-open", portalIsOpen);
  netherEnter.classList.toggle("is-disabled", !netherKeyReady);
  netherEnter.setAttribute("aria-disabled", String(!netherKeyReady));

  if (netherGate) {
    netherGate.classList.toggle("has-key", netherKeyReady);
    netherGate.classList.toggle("is-open", portalIsOpen);
  }

  if (netherNavLink) {
    netherNavLink.classList.toggle("is-locked", !netherKeyReady);
    netherNavLink.setAttribute("aria-disabled", String(!netherKeyReady));
  }

  if (!netherKeyReady) {
    if (netherAccessLabel) {
      netherAccessLabel.textContent = "Portal sellado";
    }
    if (netherGateTitle) {
      netherGateTitle.textContent = "Una pista entre las brasas";
    }
    if (netherGateStatus) {
      netherGateStatus.textContent = "Parece que algo falta... tal vez cierto Creeper tenga la respuesta.";
    }
    if (netherEnterText) {
      netherEnterText.textContent = "Intentar entrar";
    }
    if (netherPortalAction) {
      netherPortalAction.textContent = "Portal bloqueado";
    }
    if (netherPortalButton) {
      netherPortalButton.setAttribute("aria-label", "Portal del Nether bloqueado");
    }
  } else if (!portalIsOpen) {
    if (netherAccessLabel) {
      netherAccessLabel.textContent = "Llave encontrada";
    }
    if (netherGateTitle) {
      netherGateTitle.textContent = "La llave reconoce el portal";
    }
    if (netherGateStatus) {
      netherGateStatus.textContent = "La llave de los dos ya sabe el camino. Toca el portal para encenderlo juntos.";
    }
    if (netherEnterText) {
      netherEnterText.textContent = "Usar la llave";
    }
    if (netherPortalAction) {
      netherPortalAction.textContent = "Encender portal";
    }
    if (netherPortalButton) {
      netherPortalButton.setAttribute("aria-label", "Usar la llave para encender el portal del Nether");
    }
  } else {
    if (netherAccessLabel) {
      netherAccessLabel.textContent = "Portal encendido";
    }
    if (netherGateTitle) {
      netherGateTitle.textContent = "El camino ya est\u00e1 abierto";
    }
    if (netherGateStatus) {
      netherGateStatus.textContent = "Las brasas nos dejaron pasar. El siguiente cap\u00edtulo est\u00e1 del otro lado.";
    }
    if (netherEnterText) {
      netherEnterText.textContent = "Cruzar el portal";
    }
    if (netherPortalAction) {
      netherPortalAction.textContent = "Cruzar juntos";
    }
    if (netherPortalButton) {
      netherPortalButton.setAttribute("aria-label", "Cruzar al Nether");
    }
  }

  updateNetherQuickInventory();
}

function unlockNetherAccess() {
  netherProgress.creeperKeyObtained = true;
  netherKeyReady = true;
  saveNetherProgress();
  unlockInventoryItem("shared-key");
  updateNetherAccess();
}

function renderNetherMineField() {
  if (!netherOreField) {
    return;
  }

  const goldIndex = getNetherGoldIndex();
  const field = document.createDocumentFragment();

  for (let index = 0; index < NETHER_BLOCK_TOTAL; index += 1) {
    const hits = Number(netherProgress.netherBlockHits[index] || 0);
    const isGoldBlock = index === goldIndex;
    const block = document.createElement("button");

    block.className = "nether-ore";
    block.type = "button";
    block.dataset.netherOre = String(index);
    block.dataset.hits = String(hits);
    block.setAttribute("aria-label", "Roca del Nether " + (index + 1));

    if (hits > 0) {
      block.classList.add("is-cracked");
    }

    if (hits >= 2) {
      block.classList.add("is-broken");
      block.disabled = true;
    }

    if (netherProgress.netherGoldFound) {
      block.disabled = true;
      block.classList.add("is-finished");

      if (isGoldBlock) {
        block.classList.remove("is-broken");
        block.classList.add("is-gold-revealed");
        block.setAttribute("aria-label", "Oro del Nether recogido");
      }
    } else if (isGoldBlock && hits >= 2) {
      block.classList.add("is-gold-revealed");
      block.setAttribute("aria-label", "Oro del Nether descubierto");
    }

    block.addEventListener("click", () => mineNetherOre(block));
    field.appendChild(block);
  }

  netherOreField.replaceChildren(field);
}

function updateNetherMiningUi() {
  const goldIndex = getNetherGoldIndex();
  const goldIsRevealed = !netherProgress.netherGoldFound && Number(netherProgress.netherBlockHits[goldIndex] || 0) >= 2;

  if (netherOreCount) {
    netherOreCount.textContent = netherProgress.netherGoldFound ? "1" : "0";
  }

  if (netherMine) {
    netherMine.classList.toggle("has-pickaxe", netherPickaxeSelected);
    netherMine.classList.toggle("is-complete", netherProgress.netherBookUnlocked);
  }

  if (netherPickaxe) {
    netherPickaxe.classList.toggle("is-collected", netherProgress.netherPickaxeObtained);
    netherPickaxe.classList.toggle("is-selected", netherPickaxeSelected);
    netherPickaxe.setAttribute("aria-pressed", String(netherPickaxeSelected));
  }

  if (netherPickaxeLabel) {
    if (!netherProgress.netherPickaxeObtained) {
      netherPickaxeLabel.textContent = "Tomar pico";
    } else if (netherPickaxeSelected) {
      netherPickaxeLabel.textContent = "Pico equipado";
    } else {
      netherPickaxeLabel.textContent = "Equipar pico";
    }
  }

  if (netherGoldDiscovery) {
    netherGoldDiscovery.hidden = !goldIsRevealed;
  }

  if (netherBookReward) {
    netherBookReward.hidden = !netherProgress.netherBookUnlocked;
  }

  renderNetherMineField();
  updateNetherQuickInventory();
}

function setNetherPickaxeSelected(isSelected) {
  netherPickaxeSelected = Boolean(isSelected && netherProgress.netherPickaxeObtained && !netherProgress.netherGoldFound);
  updateNetherMiningUi();
}

function takeNetherPickaxe() {
  if (!netherUnlocked) {
    return;
  }

  if (netherProgress.netherGoldFound) {
    setNetherStatus("La veta ya entreg\u00f3 su tesoro. El libro qued\u00f3 guardado para nuestra siguiente aventura.");
    return;
  }

  if (!netherProgress.netherPickaxeObtained) {
    netherProgress.netherPickaxeObtained = true;
    saveNetherProgress();
    unlockInventoryItem("nether-pickaxe");
    setNetherPickaxeSelected(true);
    setNetherStatus("Pico listo. Dale dos golpes a cada roca hasta encontrar lo que brilla.");
    return;
  }

  setNetherPickaxeSelected(!netherPickaxeSelected);
  setNetherStatus(netherPickaxeSelected ? "Pico equipado. Ahora la veta puede contarnos su secreto." : "El pico qued\u00f3 guardado en el inventario de expedici\u00f3n.");
}

function spawnNetherMiningParticles(block, gold) {
  if (!block) {
    return;
  }

  const particleLayer = document.createElement("span");
  particleLayer.className = "nether-mining-particles" + (gold ? " is-gold" : "");

  for (let index = 0; index < 5; index += 1) {
    const particle = document.createElement("span");
    particle.style.setProperty("--particle-x", String((index - 2) * 12) + "px");
    particle.style.setProperty("--particle-y", String(-12 - (index % 2) * 13) + "px");
    particleLayer.appendChild(particle);
  }

  block.appendChild(particleLayer);
  window.setTimeout(() => particleLayer.remove(), 620);
}

function revealNetherGold(block) {
  if (netherProgress.netherGoldFound) {
    return;
  }

  block?.classList.add("is-gold-revealed");
  updateNetherMiningUi();
  setNetherStatus("Lo encontraste. Ahora toca el oro para guardarlo con nosotros.");
  playSoundEffect(xpSound, 0.42);
  spawnSparkleBlocks(6);
}

function showNetherReward() {
  if (!netherProgress.netherBookUnlocked) {
    netherProgress.netherBookUnlocked = true;
    saveNetherProgress();
    unlockInventoryItem("nether-book");
  }

  updateNetherMiningUi();
  setNetherStatus("Oro encontrado y libro desbloqueado. Esta aventura ya qued\u00f3 escrita.");
  playSoundEffect(xpSound, 0.52);
  spawnSparkleBlocks(10);

  if (netherRewardOverlay) {
    netherRewardOverlay.hidden = false;
    netherSection?.classList.add("has-reward");
    window.setTimeout(() => netherRewardDismiss?.focus(), 240);
  }
}

function collectNetherGold() {
  const goldIndex = getNetherGoldIndex();

  if (netherProgress.netherGoldFound || Number(netherProgress.netherBlockHits[goldIndex] || 0) < 2) {
    return;
  }

  netherProgress.netherGoldFound = true;
  netherProgress.netherBookUnlocked = true;
  netherPickaxeSelected = false;
  saveNetherProgress();
  unlockInventoryItem("nether-gold");
  unlockInventoryItem("nether-book");

  if (netherGoldDiscovery) {
    netherGoldDiscovery.classList.add("is-collected");
  }

  setNetherStatus("El oro salt\u00f3 al inventario. Parece que nos quiere mostrar algo m\u00e1s.");
  playSoundEffect(xpSound, 0.48);
  spawnSparkleBlocks(8);

  window.setTimeout(() => {
    if (netherGoldDiscovery) {
      netherGoldDiscovery.classList.remove("is-collected");
      netherGoldDiscovery.hidden = true;
    }
    showNetherReward();
  }, 560);
}

function mineNetherOre(ore) {
  if (!netherPickaxeSelected) {
    setNetherStatus("Primero toma el pico para poder abrir la roca del Nether.");
    return;
  }

  if (ore.disabled || netherProgress.netherGoldFound) {
    return;
  }

  const index = Number(ore.dataset.netherOre);
  const hits = Math.min(Number(netherProgress.netherBlockHits[index] || 0) + 1, 2);
  const isGoldBlock = index === getNetherGoldIndex();

  netherProgress.netherBlockHits[index] = hits;
  saveNetherProgress();
  ore.classList.remove("is-struck");
  window.requestAnimationFrame(() => ore.classList.add("is-struck"));
  spawnNetherMiningParticles(ore, isGoldBlock && hits === 2);

  if (hits === 1) {
    ore.classList.add("is-cracked");
    ore.setAttribute("aria-label", "Roca del Nether agrietada. Falta un golpe.");
    setNetherStatus("La roca se agriet\u00f3. Un golpe m\u00e1s puede revelar algo.");
    return;
  }

  ore.classList.add("is-broken");
  ore.disabled = true;
  ore.setAttribute("aria-label", isGoldBlock ? "Oro del Nether descubierto" : "Roca del Nether rota");

  if (isGoldBlock) {
    window.setTimeout(() => revealNetherGold(ore), 340);
    return;
  }

  setNetherStatus("La roca se rompi\u00f3. Sigue buscando: hay algo escondido entre las brasas.");
}

function showNetherMission() {
  if (!netherMine) {
    return;
  }

  if (netherArrivalTimer) {
    window.clearTimeout(netherArrivalTimer);
  }

  if (netherProgress.netherBookUnlocked) {
    netherMine.hidden = false;
    updateNetherMiningUi();
    setNetherStatus("Misi\u00f3n completada. El oro y el libro siguen guardados en nuestro inventario.");
    window.setTimeout(() => netherMine.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
    return;
  }

  if (netherArrival) {
    netherArrival.hidden = false;
  }

  netherSection?.classList.add("is-arriving");
  netherMine.hidden = true;

  netherArrivalTimer = window.setTimeout(() => {
    if (netherArrival) {
      netherArrival.hidden = true;
    }
    netherSection?.classList.remove("is-arriving");
    netherMine.hidden = false;
    updateNetherMiningUi();
    setNetherStatus(netherProgress.netherPickaxeObtained ? "El pico ya est\u00e1 contigo. Equ\u00edpalo para seguir minando." : "El pico est\u00e1 esperando junto a la veta.");
    netherMine.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1600);
}

function showLockedNetherHint() {
  if (!netherGate) {
    return;
  }

  netherGate.classList.remove("is-hinting");
  void netherGate.offsetWidth;
  netherGate.classList.add("is-hinting");
  if (netherGateStatus) {
    netherGateStatus.textContent = "Parece que algo falta...";
  }

  window.setTimeout(() => {
    if (!netherKeyReady && netherGateStatus) {
      netherGateStatus.textContent = "Tal vez cierto Creeper tenga la respuesta.";
    }
    netherGate.classList.remove("is-hinting");
  }, 1080);
}

function enterNether() {
  if (!netherKeyReady) {
    showLockedNetherHint();
    return;
  }

  if (netherProgress.netherUnlocked) {
    showNetherMission();
    return;
  }

  if (!netherSection || !netherGate || netherGate.classList.contains("is-activating")) {
    return;
  }

  if (netherPortalTimer) {
    window.clearTimeout(netherPortalTimer);
  }

  netherSection.classList.add("is-activating");
  netherGate.classList.add("is-activating");
  if (netherGateStatus) {
    netherGateStatus.textContent = "La llave encuentra su lugar en el portal...";
  }

  window.setTimeout(() => {
    if (netherGateStatus) {
      netherGateStatus.textContent = "Las brasas despiertan y el portal comienza a brillar.";
    }
  }, 620);

  netherPortalTimer = window.setTimeout(() => {
    netherProgress.netherUnlocked = true;
    netherUnlocked = true;
    saveNetherProgress();
    updateNetherAccess();
    if (netherGateStatus) {
      netherGateStatus.textContent = "El portal est\u00e1 encendido. Cruzamos juntos.";
    }

    window.setTimeout(() => {
      netherSection.classList.remove("is-activating");
      netherGate.classList.remove("is-activating");
      showNetherMission();
    }, 520);
  }, 1480);
}

function initializeNether() {
  restoreNetherProgress();
  updateNetherAccess();
  renderNetherMineField();

  if (netherProgress.netherBookUnlocked && netherMine) {
    netherMine.hidden = false;
    updateNetherMiningUi();
  }

  if (netherNavLink) {
    netherNavLink.addEventListener("click", (event) => {
      if (!netherKeyReady) {
        event.preventDefault();
        netherSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        showLockedNetherHint();
      }
    });
  }

  if (netherPortalButton) {
    netherPortalButton.addEventListener("click", enterNether);
  }

  if (netherEnter) {
    netherEnter.addEventListener("click", enterNether);
  }

  if (netherPickaxe) {
    netherPickaxe.addEventListener("click", takeNetherPickaxe);
  }

  if (netherGoldPickup) {
    netherGoldPickup.addEventListener("click", collectNetherGold);
  }

  if (netherRewardDismiss) {
    netherRewardDismiss.addEventListener("click", () => {
      if (netherRewardOverlay) {
        netherRewardOverlay.hidden = true;
      }
      netherSection?.classList.remove("has-reward");
      setInventoryMessage("El libro del Nether ya est\u00e1 guardado para nuestro siguiente cap\u00edtulo.");
    });
  }

}

let introSlideIndex = 0;
let introTypingTimers = [];

function clearIntroTyping() {
  introTypingTimers.forEach((timer) => window.clearTimeout(timer));
  introTypingTimers = [];
}

function typeIntroSlide(slide) {
  clearIntroTyping();

  if (!slide) {
    return;
  }

  const textElements = slide.querySelectorAll(".intro-line, .intro-continuara, .intro-final-copy h2");
  let fallbackDelay = 160;

  textElements.forEach((element) => {
    const originalText = element.dataset.introText || element.textContent.trim();
    const words = originalText.split(/\s+/).filter(Boolean);
    const configuredDelay = Number.parseInt(element.style.getPropertyValue("--line-delay"), 10);
    const startDelay = Number.isFinite(configuredDelay) ? configuredDelay + 150 : fallbackDelay;

    element.dataset.introText = originalText;
    element.textContent = "";
    element.classList.add("is-typing");

    words.forEach((word, index) => {
      const timer = window.setTimeout(() => {
        element.textContent += (index === 0 ? "" : " ") + word;

        if (index === words.length - 1) {
          element.classList.remove("is-typing");
        }
      }, startDelay + index * 46);

      introTypingTimers.push(timer);
    });

    fallbackDelay = startDelay + words.length * 46 + 190;
  });
}

function setIntroSlide(nextIndex) {
  if (!introExperience || introSlides.length === 0) {
    return;
  }

  const lastIndex = introSlides.length - 1;
  introSlideIndex = Math.max(0, Math.min(nextIndex, lastIndex));

  introSlides.forEach((slide, index) => {
    const isActive = index === introSlideIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  introExperience.dataset.slide = String(introSlideIndex);

  if (introPrevious) {
    introPrevious.disabled = introSlideIndex === 0;
  }

  if (introNext) {
    introNext.disabled = introSlideIndex === lastIndex;
  }

  if (introProgress) {
    introProgress.textContent = "Capitulo " + (introSlideIndex + 1) + " de " + introSlides.length;
  }

  typeIntroSlide(introSlides[introSlideIndex]);
}

function openIntroStory() {
  if (!introExperience || introExperience.dataset.phase !== "book") {
    return;
  }

  startAmbientMusic();
  introExperience.dataset.phase = "opening";
  window.setTimeout(() => {
    if (!introExperience || introExperience.dataset.phase !== "opening") {
      return;
    }

    introExperience.dataset.phase = "story";
    setIntroSlide(0);
  }, 680);
}

function finishIntroStory() {
  if (!introExperience || introExperience.dataset.phase === "closing") {
    return;
  }

  introExperience.dataset.phase = "closing";
  clearIntroTyping();
  playSoundEffect(xpSound, 0.48);
  window.scrollTo({ top: 0, behavior: "auto" });

  window.setTimeout(() => {
    const main = document.querySelector("main");

    introExperience.hidden = true;
    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-complete");

    if (main) {
      main.inert = false;
    }

    if (topbar) {
      topbar.inert = false;
    }

    if (inventoryToggle) {
      inventoryToggle.inert = false;
    }
  }, 640);
}

function initializeIntro() {
  if (!introExperience || !introBookTrigger || introSlides.length === 0) {
    return;
  }

  const main = document.querySelector("main");

  if (main) {
    main.inert = true;
  }

  if (topbar) {
    topbar.inert = true;
  }

  if (inventoryToggle) {
    inventoryToggle.inert = true;
  }

  setIntroSlide(0);

  introBookTrigger.addEventListener("click", openIntroStory);

  if (introPrevious) {
    introPrevious.addEventListener("click", () => setIntroSlide(introSlideIndex - 1));
  }

  if (introNext) {
    introNext.addEventListener("click", () => setIntroSlide(introSlideIndex + 1));
  }

  if (introEnter) {
    introEnter.addEventListener("click", finishIntroStory);
  }

  window.addEventListener("keydown", (event) => {
    if (!introExperience || introExperience.dataset.phase !== "story") {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setIntroSlide(introSlideIndex - 1);
    }

    if (event.key === "ArrowRight" && introSlideIndex < introSlides.length - 1) {
      event.preventDefault();
      setIntroSlide(introSlideIndex + 1);
    }
  });
}

function setCoordinateProgress(percent) {
  if (!coordinateProgress) {
    return;
  }

  const safePercent = Math.max(0, Math.min(100, percent));
  const filledBlocks = Math.round((safePercent / 100) * coordinateProgress.children.length);

  Array.from(coordinateProgress.children).forEach((block, index) => {
    block.classList.toggle("is-filled", index < filledBlocks);
  });

  coordinateProgress.setAttribute("aria-valuenow", String(safePercent));
  if (coordinatePercent) {
    coordinatePercent.textContent = safePercent + "%";
  }
}

function getCoordinateDelay(delay) {
  const reduceMotion = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return reduceMotion ? 0 : delay;
}

function revealCoordinateMap() {
  if (!coordinateSearch || !mapReveal) {
    return;
  }

  if (coordinateSuccess) {
    coordinateSuccess.classList.remove("is-visible");
    coordinateSuccess.classList.add("is-leaving");
  }

  window.setTimeout(() => {
    if (coordinateSuccess) {
      coordinateSuccess.hidden = true;
    }

    mapReveal.hidden = false;
    coordinateSearch.dataset.state = "complete";
    window.requestAnimationFrame(() => mapReveal.classList.add("is-revealed"));
  }, getCoordinateDelay(220));
}

function showCoordinateResult() {
  if (!coordinateLoader || !coordinateSuccess) {
    revealCoordinateMap();
    return;
  }

  coordinateLoader.classList.add("is-leaving");
  window.setTimeout(() => {
    coordinateLoader.hidden = true;
    coordinateSuccess.hidden = false;
    window.requestAnimationFrame(() => coordinateSuccess.classList.add("is-visible"));
    window.setTimeout(revealCoordinateMap, getCoordinateDelay(900));
  }, getCoordinateDelay(220));
}

function startCoordinateSearch() {
  if (!coordinateSearch || coordinateSearchStarted) {
    return;
  }

  coordinateSearchStarted = true;
  coordinateSearch.dataset.state = "searching";
  const stages = [
    { message: "Cargando mundo\u2026", progress: 12, delay: 0 },
    { message: "Buscando coordenadas\u2026", progress: 40, delay: 800 },
    { message: "Siguiendo el hilito rojo\u2026 \u{1F497}", progress: 70, delay: 1600 },
    { message: "Ubicaci\u00f3n localizada.", progress: 100, delay: 2400 }
  ];

  stages.forEach((stage) => {
    window.setTimeout(() => {
      if (coordinateStatus) {
        coordinateStatus.textContent = stage.message;
      }
      setCoordinateProgress(stage.progress);
    }, getCoordinateDelay(stage.delay));
  });

  window.setTimeout(showCoordinateResult, getCoordinateDelay(3280));
}

function initializeCoordinateSearch() {
  if (!coordinateSearch) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    startCoordinateSearch();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          startCoordinateSearch();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: [0.35] }
  );

  observer.observe(coordinateSearch);
}

function getFlowerBeds() {
  return Array.from(document.querySelectorAll("[data-flower-bed]"));
}

function updateSeedInventory() {
  const seedSlot = document.querySelector('[data-inventory-item="flower-seeds"]');

  if (seedCount) {
    seedCount.textContent = String(seedsAvailable);
  }

  if (inventorySeedCount) {
    inventorySeedCount.textContent = String(seedsAvailable);
  }

  if (seedSlot && seedsAvailable > 0 && !seedSlot.classList.contains("is-unlocked")) {
    unlockInventoryItem("flower-seeds");
  }

  if (seedSlot && seedSlot.classList.contains("is-unlocked")) {
    const seedLabel = "Semillas de flores: " + seedsAvailable + " disponibles de " + gardenTrivia.length;
    seedSlot.title = seedLabel;
    seedSlot.setAttribute("aria-label", seedLabel);
  }
}

function updateGardenControls() {
  getFlowerBeds().forEach((bed) => {
    if (!bed.classList.contains("is-planted")) {
      bed.disabled = seedsAvailable < 1;
    }
  });
}

function shuffleTriviaAnswers(answers) {
  const shuffledAnswers = answers.slice();

  for (let index = shuffledAnswers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temporaryAnswer = shuffledAnswers[index];
    shuffledAnswers[index] = shuffledAnswers[randomIndex];
    shuffledAnswers[randomIndex] = temporaryAnswer;
  }

  return shuffledAnswers;
}

function renderMemorySeedTrack() {
  if (!memorySeedTrack) {
    return;
  }

  Array.from(memorySeedTrack.children).forEach((seed, index) => {
    seed.classList.toggle("is-grown", index < triviaIndex);
  });
}

function syncTriviaProgress() {
  const totalSeeds = gardenTrivia.length;
  const completedSeeds = Math.min(triviaIndex, totalSeeds);

  if (triviaProgress) {
    triviaProgress.textContent = completedSeeds + " / " + totalSeeds;
  }

  if (triviaSeedNumber) {
    triviaSeedNumber.textContent = completedSeeds >= totalSeeds
      ? "Todas las semillas han florecido \u2713"
      : "Semilla " + (completedSeeds + 1) + " de " + totalSeeds;
  }

  renderMemorySeedTrack();
}

function renderTrivia() {
  if (!triviaQuestion || !triviaChoices || !triviaProgress) {
    return;
  }

  triviaLocked = false;
  triviaChoices.classList.remove("is-transitioning");
  if (gardenQuiz) {
    gardenQuiz.classList.remove("is-planting");
  }
  if (memoryQuestionVisual) {
    memoryQuestionVisual.classList.remove("is-answering", "is-complete");
  }

  syncTriviaProgress();

  if (triviaIndex >= gardenTrivia.length) {
    if (gardenQuiz) {
      gardenQuiz.classList.add("is-complete");
    }
    if (memoryQuestionVisual) {
      memoryQuestionVisual.classList.add("is-complete");
    }
    triviaQuestion.textContent = "Nuestro jard\u00edn creci\u00f3 con cada recuerdo que solo t\u00fa y yo conocemos. \u{1F979}\u{1F497}";
    triviaChoices.replaceChildren();
    if (triviaStatus) {
      triviaStatus.textContent = "Todas las semillas ya est\u00e1n en el inventario. Ahora toca hacerlas florecer.";
    }
    return;
  }

  const trivia = gardenTrivia[triviaIndex];
  if (gardenQuiz) {
    gardenQuiz.classList.remove("is-complete");
  }
  triviaQuestion.textContent = trivia.question;
  triviaChoices.replaceChildren();
  if (triviaStatus) {
    triviaStatus.textContent = "";
  }

  shuffleTriviaAnswers(trivia.answers).forEach((answer) => {
    const button = document.createElement("button");
    const answerCopy = document.createElement("span");
    const answerState = document.createElement("span");

    button.className = "trivia-choice";
    button.type = "button";
    answerCopy.className = "trivia-choice-copy";
    answerCopy.textContent = answer.text;
    answerState.className = "trivia-choice-state";
    answerState.setAttribute("aria-hidden", "true");
    button.append(answerCopy, answerState);
    button.addEventListener("click", () => answerTrivia(answer, button));
    triviaChoices.appendChild(button);
  });
}

function answerTrivia(answer, selectedChoice) {
  const trivia = gardenTrivia[triviaIndex];

  if (!trivia || !triviaStatus || !selectedChoice || triviaLocked) {
    return;
  }

  const answerState = selectedChoice.querySelector(".trivia-choice-state");

  if (!answer.correct) {
    const retryMessages = [
      "Esa semillita no era \u{1F331}\u2715",
      "Mmm\u2026 esa no floreci\u00f3. Intenta otra vez \u{1F497}",
      "Casi, mi amor. Ese recuerdo necesita otra respuesta."
    ];
    selectedChoice.disabled = true;
    selectedChoice.classList.add("is-wrong");
    if (answerState) {
      answerState.textContent = "\u2715";
    }
    triviaStatus.textContent = retryMessages[Math.floor(Math.random() * retryMessages.length)];
    return;
  }

  triviaLocked = true;
  selectedChoice.classList.add("is-correct");
  if (answerState) {
    answerState.textContent = "\u2713";
  }
  Array.from(triviaChoices.querySelectorAll("button")).forEach((button) => {
    button.disabled = true;
  });

  if (gardenQuiz) {
    gardenQuiz.classList.add("is-planting");
  }
  if (memoryQuestionVisual) {
    memoryQuestionVisual.classList.add("is-answering");
  }

  seedsAvailable += 1;
  triviaIndex += 1;
  updateSeedInventory();
  updateGardenControls();
  syncTriviaProgress();
  triviaStatus.textContent = "\u{1F331} Semilla de memoria plantada";
  setInventoryMessage("Semillas de flores guardadas: " + seedsAvailable + " de " + gardenTrivia.length + ".");
  spawnSparkleBlocks(triviaIndex >= gardenTrivia.length ? 8 : 3);

  if (triviaIndex >= gardenTrivia.length && gardenStatus) {
    gardenStatus.textContent = "Ya tienes " + gardenTrivia.length + " semillas. Elige una parcela para plantar la primera flor.";
  }

  triviaChoices.classList.add("is-transitioning");
  window.setTimeout(renderTrivia, 900);
}

function plantFlower(bed) {
  if (!bed || bed.classList.contains("is-planted")) {
    return;
  }

  if (seedsAvailable < 1) {
    if (gardenStatus) {
      gardenStatus.textContent = "A\u00fan no hay semillas disponibles para esta parcela.";
    }
    return;
  }

  const flowerNames = ["tulip\u00e1n rojo", "rosa roja", "flor naranja", "flor amarilla", "flor azul", "flor de recuerdos"];
  const flowerName = flowerNames[Number(bed.dataset.flowerBed)] || "flor";

  seedsAvailable -= 1;
  plantedFlowerCount += 1;
  bed.classList.add("is-planted");
  bed.disabled = true;
  bed.setAttribute("aria-label", flowerName + " plantado");
  updateSeedInventory();
  updateGardenControls();

  if (plantedFlowerCount === getFlowerBeds().length) {
    if (waterReward) {
      waterReward.hidden = false;
    }
    unlockInventoryItem("water-bucket");
    if (gardenStatus) {
      gardenStatus.textContent = "Todo floreci\u00f3. El cubo de agua ya es nuestro.";
    }
    spawnSparkleBlocks(10);
    return;
  }

  if (gardenStatus) {
    const remaining = getFlowerBeds().length - plantedFlowerCount;
    gardenStatus.textContent = remaining === 1 ? "Falta una flor para que el jard\u00edn termine de despertar." : "Faltan " + remaining + " flores para que el jard\u00edn termine de despertar.";
  }
  spawnSparkleBlocks(2);
}

function initializeGarden() {
  getFlowerBeds().forEach((bed) => {
    bed.addEventListener("click", () => plantFlower(bed));
  });

  renderTrivia();
  updateSeedInventory();
  updateGardenControls();
}

function spawnSparkleBlocks(count) {
  const colors = ["#f4b73d", "#e85d75", "#4c9a43", "#3d8fb7", "#fff3b5"];
  const total = count || 1;

  for (let index = 0; index < total; index += 1) {
    const block = document.createElement("span");
    block.className = "sparkle-block";
    block.style.left = Math.random() * 100 + "vw";
    block.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(block);
    window.setTimeout(() => block.remove(), 1000);
  }
}

function addMonths(date, amount) {
  const result = new Date(date.getTime());
  const originalDay = result.getDate();

  result.setDate(1);
  result.setMonth(result.getMonth() + amount);

  const daysInMonth = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(originalDay, daysInMonth));
  return result;
}

function getRelationshipDuration(start, end) {
  if (end < start) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = end.getFullYear() - start.getFullYear();
  let yearMark = new Date(start.getTime());
  yearMark.setFullYear(start.getFullYear() + years);

  if (yearMark > end) {
    years -= 1;
    yearMark = new Date(start.getTime());
    yearMark.setFullYear(start.getFullYear() + years);
  }

  let months = (end.getFullYear() - yearMark.getFullYear()) * 12 + end.getMonth() - yearMark.getMonth();
  let monthMark = addMonths(yearMark, months);

  if (monthMark > end) {
    months -= 1;
    monthMark = addMonths(yearMark, months);
  }

  let remaining = Math.max(0, end.getTime() - monthMark.getTime());
  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;

  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;

  const minutes = Math.floor(remaining / 60000);
  remaining -= minutes * 60000;

  const seconds = Math.floor(remaining / 1000);
  return { years, months, days, hours, minutes, seconds };
}

function updateRelationshipCounter() {
  const duration = getRelationshipDuration(relationshipStart, new Date());

  Object.entries(duration).forEach(([unit, value]) => {
    if (counterFields[unit]) {
      counterFields[unit].textContent = String(value);
    }
  });
}

function getGameItems() {
  return Array.from(document.querySelectorAll(".game-item[data-item]"));
}

function getGameSlots(gameName) {
  return Array.from(document.querySelectorAll('[data-game-slot="' + gameName + '"]'));
}

function getGamePanel(gameName) {
  return document.querySelector('[data-game-panel="' + gameName + '"]');
}

function getItemById(itemId) {
  return document.querySelector('[data-item="' + itemId + '"]');
}

function setGameStatus(gameName, message) {
  const status = document.querySelector("#" + gameName + "Status");
  if (status) {
    status.textContent = message;
  }
}

function clearSelection() {
  selectedItemId = null;
  getGameItems().forEach((item) => item.classList.remove("is-selected"));
}

function clearSlotTargets() {
  document.querySelectorAll(".drop-slot.is-targeted").forEach((slot) => {
    slot.classList.remove("is-targeted");
  });
}

function startDrag(item, pointerId, clientX, clientY, usesPointerCapture) {
  if (pointerDrag || item.classList.contains("is-used")) {
    return;
  }

  pointerDrag = {
    item,
    pointerId,
    startX: clientX,
    startY: clientY,
    usesPointerCapture,
    dragging: false,
    ghost: null,
    targetSlot: null
  };

  if (usesPointerCapture) {
    item.setPointerCapture(pointerId);
  }
}

function beginPointerDrag(item, event) {
  if (event.button > 0) {
    return;
  }

  startDrag(item, event.pointerId, event.clientX, event.clientY, true);
}

function beginMouseDrag(item, event) {
  if (event.button > 0) {
    return;
  }

  startDrag(item, "mouse", event.clientX, event.clientY, false);
}

function moveMouseDrag(event) {
  movePointerDrag({
    pointerId: "mouse",
    clientX: event.clientX,
    clientY: event.clientY,
    preventDefault: () => event.preventDefault()
  });
}

function finishMouseDrag(event) {
  finishPointerDrag({
    pointerId: "mouse",
    preventDefault: () => event.preventDefault()
  });
}

function movePointerDrag(event) {
  if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) {
    return;
  }

  const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
  if (!pointerDrag.dragging && distance < 8) {
    return;
  }

  if (!pointerDrag.dragging) {
    pointerDrag.dragging = true;
    pointerDrag.item.classList.add("is-dragging");
    pointerDrag.ghost = pointerDrag.item.cloneNode(true);
    pointerDrag.ghost.className = pointerDrag.item.className + " drag-ghost";
    pointerDrag.ghost.removeAttribute("id");
    pointerDrag.ghost.setAttribute("aria-hidden", "true");
    pointerDrag.ghost.tabIndex = -1;
    pointerDrag.ghost.disabled = true;
    document.body.appendChild(pointerDrag.ghost);
  }

  event.preventDefault();
  pointerDrag.ghost.style.left = event.clientX + "px";
  pointerDrag.ghost.style.top = event.clientY + "px";
  clearSlotTargets();

  const target = document.elementFromPoint(event.clientX, event.clientY);
  const slot = target && target.closest(".drop-slot[data-game-slot]");

  if (slot && isValidDrop(pointerDrag.item, slot)) {
    slot.classList.add("is-targeted");
    pointerDrag.targetSlot = slot;
  } else {
    pointerDrag.targetSlot = null;
  }
}

function finishPointerDrag(event) {
  if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) {
    return;
  }

  const currentDrag = pointerDrag;
  pointerDrag = null;
  currentDrag.item.classList.remove("is-dragging");
  clearSlotTargets();

  if (currentDrag.usesPointerCapture && currentDrag.item.hasPointerCapture(event.pointerId)) {
    currentDrag.item.releasePointerCapture(event.pointerId);
  }

  if (currentDrag.ghost) {
    currentDrag.ghost.remove();
  }

  if (!currentDrag.dragging) {
    return;
  }

  suppressNextClickItemId = currentDrag.item.dataset.item;
  window.setTimeout(() => {
    suppressNextClickItemId = null;
  }, 300);

  if (currentDrag.targetSlot) {
    placeItem(currentDrag.item.dataset.item, currentDrag.targetSlot);
  } else {
    setGameStatus(currentDrag.item.dataset.game, "Suelta la pieza sobre el espacio que le toca.");
  }
}

function getItemVisual(item) {
  const visual = item.querySelector("img").cloneNode(true);
  visual.classList.add("placed-art");
  visual.removeAttribute("alt");
  return visual;
}

function emptySlot(slot) {
  delete slot.dataset.item;
  slot.classList.remove("is-filled", "is-targeted", "is-wrong");
  slot.replaceChildren();
}

function remainingCount(gameName) {
  return getGameSlots(gameName).filter((slot) => !slot.dataset.item).length;
}

function isValidDrop(item, slot) {
  return (
    item &&
    item.dataset.game === slot.dataset.gameSlot &&
    item.dataset.kind === slot.dataset.accept &&
    !slot.dataset.item &&
    !item.classList.contains("is-used")
  );
}

function flashWrongSlot(slot, gameName) {
  slot.classList.add("is-wrong");
  setGameStatus(gameName, "Esa pieza no encaja ah\u00ed. Prueba otro espacio.");
  window.setTimeout(() => slot.classList.remove("is-wrong"), 420);
}

function completeGame(gameName) {
  const panel = getGamePanel(gameName);
  if (!panel || panel.dataset.completed === "true") {
    return;
  }

  panel.dataset.completed = "true";
  panel.classList.add("is-complete");

  if (gameName === "craft") {
    document.querySelector("#craftResult").hidden = false;
    unlockInventoryItem("infinite-love");
    setGameStatus(gameName, "Receta completada: amor infinito se guard\u00f3 en el inventario.");
  }

  if (gameName === "creeper") {
    document.querySelector("#keyReveal").hidden = false;
    unlockInventoryItem("shared-key");
    unlockNetherAccess();
    playSoundEffect(creeperExplosionSound, 0.62);
    setGameStatus(gameName, "Creeper lleno. La llave de los dos se guard\u00f3 en el inventario.");
  }

  spawnSparkleBlocks(8);
}

function placeItem(itemId, slot) {
  const item = getItemById(itemId);
  const gameName = slot.dataset.gameSlot;

  if (!item || !slot || !gameName) {
    return;
  }

  if (!isValidDrop(item, slot)) {
    flashWrongSlot(slot, gameName);
    return;
  }

  slot.dataset.item = itemId;
  slot.classList.add("is-filled");
  slot.replaceChildren(getItemVisual(item));
  item.classList.add("is-used");
  item.disabled = true;
  clearSelection();

  const remaining = remainingCount(gameName);
  if (remaining === 0) {
    completeGame(gameName);
  } else {
    setGameStatus(
      gameName,
      remaining === 1 ? "Falta una pieza para completar la misi\u00f3n." : "Faltan " + remaining + " piezas para completar la misi\u00f3n."
    );
    spawnSparkleBlocks(2);
  }
}

function resetGame(gameName) {
  const panel = getGamePanel(gameName);
  getGameSlots(gameName).forEach(emptySlot);

  getGameItems()
    .filter((item) => item.dataset.game === gameName)
    .forEach((item) => {
      item.classList.remove("is-used", "is-selected", "is-dragging");
      item.disabled = false;
    });

  if (panel) {
    delete panel.dataset.completed;
    panel.classList.remove("is-complete");
  }

  if (gameName === "craft") {
    document.querySelector("#craftResult").hidden = true;
    setGameStatus(gameName, "La receta espera tres ingredientes.");
  }

  if (gameName === "creeper") {
    document.querySelector("#keyReveal").hidden = true;
    setGameStatus(gameName, "Faltan cuatro bloques para conseguir la llave.");
  }

  clearSelection();
}

function selectItem(item) {
  if (item.classList.contains("is-used")) {
    return;
  }

  if (selectedItemId === item.dataset.item) {
    clearSelection();
    return;
  }

  clearSelection();
  selectedItemId = item.dataset.item;
  item.classList.add("is-selected");
}

function initializeGames() {
  const items = getGameItems();
  const slots = Array.from(document.querySelectorAll(".drop-slot[data-game-slot]"));

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (suppressNextClickItemId === item.dataset.item) {
        event.preventDefault();
        return;
      }
      selectItem(item);
    });

    item.addEventListener("pointerdown", (event) => beginPointerDrag(item, event));
    item.addEventListener("pointermove", movePointerDrag);
    item.addEventListener("pointerup", finishPointerDrag);
    item.addEventListener("pointercancel", finishPointerDrag);
    item.addEventListener("mousedown", (event) => beginMouseDrag(item, event));

    item.addEventListener("dragstart", (event) => {
      if (pointerDrag && pointerDrag.item === item) {
        event.preventDefault();
        return;
      }

      if (item.classList.contains("is-used")) {
        event.preventDefault();
        return;
      }

      draggedItemId = item.dataset.item;
      item.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedItemId);
    });

    item.addEventListener("dragend", () => {
      draggedItemId = null;
      item.classList.remove("is-dragging");
      clearSlotTargets();
    });
  });

  slots.forEach((slot) => {
    slot.addEventListener("click", () => {
      if (selectedItemId) {
        placeItem(selectedItemId, slot);
      }
    });

    slot.addEventListener("dragover", (event) => {
      const itemId = draggedItemId || event.dataTransfer.getData("text/plain");
      const item = getItemById(itemId);

      if (isValidDrop(item, slot)) {
        event.preventDefault();
        slot.classList.add("is-targeted");
      }
    });

    slot.addEventListener("dragleave", () => {
      slot.classList.remove("is-targeted");
    });

    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("is-targeted");
      const itemId = event.dataTransfer.getData("text/plain") || draggedItemId;
      placeItem(itemId, slot);
    });
  });

  document.querySelectorAll("[data-reset-game]").forEach((button) => {
    button.addEventListener("click", () => resetGame(button.dataset.resetGame));
  });

  window.addEventListener("mousemove", moveMouseDrag);
  window.addEventListener("mouseup", finishMouseDrag);
}

updateRelationshipCounter();
window.setInterval(updateRelationshipCounter, 1000);
initializeGames();
initializeInventory();
initializeInventoryDrawer();
initializeGarden();
initializeNavigation();
initializeBuildJourney();
initializeCoordinateSearch();
initializeMemoryGallery();
initializeAudio();
initializeIntro();
initializeNether();
initializeTreasure();
