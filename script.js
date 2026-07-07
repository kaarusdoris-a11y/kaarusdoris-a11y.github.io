(function () {
"use strict";

// Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

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
