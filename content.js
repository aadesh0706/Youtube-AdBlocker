const hideAds = () => {
    // Hide banner ads
    const bannerAd = document.querySelector('.ytp-ad-module');
    if (bannerAd) {
      bannerAd.style.display = 'none';
    }
  
    // Hide video overlay ads
    const overlayAd = document.querySelector('.ytp-ad-overlay-container');
    if (overlayAd) {
      overlayAd.style.display = 'none';
    }
  
    // Hide skippable video ads
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  };
  
  setInterval(hideAds, 1000); // Check and hide ads every second
  