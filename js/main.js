(function () {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function () {
  document.querySelectorAll("[data-app-store-download]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (typeof gtag !== "function") return;
      gtag("event", "app_store_download_click", {
        location: el.getAttribute("data-analytics-location") || "unspecified",
        link_url: el.getAttribute("href") || "",
      });
    });
  });
})();
