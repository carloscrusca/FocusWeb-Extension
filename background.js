const blockedSites = [
  "facebook.com",
  "instagram.com",
  "youtube.com",
  "linkedin.com"
];

const redirectUrl = "https://www.google.com";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const urlStr = details.url.toLowerCase(); // padroniza
    for (let site of blockedSites) {
      if (urlStr.includes(site)) {
        return { redirectUrl: redirectUrl };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

