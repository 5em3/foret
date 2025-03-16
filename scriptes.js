
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

function scrollToSection(sectionId) {
    let element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Appliquer un effet uniquement sur les boutons sans toucher au reste du site
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            let targetId = this.getAttribute("onclick")?.match(/'([^']+)'/);

            if (targetId) {
                event.preventDefault();
                scrollToSection(targetId[1]);
            }
        });

        // Ajout d'un effet de sélection sur le bouton cliqué
        link.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.9)";
        });

        link.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });

        link.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});
