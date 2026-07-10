(function () {
"use strict";

// Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
navToggle.addEventListener("click", function () {
var isOpen = navLinks.classList.toggle("open");
navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
navToggle.setAttribute("aria-expanded", "false");
});
});
}

// Reveal on scroll
var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
var io = new IntersectionObserver(
function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("is-visible");
io.unobserve(entry.target);
}
});
},
{ threshold: 0.12 }
);
revealEls.forEach(function (el) { io.observe(el); });
} else {
revealEls.forEach(function (el) { el.classList.add("is-visible"); });
}
})();
// Theme toggle
  var themeToggle = document.getElementById("themeToggle");
    var root = document.documentElement;
      function setTheme(theme) {
        if (theme === "dark") {
          root.setAttribute("data-theme", "dark");
            } else {
              root.removeAttribute("data-theme");
                }
                  try {
                    localStorage.setItem("theme", theme);
                      } catch (e) {}
                        if (themeToggle) {
                          themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
                            themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
                              }
                                }
                                  if (themeToggle) {
                                    var isDark = root.getAttribute("data-theme") === "dark";
                                      themeToggle.textContent = isDark ? "Light" : "Dark";
                                        themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
                                          themeToggle.addEventListener("click", function () {
                                            var currentlyDark = root.getAttribute("data-theme") === "dark";
                                              setTheme(currentlyDark ? "light" : "dark");
                                                });
                                                  }

                                                  