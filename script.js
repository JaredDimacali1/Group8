const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
});

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}