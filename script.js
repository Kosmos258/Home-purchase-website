let lastScrollTop = 0; 
const header = document.querySelector(".intro__header"); 

window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; 

    if (currentScroll > 100) {
        header.classList.add("fixed");
    } else {
        
        header.classList.remove("fixed");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});