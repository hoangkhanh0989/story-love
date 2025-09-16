function checkReason() {
  const reason = document.getElementById("reasonSelect").value;
  const msgEl = document.getElementById("reasonMsg");
  const centerMsg = document.getElementById("centerMsg");

  msgEl.textContent = "";

  if (!reason) {
    msgEl.textContent = "Bạn chưa chọn lý do.";
    return;
  }

  if (reason === "notgood") {
    msgEl.textContent =
      "Có thể, vì tùy suy nghĩ và cảm xúc của mỗi người mà. Nhưng tôi chắc không phải lý do chính.";
  } else if (reason === "distance") {
    centerMsg.style.display = "block";
    setTimeout(() => {
      window.location.href = "ketluan.html";
    }, 3000);
  }
}
