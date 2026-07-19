document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");

  window.checkYahoo = function () {
    const url = document.getElementById("url").value.trim();

    if (!url) {
      alert("Hãy nhập link Yahoo Shopping");
      return;
    }

    result.innerHTML = `
      <div style="padding:15px;border:1px solid #ddd;border-radius:8px">
        <h3>Đang kiểm tra...</h3>
        <p>${url}</p>
      </div>
    `;

    setTimeout(() => {
      result.innerHTML = `
        <div style="padding:15px;border:1px solid #ddd;border-radius:8px">
          <h3>✅ Web đã hoạt động</h3>
          <p>Link:</p>
          <p>${url}</p>
          <p>Bước tiếp theo sẽ tự lấy giá Yahoo và so sánh Kaitori.</p>
        </div>
      `;
    }, 1000);
  };
});