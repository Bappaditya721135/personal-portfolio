const  toggleBtn = document.querySelector(".icon")
const parentNav = document.querySelector(".nav-links")


// responsive nav bar button 
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active-icon")
    document.querySelector(".nav-links").classList.toggle("nav-links-display")
})



// event deligation on nav links 
parentNav.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-link")) {
        const allNavLinks = [...parentNav.children];
        allNavLinks.forEach(childEl => {
            childEl.classList.remove("active-link")
        });

        e.target.classList.add("active-link")

    }
}
)