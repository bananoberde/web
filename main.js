
document.querySelector("#open-nav-menu").addEventListener("click", function () {
    console.log("Menú abierto");
    document.querySelector("header .wrapper").classList.add("nav-open");
  });

document.querySelector("#close-nav-menu").addEventListener("click", function () {
    console.log("Menú cerrado");
    document.querySelector("header .wrapper").classList.remove("nav-open");
  });