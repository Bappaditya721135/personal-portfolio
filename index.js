const  toggleBtn = document.querySelector(".icon")

toggleBtn.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("nav-links-display")
})