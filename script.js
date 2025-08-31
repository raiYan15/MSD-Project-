document.getElementById('upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('outfit-img').src = event.target.result;
      document.getElementById('outfit-title').textContent = "AI Prediction: Casual Autumn Outfit";
      document.getElementById('outfit-desc').textContent =
        "This look combines cozy oversized wear with warm tones. Popular in Korean street fashion and Western casuals, it's perfect for Fall 2025.";
      document.querySelector('.trend').textContent = "Trend: Cozy Streetwear";
    };
    reader.readAsDataURL(file);
  }
});
