
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = scrollY / maxScroll;
    
    let r = Math.floor(26 + (102 - 26) * percentage);
    let g = Math.floor(0 + (0 - 0) * percentage);
    let b = Math.floor(26 + (128 - 26) * percentage);
    
    document.body.style.background = `linear-gradient(to bottom, rgb(26,0,26), rgb(${r},${g},${b}))`;
});

window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
            element.classList.add("visible");
        }
    });
});
