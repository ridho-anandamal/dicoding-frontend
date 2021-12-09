import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Navbar from './dom/navbar.js';
import Restaurant from './dom/restaurant.js';
import Gallery from './dom/gallery';
import SkipToContent from './dom/skipToContent.js'

window.addEventListener('load', function() {
    // Navbar Function
    Navbar.mobileScreenHideNav();
    Navbar.mobileScreenClickedNav();
    Navbar.mobileScreenClickNavItemHidden(1);
    Navbar.tabletScreenNav();

    // Consume data from /data/DataRestaurant.json
    Restaurant.consumeRestaurantData();

    // Consume data from /data/DataGallery.json
    Gallery.consumeGalleryData();

    // To show button Skip to Content
    // SkipToContent.appear();
    // SkipToContent.waitingtoDisappear();
    // const buttonSkip = document.getElementById("skipContainer");
    // buttonSkip.addEventListener('click', function() {
    //     SkipToContent.clicked()
    // });

});