function checkOpinion() {
  const opinion = document.getElementById("opinionSelect").value;
  const msgEl = document.getElementById("opinionMsg");
  const opinionSection = document.getElementById("opinionSection");
  const chapter = document.getElementById("chapterContent");
  const centerMsg = document.getElementById("centerMsg");

  msgEl.textContent = "";

  if (!opinion) {
    msgEl.textContent = "Bạn chưa chọn ý kiến nào.";
    return;
  }

  if (opinion === "dongy") {
    msgEl.textContent = "Hmm, cũng phải cân nhắc đã chứ.";
  } else if (opinion === "suynghi") {
    centerMsg.style.display = "block";
    setTimeout(() => {
      centerMsg.style.display = "none";
      opinionSection.style.display = "none";
      chapter.style.display = "block";
    }, 2000);
  }
}
