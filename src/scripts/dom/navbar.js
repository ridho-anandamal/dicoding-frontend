// Media Query Screen
const screenMobile = window.matchMedia('(max-width: 450px)');
const screenTablet = window.matchMedia('(min-width: 451px)');

// Search Element by ID
const buttonMenu = document.getElementById("buttonMenu");
const navList = document.getElementById("navList");
const navItem = document.getElementsByClassName("nav-item");

class Navbar {
    // If screensize is mobile, then hide nav list
    static mobileScreenHideNav() {
        if (screenMobile.matches) {
            navList.classList.add("hidden");
        }
    }

    // If menu button clicked, show nav list
    static mobileScreenClickedNav() {
        buttonMenu.addEventListener("click", function() {
            if (!(navList.classList.contains("hidden"))) {
                navList.classList.add("hidden");
            } else {
                navList.classList.remove("hidden");
            }
        });
    }

    // If nav item "Favorite" clicked, then nav list hidden
    static mobileScreenClickNavItemHidden(index) {
        navItem.item(index).addEventListener("click", function() {
            navList.classList.add("hidden");
        });
    }

    // If screensize change, then nav list hidden or not
    static tabletScreenNav() {
        window.addEventListener('resize', function() {
            if (screenMobile.matches) {
                navList.classList.add("hidden");
            }
            if (screenTablet.matches) {
                navList.classList.remove("hidden");
            }
        });
    }
}

export default Navbar;