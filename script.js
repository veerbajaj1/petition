var shareBtn = document.getElementById('share-btn');
    shareFallback = document.getElementById('share-fallback');
    pageTitle = "Test Share";
    pageUrl = "https://veerbajaj1.github.io/petition";

shareBtn.addEventListener("click", function(ev) {
  if (navigator.share) {
    navigator.share({
        text: pageTitle,
        url: pageUrl
      });
  } else {
    shareFallback.style.display = 'flex';
    shareBtn.style.display = 'none';
  }
});
