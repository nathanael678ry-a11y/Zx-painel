const gOld = document.getElementById("gOld");
const rOld = document.getElementById("rOld");
const geralOld = document.getElementById("geralOld");
const redOld = document.getElementById("redOld");

const fov = document.getElementById("fov");
const fovRange = document.getElementById("fovRange");

const target = document.getElementById("target");
const arena = document.getElementById("arena");

const aimAssistOn = document.getElementById("aimAssistOn");
const assistPower = document.getElementById("assistPower");

geralOld.oninput = () => gOld.innerText = geralOld.value;
redOld.oninput = () => rOld.innerText = redOld.value;

fovRange.oninput = () => {
  fov.style.width = fovRange.value + "px";
  fov.style.height = fovRange.value + "px";
};

let tx = 100, ty = 100;

function moveTarget() {
  tx += (Math.random() - 0.5) * 30;
  ty += (Math.random() - 0.5) * 30;

  if (aimAssistOn.checked) {
    const power = parseFloat(assistPower.value);
    tx += (arena.clientWidth/2 - tx) * power * 0.05;
    ty += (arena.clientHeight/2 - ty) * power * 0.05;
  }

  target.style.left = tx + "px";
  target.style.top = ty + "px";
}

setInterval(moveTarget, 200);

function gerar() {
  const base = parseInt(geralOld.value);
  const ajuste = Math.floor(Math.random() * 20) - 10;

  const novaGeral = Math.min(200, Math.max(0, base + ajuste));
  const novaRed = Math.min(200, Math.max(0, base + ajuste + 5));

  document.getElementById("resultado").value =
`🔥 NOVA SENS FREE FIRE

Geral: ${novaGeral}
Red Dot: ${novaRed}

(Ajuste baseado em treino visual)`;
}