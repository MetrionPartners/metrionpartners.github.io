// ===============================
// Metrion Partners
// Main JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initRevealAnimations();

    initBackToTop();

});

// ===============================
// Navbar
// ===============================

function initNavbar(){

    const header = document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 50){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }

    });

}

// ===============================
// Reveal Animations
// ===============================

function initRevealAnimations(){

    const elements = document.querySelectorAll(".reveal");

    if(!elements.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(el=>observer.observe(el));

}

// ===============================
// Back To Top
// ===============================

function initBackToTop(){

    const btn = document.querySelector("#backToTop");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        btn.classList.toggle("visible",window.scrollY>500);

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

      }
