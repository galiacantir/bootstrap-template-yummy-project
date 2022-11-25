// active navbar

let nav = document.querySelector(".navbar-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}


// scroll up button

const toTop = document.querySelector(".up-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");  
    } else {
        toTop.classList.remove("active");
    }
})

