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