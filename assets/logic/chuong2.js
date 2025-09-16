function chooseGift() {
  const gift = document.getElementById("giftSelect").value;
  const msgEl = document.getElementById("giftMsg");
  const centerMsg = document.getElementById("centerMsg");
  const chapter = document.getElementById("chapterContent");
  const giftSection = document.getElementById("giftSection");
  msgEl.textContent = "";

  if (!gift) {
    msgEl.textContent = "Bạn chưa chọn món quà nào.";
    return;
  }
  if (gift === "hoa") {
    msgEl.textContent = "Tôi không chọn cái này.";
  } else if (gift === "banhkeo") {
    msgEl.textContent =
      "Lần đầu tiên tôi không biết cô ấy thích ăn gì nên không chọn.";
  } else if (gift === "quanao") {
    msgEl.textContent = "Tôi không biết gu cô ấy thế nào.";
  } else if (gift === "gaubong") {
    centerMsg.style.display = "block";
    setTimeout(() => {
      centerMsg.style.display = "none";
      giftSection.style.display = "none"; // ẩn phần chọn quà
      chapter.style.display = "block"; // hiện nội dung chương
    }, 2000);
  }
}
