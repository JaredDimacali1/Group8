const toggle = document.getElementById("theme-toggle");

function setButtonLabel() {
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  setButtonLabel();
});

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
setButtonLabel();

