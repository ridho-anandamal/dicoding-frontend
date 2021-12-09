import "../components/CardItem.js";

class CardList extends HTMLElement {
    // Constuctor
    constructor() {
        super();
        this.shadowHTML = this.attachShadow({ mode: "open" });
    }

    // Menerima data dari main.js
    set words(words) {
        this._words = words;
        console.log(`Menerima data dari main.js:`)
        if (typeof(this._words) === "undefined") {
            this.renderError();
        }
        console.log(this._words);
        this.render();
    }

    // Render all HTML Elements
    render() {
        this.shadowHTML.innerHTML = "";
        this._words.forEach(wordExtracted => {
            const cardItemWord = document.createElement("card-item");
            cardItemWord.word = wordExtracted;
            this.shadowHTML.appendChild(cardItemWord);
            console.log(wordExtracted);
        });
    }

    // Render jika gagal
    renderError() {
        this.shadowHTML.innerHTML += `
        <style>
            h2{
                display: block;
                font-size: 1rem;
                font-weight: normal;
                padding: 15px 20px;
                width: auto;
                background-color: white;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }
        </style>
        
        <h2 class="placeholder">Kata tidak ditemukan atau terkena limit</h2>`;
    }
}

customElements.define("card-list", CardList);