const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a").forEach((link) => {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
});

const toast = document.querySelector("[data-toast]");
document.querySelectorAll("[data-toast-message]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!toast) return;
    toast.textContent = button.dataset.toastMessage;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
