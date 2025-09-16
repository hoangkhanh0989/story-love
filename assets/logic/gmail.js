// Khởi tạo EmailJS (thay bằng public key của bạn trong EmailJS)
(function () {
  emailjs.init("6lVan0Npbg_ERULfN"); // PUBLIC_KEY
})();

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const errorDiv = document.getElementById("errorMessage");

  if (content) {
    // Gửi email qua EmailJS
    emailjs
      .send("service_smpphp9", "template_lznr889", {
        name: name || "Ẩn danh",
        email: email || "Không cung cấp",
        title: title || "Không có tiêu đề",
        message: content,
        time: new Date().toLocaleString(),
      })
      .then(
        function () {
          document.getElementById("formContainer").innerHTML =
            '<div class="thank-you"> Cảm ơn bạn đã đóng góp</div>';

          // Sau 5 giây tự động quay về trang chủ
          setTimeout(() => {
            window.location.href = "./modau.html";
          }, 5000);
        },
        function (error) {
          errorDiv.innerHTML =
            '<p class="error"> Lỗi khi gửi: ' + error.text + "</p>";
        }
      );
  } else {
    errorDiv.innerHTML =
      '<p class="error"> Vui lòng nhập nội dung đóng góp.</p>';
  }
}
