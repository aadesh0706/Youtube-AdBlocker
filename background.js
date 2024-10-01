chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true };
    },
    { urls: ["*://www.youtube.com/get_video_info?*", "*://googleads.g.doubleclick.net/*"] },
    ["blocking"]
  );
  