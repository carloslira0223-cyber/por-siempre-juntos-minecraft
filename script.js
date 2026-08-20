const photos = [
  {
    file: "foto-1.jpg",
    title: "Nuestro primer bioma",
    caption: "Ese recuerdo que siempre me hace sonre\u00edr."
  },
  {
    file: "foto-2.jpg",
    title: "Construcci\u00f3n favorita",
    caption: "Lo que hicimos juntos y se volvi\u00f3 parte de nuestra historia."
  },
  {
    file: "foto-3.jpg",
    title: "Monumento especial",
    caption: "Un lugarcito del mundo que ya tiene significado."
  },
  {
    file: "foto-4.jpg",
    title: "Captura legendaria",
    caption: "Porque hay momentos que merecen guardarse para siempre."
  },
  {
    file: "foto-5.jpg",
    title: "Modo risa",
    caption: "De esas cosas simples que contigo se vuelven enormes."
  },
  {
    file: "foto-6.jpg",
    title: "Siguiente aventura",
    caption: "Todo lo que todav\u00eda quiero vivir contigo."
  }
];

const messages = [
  "Prometo seguir cuidando este mundo contigo: con paciencia, con detalles y con mucho amor, incluso cuando toque reconstruir algo bloque por bloque.",
  "Mi recuerdo favorito no es solo uno. Es cualquier momento en el que te miro y pienso: aqu\u00ed estoy, con mi persona favorita.",
  "Nuestro siguiente plan: una cita tranquila, algo rico, muchas risas y otro recuerdo bonito para poner en esta p\u00e1gina."
];

const galleryGrid = document.querySelector("#galleryGrid");
const secretMessage = document.querySelector("#secretMessage");
const chestButtons = document.querySelectorAll(".chest-button");
const inventoryMessage = document.querySelector("#inventoryMessage");
const inventoryDrawer = document.querySelector("#inventoryDrawer");
const inventoryToggle = document.querySelector("#inventoryToggle");
const inventoryClose = document.querySelector("#inventoryClose");
const inventoryScrim = document.querySelector("#inventoryScrim");
const topbar = document.querySelector(".topbar");
const navSectionLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
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
const relationshipStart = new Date(2025, 1, 20, 20, 0, 0);
const counterFields = {
  years: document.querySelector("#countYears"),
  months: document.querySelector("#countMonths"),
  days: document.querySelector("#countDays"),
  hours: document.querySelector("#countHours"),
  minutes: document.querySelector("#countMinutes"),
  seconds: document.querySelector("#countSeconds")
};

const triviaQuestion = document.querySelector("#triviaQuestion");
const triviaChoices = document.querySelector("#triviaChoices");
const triviaStatus = document.querySelector("#triviaStatus");
const triviaProgress = document.querySelector("#triviaProgress");
const seedCount = document.querySelector("#seedCount");
const inventorySeedCount = document.querySelector("#inventorySeedCount");
const gardenStatus = document.querySelector("#gardenStatus");
const waterReward = document.querySelector("#waterReward");

const gardenTrivia = [
  {
    question: "\u00bfQu\u00e9 es lo que m\u00e1s me gusta de ti?",
    answers: ["Todo de ti.", "Solo tus mensajes.", "Solo los d\u00edas especiales."],
    correct: 0
  },
  {
    question: "\u00bfD\u00f3nde se encendi\u00f3 nuestro servidor por primera vez?",
    answers: ["En el lugar que solo nosotros sabemos.", "En un bioma perdido.", "En una aventura cualquiera."],
    correct: 0
  },
  {
    question: "\u00bfQu\u00e9 admiro de tu historia en la escuela?",
    answers: ["Tu esfuerzo, tus metas y todo lo que logras.", "Que nunca tengas tareas.", "Que no cambies con el tiempo."],
    correct: 0
  },
  {
    question: "\u00bfQu\u00e9 recuerdo guardar\u00eda primero en un cofre infinito?",
    answers: ["El d\u00eda en que empez\u00f3 lo nuestro.", "Un bloque cualquiera.", "Un mapa sin nombre."],
    correct: 0
  },
  {
    question: "\u00bfQu\u00e9 quiero seguir construyendo contigo?",
    answers: ["Un futuro entero contigo.", "Una sola partida m\u00e1s.", "Un mundo sin recuerdos."],
    correct: 0
  }
];

let selectedItemId = null;
let draggedItemId = null;
let pointerDrag = null;
let suppressNextClickItemId = null;
let triviaIndex = 0;
let seedsAvailable = 0;
let plantedFlowerCount = 0;
let isMusicMuted = false;

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
  }
};

function createPhotoCard(photo, index) {
  const card = document.createElement("article");
  card.className = "gallery-card";

  const frame = document.createElement("div");
  frame.className = "photo-frame";

  const img = document.createElement("img");
  img.src = "assets/fotos/" + photo.file;
  img.alt = photo.title;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "photo-placeholder";
  placeholder.textContent = "Recuerdo " + (index + 1);

  img.addEventListener("error", () => {
    img.remove();
    frame.appendChild(placeholder);
  });

  frame.appendChild(img);

  const body = document.createElement("div");
  body.className = "gallery-card-body";
  body.innerHTML = "<h3>" + photo.title + "</h3><p>" + photo.caption + "</p>";

  card.append(frame, body);
  return card;
}

function setMessage(index) {
  secretMessage.textContent = messages[index];
  chestButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.message === String(index));
  });
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
    return;
  }

  ambientMusic.volume = 0.18;
  const playAttempt = ambientMusic.play();
  if (playAttempt) {
    playAttempt.catch(() => {});
  }
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
    const seedLabel = "Semillas de flores: " + seedsAvailable + " disponibles";
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

function renderTrivia() {
  if (!triviaQuestion || !triviaChoices || !triviaProgress) {
    return;
  }

  if (triviaIndex >= gardenTrivia.length) {
    triviaQuestion.textContent = "Las cinco semillas ya son tuyas.";
    triviaChoices.replaceChildren();
    triviaProgress.textContent = "5 / 5";
    return;
  }

  const trivia = gardenTrivia[triviaIndex];
  triviaQuestion.textContent = trivia.question;
  triviaProgress.textContent = triviaIndex + " / " + gardenTrivia.length;
  triviaChoices.replaceChildren();

  trivia.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "trivia-choice";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => answerTrivia(answerIndex));
    triviaChoices.appendChild(button);
  });
}

function answerTrivia(answerIndex) {
  const trivia = gardenTrivia[triviaIndex];

  if (!trivia || !triviaStatus) {
    return;
  }

  if (answerIndex !== trivia.correct) {
    const selectedChoice = triviaChoices.children[answerIndex];
    if (selectedChoice) {
      selectedChoice.classList.add("is-wrong");
      window.setTimeout(() => selectedChoice.classList.remove("is-wrong"), 420);
    }
    triviaStatus.textContent = "Ese recuerdo no era. Piensa en nuestra historia y vuelve a intentarlo.";
    return;
  }

  seedsAvailable += 1;
  triviaIndex += 1;
  updateSeedInventory();
  updateGardenControls();
  renderTrivia();
  spawnSparkleBlocks(3);

  if (triviaIndex >= gardenTrivia.length) {
    triviaStatus.textContent = "Cinco recuerdos acertados. El jard\u00edn ya puede despertar.";
    if (gardenStatus) {
      gardenStatus.textContent = "Ya tienes cinco semillas. Elige una parcela para plantar la primera flor.";
    }
  } else {
    triviaStatus.textContent = "Respuesta acertada: una semilla entr\u00f3 al inventario.";
    setInventoryMessage("Semillas de flores guardadas: " + seedsAvailable + " de 5.");
  }
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

  const flowerNames = ["tulip\u00e1n rojo", "rosa roja", "flor naranja", "flor amarilla", "flor azul"];
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

photos.forEach((photo, index) => {
  galleryGrid.appendChild(createPhotoCard(photo, index));
});

chestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMessage(Number(button.dataset.message));
    spawnSparkleBlocks(3);
  });
});

setMessage(0);
updateRelationshipCounter();
window.setInterval(updateRelationshipCounter, 1000);
initializeGames();
initializeInventory();
initializeInventoryDrawer();
initializeGarden();
initializeNavigation();
initializeAudio();
initializeIntro();

