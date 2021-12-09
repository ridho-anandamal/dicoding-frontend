const STORAGE_KEY = "BOOKSELF_APPS";

let bookself = [];

if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem(STORAGE_KEY) === null) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookself));
    }
}

function composeBookObject(id, bookName, bookAuthor, bookYear, isComplete) {
    return {
        id: id,
        title: bookName,
        author: bookAuthor,
        year: bookYear,
        isComplete: isComplete,
    }
}

function saveData(bookId, bookTitle, bookAuthor, bookYear, isComplete) {
    const bookObject = composeBookObject(bookId, bookTitle, bookAuthor, bookYear, isComplete);
    bookself.push(bookObject);
    console.log(bookself);
    sendDataToStorage(bookObject);
    window.location.reload();
    preventDefault();
}

function sendDataToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookself));
    console.log("Menyimpan Data Baru");
    console.log(bookself);
}

function getData() {
    console.log("Mengambil data..");
    if (STORAGE_KEY === null) {
        bookself = [];
    }
    bookself = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function loadData() {
    getData();
    for (book of bookself) {
        const textBookName = document.createElement("h3");
        textBookName.innerText = book.title;

        const textBookAuthor = document.createElement("p");
        textBookAuthor.classList.add("book-author");
        textBookAuthor.innerText = "Author: " +
            book.author;

        const textBookYear = document.createElement("p");
        textBookYear.classList.add("book-year");
        textBookYear.innerText = "Tahun: " + book.year;

        const textArticle = document.createElement("article");
        textArticle.classList.add("book_item")
        textArticle.append(textBookName, textBookAuthor, textBookYear);

        // Button Selesai Baca
        const buttonContainerComplete = document.createElement("div");
        buttonContainerComplete.classList.add("action")
        buttonContainerComplete.append(createNotReadButton(book.id), createDeleteButton(book.id))

        // Button Belum Selesai Baca
        const buttonContainerIncomplete = document.createElement("div");
        buttonContainerIncomplete.classList.add("action")
        buttonContainerIncomplete.append(createFinishReadButton(book.id), createDeleteButton(book.id));

        if (book.isComplete) {
            CompleteBookSelf.append(textArticle);
            textArticle.append(buttonContainerComplete);
        } else {
            inCompleteBookSelf.append(textArticle);
            textArticle.append(buttonContainerIncomplete);
        }
    }
    console.log("Berhasil Mengambil Data");
    console.log(bookself);
}

function findBookIndex(bookId) {
    let index = 0;
    for (book of bookself) {
        if (book.id === bookId) {
            return index;
        }
        index++;
    }
    return -1
}

function findBook(bookId) {
    for (book of bookself) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    loadData();
});