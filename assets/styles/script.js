var myNav = document.getElementById('myNav');
var logoText = document.getElementById('logoText');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');

var navbarDropdown = document.getElementById('dropdownButton');
var navbarList = document.getElementById('navbarList');

window.onscroll = () => {
    if (window.scrollY > 500) {
        // Change Background Color
        myNav.classList.add("bg-white");
        // Change Logo Text
        logoText.classList.add("color-blue");
        // Change Text Color
        text1.classList.add("color-black");
        text2.classList.add("color-black");
        text3.classList.add("color-black");
        text4.classList.add("color-black");
        // Change Button
        navbarDropdown.classList.add("bg-blue")
    } else {
        // Change Background Color
        myNav.classList.remove("bg-white");
        // Change Logo Text
        logoText.classList.remove("color-blue");
        // Change Text Color
        text1.classList.remove("color-black");
        text2.classList.remove("color-black");
        text3.classList.remove("color-black");
        text4.classList.remove("color-black");
        // Change Button
        navbarDropdown.classList.remove("bg-blue")
    }
};

function dropdownFunction() {
    if (navbarList.style.display === "none") {
        navbarList.style.display = "flex";
    } else {
        navbarList.style.display = "none";
    }
}