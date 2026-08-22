/**
 * background.js - SaralSetu Extension Background Service Worker
 * Manages JWT Token Sync & User Profile Vault Retrieval from FastAPI backend.
 */

const BACKEND_URL = "http://localhost:8000";

// Listen for messages from content scripts or web pages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "SYNC_TOKEN") {
    chrome.storage.local.set({ saralsetu_token: request.token }, () => {
      sendResponse({ status: "TOKEN_SAVED" });
    });
    return true;
  }

  if (request.action === "GET_PROFILE") {
    chrome.storage.local.get(["saralsetu_token"], (result) => {
      const token = result.saralsetu_token;
      if (!token) {
        sendResponse({ status: "NO_TOKEN", profile: null });
        return;
      }

      fetch(`${BACKEND_URL}/api/v1/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.profile) {
          sendResponse({ status: "SUCCESS", profile: data.profile, user: data.user });
        } else {
          sendResponse({ status: "ERROR", profile: null });
        }
      })
      .catch(err => {
        console.warn("Background fetch profile error:", err);
        sendResponse({ status: "OFFLINE_FALLBACK", profile: null });
      });
    });
    return true; // Keep message channel open for async response
  }
});
