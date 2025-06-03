let infected = 0;
let multiplier = 1;
let passiveInfection = 0;

const infectedCountEl = document.getElementById("infectedCount");
const infectBtn = document.getElementById("infectBtn");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const upgrade4 = document.getElementById("upgrade4");
const cell = document.getElementById("cell");

// ========== ЗАГРУЗКА СОХРАНЕНИЯ ==========
function loadGame() {
  const save = JSON.parse(localStorage.getItem("parasiteGameSave"));
  if (save) {
    infected = save.infected || 0;
    multiplier = save.multiplier || 1;
    passiveInfection = save.passiveInfection || 0;
    upgrade1.disabled = save.up1 || false;
    upgrade2.disabled = save.up2 || false;
    upgrade3.disabled = save.up3 || false;
    upgrade4.disabled = save.up4 || false;
    if (upgrade1.disabled) upgrade1.innerText += " ✅";
    if (upgrade2.disabled) upgrade2.innerText += " ✅";
    if (upgrade3.disabled) upgrade3.innerText += " ✅";
    if (upgrade4.disabled) upgrade4.innerText += " ✅";
  }
}

// ========== СОХРАНЕНИЕ ==========
function saveGame() {
  localStorage.setItem("parasiteGameSave", JSON.stringify({
    infected,
    multiplier,
    passiveInfection,
    up1: upgrade1.disabled,
    up2: upgrade2.disabled,
    up3: upgrade3.disabled,
    up4: upgrade4.disabled,
  }));
}

// ========== ЗАРАЖЕНИЕ ==========
infectBtn.onclick = () => {
  infected += multiplier;
  pulseCell();
  updateUI();
};

// Анимация
function pulseCell() {
  cell.classList.remove("pulse");
  void cell.offsetWidth;
  cell.classList.add("pulse");
}

// ========== АПГРЕЙДЫ ==========
upgrade1.onclick = () => {
  if (infected >= 10 && !upgrade1.disabled) {
    infected -= 10;
    multiplier *= 2;
    upgrade1.disabled = true;
    upgrade1.innerText += " ✅";
    updateUI();
  }
};

upgrade2.onclick = () => {
  if (infected >= 25 && !upgrade2.disabled) {
    infected -= 25;
    passiveInfection += 1;
    upgrade2.disabled = true;
    upgrade2.innerText += " ✅";
    updateUI();
  }
};

upgrade3.onclick = () => {
  if (infected >= 100 && !upgrade3.disabled) {
    infected -= 100;
    multiplier *= 5;
    upgrade3.disabled = true;
    upgrade3.innerText += " ✅";
    updateUI();
  }
};

upgrade4.onclick = () => {
  if (infected >= 200 && !upgrade4.disabled) {
    infected -= 200;
    passiveInfection += 5;
    upgrade4.disabled = true;
    upgrade4.innerText += " ✅";
    updateUI();
  }
};

// ========== ПАССИВНАЯ ИНФЕКЦИЯ ==========
setInterval(() => {
  infected += passiveInfection;
  updateUI();
}, 1000);

// ========== АВТОСОХРАНЕНИЕ ==========
setInterval(() => {
  saveGame();
}, 2000);

function updateUI() {
  infectedCountEl.textContent = infected;
}

// Загрузка при запуске
loadGame();
updateUI();
