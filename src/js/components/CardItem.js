class CardItem extends HTMLElement {
    // Constuctor
    constructor() {
        super();
        this.shadowHTML = this.attachShadow({ mode: "open" });
    }

    // Menerima data dari CardList.js
    set word(word) {
        this._word = word;
        console.log(`Menerima data dari CardList.js`)
        console.log(this._word)
        this.render();
    }

    // Render all HTML Elements
    render() {
        this.shadowHTML.innerHTML = `
        <style>
            :host {
                display:block;
                padding: 20px;
                background-color: white;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                margin-bottom: 20px;
            }
            
            :host h3 {
                font-weight: 700;
                font-size: 1.5rem;
                margin: 0;
                color: rgb(48, 174, 199);
            }

            .body {
                color: #242424;
                line-height: 180%;
            }
            
            .body span {
                font-weight: 500;
                font-size: 0.8rem;
                color: rgb(105, 82, 189);
                background-color: #f5f5f5;
                padding: 4px;
                border-radius: 2px;
            }
        </style>

        <h3>${this._word.lema}</h3>
        `
            // Membuat Element untukd deskripsi kata
        this._word.arti.forEach(wordDesc => {
            const descContainer = document.createElement("p");
            descContainer.classList.add("body");
            descContainer.innerHTML = `
            <span>${wordDesc.kelas_kata}</span> ${wordDesc.deskripsi}
            `
            this.shadowHTML.appendChild(descContainer);
        });
    }
}

customElements.define("card-item", CardItem);