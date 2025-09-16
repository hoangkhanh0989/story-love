const me = document.getElementById("me");
const her = document.getElementById("her");
let isDragging = false;
let offsetX, offsetY;

function resetPositions() {
  me.style.left = "25%";
  me.style.top = "50%";
  her.style.left = "75%";
  her.style.top = "50%";
}
resetPositions();

function moveMe(x, y) {
  const maxX = window.innerWidth - me.offsetWidth;
  const maxY = window.innerHeight - me.offsetHeight;
  const newLeft = Math.min(Math.max(0, x - offsetX), maxX);
  const newTop = Math.min(Math.max(0, y - offsetY), maxY);

  me.style.left = newLeft + "px";
  me.style.top = newTop + "px";

  const meRect = me.getBoundingClientRect();
  const herRect = her.getBoundingClientRect();

  const dx = meRect.left - herRect.left;
  const dy = meRect.top - herRect.top;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    const padding = 20;
    const newX =
      Math.random() * (window.innerWidth - her.offsetWidth - padding * 2) +
      padding;
    const newY =
      Math.random() * (window.innerHeight - her.offsetHeight - padding * 2) +
      padding;

    her.style.left = newX + "px";
    her.style.top = newY + "px";
  }
}

// PC Drag
me.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - me.offsetLeft;
  offsetY = e.clientY - me.offsetTop;
  me.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  me.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  moveMe(e.clientX, e.clientY);
});

// Mobile Drag
me.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - me.offsetLeft;
  offsetY = touch.clientY - me.offsetTop;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  moveMe(touch.clientX, touch.clientY);
});

window.addEventListener("resize", resetPositions);
