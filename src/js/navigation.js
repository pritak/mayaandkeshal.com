document.getElementById("nav-toggle").addEventListener("click", toggleNav);
document.getElementById("main-menu").addEventListener("click", toggleNav);
document.getElementById("logo").addEventListener("click", toggleNav);



function toggleNav() {
    var nav = document.getElementById("main-menu");
    var className = nav.getAttribute("class");
    var burger = document.getElementById("nav-toggle");
    var burgerClassName = burger.getAttribute("class");
    if (className == "navbar-menu") {
        nav.className = "navbar-menu is-active";
        burger.className = "navbar-burger is-active"
    } else {
        nav.className = "navbar-menu";
        burger.className = "navbar-burger"
    }
}

