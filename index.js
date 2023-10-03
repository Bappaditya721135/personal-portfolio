const iconBtn = document.querySelector(".icon")

let displayNav = false;

const responsiveNavbar = () => {
    displayNav = !displayNav;
    const navBar = document.querySelector(".nav-links");
    if(displayNav) {
        navBar.style.display = "block";
    }
    else {
        navBar.style.display = "none";
    }

}

iconBtn.addEventListener("click", responsiveNavbar)