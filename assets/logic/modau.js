document.addEventListener("DOMContentLoaded", () => {
  const unlocked = parseInt(localStorage.getItem("chapterUnlocked") || "1");

  document.querySelectorAll("#chaptersList li").forEach((item) => {
    const ch = parseInt(item.getAttribute("data-ch"));
    const btn = item.querySelector(".toggle-btn");

    if (ch > unlocked) {
      btn.classList.add("locked");
      btn.textContent = "Khóa";
    }
  });
});

// Hàm đặt lại chương 1 và khóa 2,3,4
function resetToChapter1() {
  localStorage.setItem("chapterUnlocked", 1);
  location.reload();
}
