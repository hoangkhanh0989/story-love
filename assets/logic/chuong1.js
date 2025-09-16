localStorage.setItem("chapterUnlocked", "2");

const confirmBtn = document.getElementById("confirmBtn");
const timeSelect = document.getElementById("timeSelect");
const errorMsg = document.getElementById("errorMsg");
const popup = document.getElementById("popup");
const chapterContent = document.getElementById("chapterContent");
const setup = document.querySelector(".setup");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.backgroundPosition = `${x}% ${y}%`;
});

confirmBtn.addEventListener("click", () => {
  const value = timeSelect.value;
  errorMsg.textContent = "";

  if (value === "12") {
    errorMsg.textContent = "Quá dài, ông có làm được việc không";
  } else if (value === "1" || value === "3") {
    errorMsg.textContent = "Hơi ngắn nhỉ";
  } else if (value === "5") {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
      setup.style.display = "none";
      chapterContent.style.display = "block";
    }, 2000);
  }
});
