/* YouTube Downloader – minimales Seiten-Script:
   Mobiles Menü, Bildansicht (Lightbox), aktiver Menüpunkt beim Scrollen. */
(function () {
  "use strict";

  /* ----------------------------------------------------- Mobiles Menü */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------ Lightbox */
  var dialog = document.getElementById("lightbox");

  if (dialog && typeof dialog.showModal === "function") {
    var dialogImg = dialog.querySelector("img");
    var dialogCaption = dialog.querySelector(".lightbox-caption");
    var closeButton = dialog.querySelector(".lightbox-close");

    document.querySelectorAll(".shot-open").forEach(function (button) {
      button.addEventListener("click", function () {
        var image = button.querySelector("img");
        var caption = button.parentElement.querySelector("figcaption");
        dialogImg.src = image.currentSrc || image.src;
        dialogImg.alt = image.alt;
        dialogCaption.textContent = caption ? caption.textContent : "";
        dialog.showModal();
      });
    });

    closeButton.addEventListener("click", function () { dialog.close(); });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  /* ------------------------------------------------- Aktiver Menüpunkt */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav-menu a[href^="#"]')
  );
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
