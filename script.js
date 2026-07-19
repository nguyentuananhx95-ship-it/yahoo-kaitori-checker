document.getElementById("checkBtn").addEventListener("click", () => {
  const url = document.getElementById("url").value;

  if (!url) {
    alert("Hãy nhập link Yahoo Shopping");
    return;
  }

  document.getElementById("result").innerHTML =
    "<p>🔍 Đang kiểm tra...</p>";

  setTimeout(() => {
    document.getElementById("result").innerHTML = `
      <h3>Kết quả</h3>
      <p>Link: ${url}</p>
      <p>✅ Phiên bản đầu tiên đã hoạt động.</p>
    `;
  }, 1000);
});
