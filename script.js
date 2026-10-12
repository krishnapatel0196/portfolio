// Mobile navigation toggle
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.querySelectorAll(".nav__links a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Links still waiting on a real URL: don't jump to the top of the page
document.querySelectorAll('a[data-todo][href="#"]').forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.info(`Placeholder link: ${link.dataset.todo}`);
  })
);
