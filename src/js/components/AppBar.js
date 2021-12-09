class AppBar extends HTMLElement {
    // Constuctor
    constructor() {
        super();
        this.shadowHTML = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    // Memberikan event tertentu
    set clickEvent(event) {
        this._clickEVent = event;
        this.render();
    }

    // Mengambil nilai dari #searchForm
    get value() {
        return this.shadowHTML.querySelector("#searchForm").value;
    }

    // Render all HTML Elements
    render() {
        this.shadowHTML.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 0 40px;
                background: linear-gradient(142deg, rgba(9, 9, 121, 1) 0%, rgba(8, 112, 133, 1) 100%);
                color: white;
            }
        
            h1 {
                font-weight: 500;
            }
            
            .search-form {
                display: flex;
                flex-direction: row;
            }
            
            .search-form .search-word-form {
                width: 300px;
                margin-right: 15px;
                padding: 10px 20px;
                border-radius: 4px;
                font-size: 1rem;
                color: rgba(8, 112, 133, 1);
                outline: none;
                border: none;
            }
            
            .search-form .search-word-form::placeholder {
                color: rgba(8, 112, 133, 0.5);
            }
            
            .search-form .search-word-form:focus {
                outline: 5px solid rgba(255, 255, 255, 0.3);
            }
            
            .search-form .search-word-button {
                padding: 10px 20px;
                font-size: 1rem;
                background-color: white;
                color: rgba(8, 112, 133, 1);
                border: none;
                outline: none;
                cursor: pointer;
                border-radius: 4px;
                animation: ease-in 2s;
            }
            
            .search-form .search-word-button:hover {
                outline: 5px solid rgba(255, 255, 255, 0.3);
            }
            
            .search-form .search-word-button:active {
                background-color: rgb(231, 231, 231);
                color: rgba(8, 112, 133, 1);
                outline: none;
            }

            @media only screen and (max-width: 700px) {
                :host {
                    flex-direction: column;
                    padding: 0 20px 20px 20px;
                    background: linear-gradient(180deg, rgba(9, 9, 121, 1) 0%, rgba(8, 112, 133, 1) 100%);
                }
                .search-form {
                    width: 100%;
                }
                .search-form .search-word-form {
                    width: 100%;
                }
                .search-form .search-word-button {
                    width: 150px;
                }
            }
        </style>

        <div class="header">
            <h1>KBBI Web</h1>
        </div>
        <div class="search-form">
            <input id="searchForm" type="search" placeholder="Contoh: Demokrasi" class="search-word-form">
            <button id="searchButton" type="submit" class="search-word-button">Cari Kata</button>
        </div>
        `
        this.shadowHTML.querySelector("#searchButton").addEventListener("click", this._clickEVent);
    }
}

// Mengimplementasi kustom Element
customElements.define("app-bar", AppBar);