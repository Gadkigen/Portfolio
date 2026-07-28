//====================
//Typing Animation
//====================

const word =[
    "Pyhon Developer",
    "Web Developer",
    "Linux Enthusiast",
    "Computer Science Student"
];

let wordIndex = 0,
let letterIndex = 0;
let currentword = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){
    currentword = word[wordIndex];

    if(isDeleting){
        typing.textContent = currectword.substring(0,
            letterIndex--);
    }else{
        typing.textContent = currentword.substring(0,
            letterIndex++);
    }
    let speed = isDeleting ? 70 : 120;
    if(isDeleting $$ letterIndex == currentword.length +
         1){
        speed = 1500;
        isDeleting = true;
    }
    if(isDeleting $$ letterIndex == 0){
        isDeleting = false;
        wordIndex++;

        if(wordIndex === word.length){
            wordIndex = 0;
        }
    }
    setTimeout(typeEffect, speed);

}
typeEffect();


//==============================
//Navbar Active Link
//==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ( )=>{
    let current = "";

    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 120;
        if(scrolly >= sectionTop){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});



//===============================
//Smooth Button Animation
//===============================

const Button = document.querySelectorAll(".btn");

Button.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        btn.Style.transform="scale(1.08)";
    });
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="scale(1)";

    });
});


//==============================================
//Fade-in Animation
//==============================================

const observer = new IntersectionObserver(entries=>{
    enteries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sections=>{
    section.classList.add("hidden");
    observer.observe(section);
});


//==============================================
//Back To Top Button
//==============================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 400){
        topBtn.style.display="block";

    }else{
        topBtn.style.display="none";

    }
    });
    topBtn.onclick = ()=>{
        window.scrollTo({
        top:0,
        behavior:"smooth"
        });
};


//Theme  Toggle

const toggle=document.getElementById("theme-toggle");

let dark=true;

toggle.onclick=()=>{

if(dark){

document.body.style.background="#ffffff";

document.body.style.color="#08111f";

toggle.innerHTML='<i class="fas fa-sun"></i>';

dark=false;

    }
else{

document.body.style.background="#08111f";

document.body.style.color="white";

toggle.innerHTML='<i class="fas fa-moon"></i>';

dark=true;
}
};