/**
 * content.js - SaralSetu Chrome Extension Content Script
 * Executes DOM Auto-Fill with synthetic bubbling events, TTS reader on focus, STT & Translation.
 */

(function () {
  console.log("SaralSetu Content Script initialized on page:", window.location.href);

  // Sync token from localStorage if visiting SaralSetu dashboard
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    const localToken = localStorage.getItem("saralsetu_token");
    if (localToken && typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.sendMessage({ action: "SYNC_TOKEN", token: localToken });
    }
  }

  // Request User Profile Vault from Background Script
  let userProfileVault = null;
  if (typeof chrome !== "undefined" && chrome.runtime) {
    chrome.runtime.sendMessage({ action: "GET_PROFILE" }, (response) => {
      if (response && response.status === "SUCCESS" && response.profile) {
        userProfileVault = response.profile;
        console.log("SaralSetu Profile Vault synced to page:", userProfileVault.full_name);
        setupAccessibilityListeners(userProfileVault);
      } else {
        // Fallback default profile vault
        userProfileVault = {
          full_name: "Aarav Sharma",
          dob: "1992-08-14",
          address: "Flat 402, Shanti Niketan, Sector 15, New Delhi - 110001",
          pan_number: "ABCDE1234F",
          aadhaar_number: "XXXX-XXXX-9012",
          mobile_number: "+91 98765 43210",
          gross_income: "₹ 8,50,000",
          preferences: { tts_on_focus: true, voice_nav_enabled: true }
        };
        setupAccessibilityListeners(userProfileVault);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 1. Direct DOM Auto-Fill Injection with Synthetic Bubbling Events
  // ---------------------------------------------------------------------------
  function injectFieldValue(inputElement, value) {
    if (!inputElement || value === undefined || value === null) return;

    // Standard Native Property Setter for React/Vue/Angular compatibility
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set || Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    )?.set;

    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(inputElement, value);
    } else {
      inputElement.value = value;
    }

    // Dispatch synthetic bubbling input and change events
    inputElement.dispatchEvent(new Event("input", { bubbles: true }));
    inputElement.dispatchEvent(new Event("change", { bubbles: true }));
    inputElement.dispatchEvent(new Event("blur", { bubbles: true }));

    // Visual highlight
    inputElement.style.border = "2px solid #316bf3";
    inputElement.style.backgroundColor = "#e3dfff";
    setTimeout(() => {
      inputElement.style.border = "";
      inputElement.style.backgroundColor = "";
    }, 2000);
  }

  window.saralSetuAutoFillDOM = function (profile) {
    const vault = profile || userProfileVault;
    if (!vault) return;

    const inputs = document.querySelectorAll("input, textarea, select");
    let filledCount = 0;

    inputs.forEach((input) => {
      const name = (input.name || input.id || input.placeholder || "").toLowerCase();
      const type = (input.type || "").toLowerCase();

      if (type === "hidden" || type === "submit" || type === "button") return;

      if (name.includes("name") || name.includes("fullName") || name.includes("naam")) {
        injectFieldValue(input, vault.full_name);
        filledCount++;
      } else if (name.includes("dob") || name.includes("birth") || name.includes("date")) {
        injectFieldValue(input, vault.dob);
        filledCount++;
      } else if (name.includes("address") || name.includes("pata") || name.includes("residence")) {
        injectFieldValue(input, vault.address);
        filledCount++;
      } else if (name.includes("pan") || name.includes("tax") || name.includes("aadhaar")) {
        injectFieldValue(input, vault.pan_number || vault.aadhaar_number);
        filledCount++;
      } else if (name.includes("phone") || name.includes("mobile") || name.includes("contact")) {
        injectFieldValue(input, vault.mobile_number);
        filledCount++;
      } else if (name.includes("income") || name.includes("salary")) {
        injectFieldValue(input, vault.gross_income);
        filledCount++;
      }
    });

    console.log(`SaralSetu Auto-Filled ${filledCount} input field(s) on page.`);
  };

  // ---------------------------------------------------------------------------
  // 2. Voice/TTS Reader on Field Focus
  // ---------------------------------------------------------------------------
  function setupAccessibilityListeners(profile) {
    const prefs = (profile && profile.preferences) || {};

    document.addEventListener("focusin", (e) => {
      const target = e.target;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.tagName === "BUTTON")) {
        const labelText = getElementLabelText(target);
        if (labelText && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(`Field: ${labelText}`);
          utterance.lang = (profile && profile.preferred_language === "hi") ? "hi-IN" : "en-US";
          utterance.rate = 1.0;
          window.speechSynthesis.speak(utterance);
        }
      }
    });
  }

  function getElementLabelText(el) {
    if (el.ariaLabel) return el.ariaLabel;
    if (el.placeholder) return el.placeholder;
    if (el.id) {
      const label = document.querySelector(`label[for="${el.id}"]`);
      if (label) return label.innerText;
    }
    return el.name || el.tagName.toLowerCase();
  }

  // Create floating SaralSetu Quick Auto-Fill Action Pill
  window.addEventListener("DOMContentLoaded", () => {
    const floatBtn = document.createElement("div");
    floatBtn.id = "saralsetu-extension-pill";
    floatBtn.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:999999;background:#0051d5;color:#ffffff;padding:8px 14px;border-radius:20px;font-family:sans-serif;font-size:12px;font-weight:bold;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.25);display:flex;align-items:center;gap:6px;";
    floatBtn.innerHTML = `<span>⚡ SaralSetu Auto-Fill</span>`;
    floatBtn.addEventListener("click", () => {
      window.saralSetuAutoFillDOM(userProfileVault);
    });
    document.body.appendChild(floatBtn);
  });
})();
