function detectLang() {
  var path = window.location.pathname;
  if (path.includes("/en/")) return "en";
  if (path.includes("/ar/")) return "ar";
  return "fr";
}

async function loadTranslations(lang) {
  var response = await fetch("../lang/" + lang + ".json");
  if (!response.ok) throw new Error("Translation load failed");
  return response.json();
}

function applyTranslations(data) {
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (node) {
    var key = node.getAttribute("data-i18n");
    if (!data[key]) return;
    if (node.hasAttribute("data-i18n-placeholder")) {
      node.setAttribute("placeholder", data[key]);
      return;
    }
    if (node.hasAttribute("data-i18n-value")) {
      node.setAttribute("value", data[key]);
      return;
    }
    node.textContent = data[key];
  });
}

function switchLang(nextLang) {
  var parts = window.location.pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    window.location.href = "/" + nextLang + "/";
    return;
  }
  parts[0] = nextLang;
  window.location.href = "/" + parts.join("/");
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
    var lang = detectLang();
    var data = await loadTranslations(lang);
    applyTranslations(data);
  } catch (error) {
    console.error(error);
  }
});

window.i18n = { detectLang, loadTranslations, applyTranslations, switchLang };
