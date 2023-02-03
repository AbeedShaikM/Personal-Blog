console.log("blog js file linked");
window.onclick = function(event) {
  let dropdowns=document.getElementById("navbarCollapse");
  if (event.target.matches(".navbar-toggler")) {
      document.getElementsByClassName("navbar-nav")[0].classList.remove("absolute")
      dropdowns.classList.toggle("show");
      document.getElementsByClassName("container-fluid")[0].classList.toggle("extra-margin");
  }
  else{
      dropdowns.classList.remove("show");
      document.getElementsByClassName("container-fluid")[0].classList.remove("extra-margin");
  }
}