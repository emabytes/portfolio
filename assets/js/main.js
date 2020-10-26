let navbar = document.querySelector(".navbar")
let hamburger = document.querySelector(".hamburger")
let navLinks = document.querySelectorAll(".navlink")

hamburger.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    console.log("hej")
    navbar.classList.toggle("showNav")
    hamburger.classList.toggle("showClose")
}
  
navLinks.forEach( 
    function(navlink) { 
      navlink.addEventListener("click", toggleHamburger) 
    }
  )