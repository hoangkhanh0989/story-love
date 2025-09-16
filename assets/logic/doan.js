function checkOccasion() {
  const value = document.getElementById("occasionSelect").value;
  const msgEl = document.getElementById("msg");
  const centerMsg = document.getElementById("centerMsg");

  msgEl.textContent = "";
  centerMsg.style.display = "none";
  centerMsg.textContent = "";

  if (!value) {
    msgEl.textContent = "Bạn chưa chọn dịp nào.";
    return;
  }

  if (value === "noel") {
    msgEl.textContent = "Cũng lãng mạn đấy nhưng mà lâu quá.";
  } else if (value === "tet") {
    msgEl.textContent = "Cũng không thích hợp lắm.";
  } else if (value === "trungthu") {
    msgEl.textContent =
      "Sợ cô ấy không thích nhân thập cẩm vì tôi khá thập cẩm.";
  } else if (value === "sinhnhat") {
    // Hiện thông báo đầu tiên
    centerMsg.textContent = "Tuyệt vời, đúng dịp rồi đấy";
    centerMsg.style.display = "block";

    // Sau 5 giây hiện thông báo thứ 2
    setTimeout(() => {
      centerMsg.textContent =
        "Thế mọi người nghĩ đã làm ny đc chưa, khám phá chương 3 tiếp nhé";

      // Sau 5 giây nữa quay lại modau.html và mở khóa chương 3
      setTimeout(() => {
        localStorage.setItem("chapterUnlocked", "3");
        window.location.href = "modau.html";
      }, 3000);
    }, 3000);
  }
}
