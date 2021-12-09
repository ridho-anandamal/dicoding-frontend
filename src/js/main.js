// Mengimport element Appbar
import "../js/components/AppBar.js";
import "../js/components/CardList.js"

// Mengimport function FetchWord.searchWord
import FetchWord from "./fetch/FetchWord.js";

function main() {
    // Mengambil element app-bar
    const searchWordElement = document.querySelector("app-bar");
    if (typeof(searchWordElement) != "undefined" && searchWordElement != null) {
        console.log("Berhasil mengambil element Appbar")
        console.log(searchWordElement);
    } else {
        console.error("Element tidak ditemukan")
    }

    // Mengambil element card-list
    const listWordElement = document.querySelector("card-list");
    if (typeof(listWordElement) != "undefined" && listWordElement != null) {
        console.log("Berhasil mengambil element Card List")
        console.log(listWordElement);
    } else {
        console.error("Element tidak ditemukan")
    }

    // Event saat mencari data
    searchWordElement.clickEvent = () => {
        FetchWord.searchWord(searchWordElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    }

    // Jika berhasil GET data
    const renderResult = result => {
        console.info(`Status: GET ${result.message}`);
        console.info(result.data)
        listWordElement.words = result.data;
    }

    // Jika gagal GET data
    const fallbackResult = result => {
        console.log(`Status: ${result.message}`);
        listWordElement.renderError(result);
    }
}

// Export main function
export default main;