// Import Gallery Data JSON

import * as galleryDataList from '../data/DataGallery.json';

// Search galleryList
const galleryList = document.getElementById("galleryList");

class Gallery {
    static consumeGalleryData() {
        galleryDataList.default.gallery.forEach(image => {
            console.log(`Data gallery ${image.id} berhasil diambil`);
            this.renderGalleryImage(image.imageUrl, image.caption);
        });
    }

    static renderGalleryImage(url, caption) {
        const figure = document.createElement("figure");
        figure.setAttribute("tabindex", 0);
        figure.classList.add("image");
        figure.innerHTML = `
            <img src="./images/heros/${url}" alt="${caption}">
            <figcaption>${caption}</figcaption>
        `
        galleryList.appendChild(figure);
    }
}

export default Gallery;