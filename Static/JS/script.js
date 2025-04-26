// GSAP
// hidden right
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showw");
    } else {
      entry.target.classList.remove("showw");
    }
  });
});
let hidddenElement = document.querySelectorAll(".hidddenright");
hidddenElement.forEach((el) => observer.observe(el));

// hidden left
let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showw");
    } else {
      entry.target.classList.remove("showw");
    }
  });
});
let hidddenElement2 = document.querySelectorAll(".hidddenleft");
hidddenElement2.forEach((el) => observer2.observe(el));

// hiddden
let observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showw");
    } else {
      entry.target.classList.remove("showw");
    }
  });
});
let hidddenElement3 = document.querySelectorAll(".hiddden");
hidddenElement3.forEach((el) => observer3.observe(el));




// navBar effect
var prevScrollpos = window.pageYOffset;
let navBar = document.getElementById("navbar");
let nav_toggler = document.getElementById("nav_toggler");

nav_toggler.onclick = () => {
  navBar.style.cssText = `
            background: white !important;
        `;
};
function myFunction(x) {
  if (x.matches) {
    window.onscroll = function () {
    
        if (this.scrollY >= 60) {
          navBar.style.cssText = `
            background: white !important; 
            padding-bottom: 40px;
            box-shadow: 10px -30px 100px black
            `;
        }
        if (this.scrollY <= 60) {
          navBar.style.cssText = `
                background: none !important;
            `;
        }
    };

  } else {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    
        if (this.scrollY >= 60) {
          navBar.style.cssText = `
            background: white !important; 
            padding-bottom: 40px;
            box-shadow: 10px -30px 100px black
            `;
        }
        if (this.scrollY <= 60) {
          navBar.style.cssText = `
                background: none !important;
            `;
        }
      } else {
        navBar.style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    };
  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction) 










// grams function
let gramsbuttons1 = document.getElementById("gramsbuttons1");
let gramsbuttons2 = document.getElementById("gramsbuttons2");
// hover
let main_img344 = document.getElementById("main_img344");
let img1212 = document.getElementById("fwt3524t");
let img423432 = document.getElementById("5354hfhg5");


if(!img423432.src){
  gramsbuttons1.style.display = "none"
}

if(!img1212.src){
  gramsbuttons2.style.display = "none"
}

function funn11(){
  main_img344.src = img423432.src;
} 
function funn22(){
  main_img344.src = img1212.src;
} 






