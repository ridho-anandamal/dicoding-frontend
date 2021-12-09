// Import Restaurant Data JSON
import * as restaurantDataList from "../data/DataRestaurant.json"

// Search restraurantList
const restaurantList = document.getElementById("restaurantList");

class Restaurant {
    // Extract Data
    static consumeRestaurantData() {
        restaurantDataList.default.restaurants.forEach(restaurantData => {
            console.log(`Data restaurant id: ${restaurantData.id} berhasil diambil`);
            this.renderRestaurantCard(restaurantData.name, restaurantData.description, restaurantData.pictureId, restaurantData.rating, restaurantData.city);
        });
    }

    // Render Element
    static renderRestaurantCard(name, description, imageUrl, rating, city) {
        const restaurantItem = document.createElement("a");
        restaurantItem.setAttribute("href", "#");
        restaurantItem.classList.add("restaurant-item");
        restaurantItem.innerHTML = `
                <div class="image">
                    <p class="tag">Kota ${city}</p>
                    <img src="${imageUrl}" alt="Image of ${name}">
                </div>
                <div class="content">
                    <h3 class="header">${name}</h3>
                    <p class="sub-header">Bintang <span>${rating}</span></p>
                    <p class="body">${description}</p>
                </div>
        `;
        restaurantList.appendChild(restaurantItem);
    }
}

export default Restaurant;