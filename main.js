const UNCOMPLETED_BOOK_READ = document.getElementById("incompleteBookshelfList");
const COMPLETE_BOOK_READ = document.getElementById("completeBookshelfList");

const bookTitle = document.getElementById("inputBookTitle");
const bookAuthor = document.getElementById("inputBookAuthor");
const bookYear = document.getElementById("inputBookYear");
const checkbox = document.getElementById("inputBookIsComplete");
let isComplete = false;

const buttonSubmit = document.getElementById("inputBook");
const inCompleteBookSelf = document.getElementById("incompleteBookshelfList");
const CompleteBookSelf = document.getElementById("completeBookshelfList");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        isComplete = true
        document.querySelector("span").innerText = "Selesai dibaca"
    } else {
        isComplete = false
        document.querySelector("span").innerText = "Belum selesai dibaca"
    }
});

buttonSubmit.addEventListener('submit', function(event) {
    const bookIdValue = new Date().getTime();
    const bookTitleValue = bookTitle.value;
    const bookAuthorValue = bookAuthor.value;
    const bookYearValue = bookYear.value;
    event.preventDefault();

    saveData(bookIdValue, bookTitleValue, bookAuthorValue, bookYearValue, isComplete);
});

function createButton(buttonTypeClass, buttonText, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.innerHTML = buttonText;
    button.addEventListener("click", function(event) {
        eventListener(event);
    });
    return button
}

function createFinishReadButton(bookId) {
    return createButton("green", "Selesai dibaca", function(event) {
        taskFinishReadBook(bookId);
    })
}

function createNotReadButton(bookId) {
    return createButton("green", "Belum selesai di Baca", function(event) {
        taskNotReadBook(bookId);
    })
}

function createDeleteButton(bookId) {
    return createButton("red", "Hapus", function(event) {
        taskDeleteBook(bookId, event.target.parentElement);
    })
}


function taskFinishReadBook(bookId) {
    bookPosition = findBook(bookId);
    bookIndex = findBookIndex(bookId);

    console.log("Selesai baca dengan Id: " + bookId);
    console.log(bookPosition);
    console.log("Index ke " + bookIndex);

    console.log(bookPosition.isComplete);
    const bookNewId = bookId;
    const bookNewTitle = bookPosition.title;
    const bookNewAuthor = bookPosition.author;
    const bookNewYear = bookPosition.year;
    const newIsComplete = (bookPosition.isComplete == true) ? isComplete = false : isComplete = true;

    console.log(bookNewId);
    console.log(bookNewTitle);
    console.log(bookNewAuthor);
    console.log(bookNewYear);
    console.log(newIsComplete);

    bookself.splice(bookIndex, 1);
    saveData(bookNewId, bookNewTitle, bookNewAuthor, bookNewYear, newIsComplete);
}

function taskNotReadBook(bookId) {
    bookPosition = findBook(bookId);
    bookIndex = findBookIndex(bookId);

    console.log("Selesai baca dengan Id: " + bookId);
    console.log(bookPosition);
    console.log("Index ke " + bookIndex);

    console.log(bookPosition.isComplete);
    const bookNewId = bookId;
    const bookNewTitle = bookPosition.title;
    const bookNewAuthor = bookPosition.author;
    const bookNewYear = bookPosition.year;
    const newIsComplete = (bookPosition.isComplete == true) ? isComplete = false : isComplete = true;

    console.log(bookNewId);
    console.log(bookNewTitle);
    console.log(bookNewAuthor);
    console.log(bookNewYear);
    console.log(newIsComplete);

    bookself.splice(bookIndex, 1);
    saveData(bookNewId, bookNewTitle, bookNewAuthor, bookNewYear, newIsComplete);
}

function taskDeleteBook(bookId, bookElement) {
    console.log("Menghapus Id:" + bookId);
    const bookPosition = findBookIndex(bookId);
    bookself.splice(bookPosition, 1);
    bookElement.parentElement.remove();
    console.log(bookself);
    sendDataToStorage(bookself);
}