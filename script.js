const text = document.querySelector(".dynamic");

const phrases = ["Frontend Developer", "Software Developer"];
let currentIndex = 0;

const textLoad = () => {
    text.textContent = phrases[currentIndex];  
    currentIndex = (currentIndex + 1) % phrases.length; 
};

textLoad(); 
setInterval(textLoad, 4000);  

// ---------for menu to show in mobile mode---------

document.querySelector(".menu img").addEventListener("click", function () {
    var nav = document.getElementById("nav");
    if (nav.style.transform === "translateX(-100%)") {
        nav.style.transform = "translateX(100%)"; // Hide the menu
    } else {
        nav.style.transform = "translateX(0%)"; // Show the menu
    }
});

//---------------To Close Menu ------------

document.getElementById("cross").addEventListener("click",function(){
var nav = document.getElementById("nav"); 
if (nav.style.transform === "translateX(0%)") {
    nav.style.transform = "translateX(100%)";
}else{
    nav.style.transform = "translateX(0%)"; 
}
});

 
