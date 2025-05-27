let bookBtn = document.getElementById("bookBtn");
let form_wrapper = document.getElementById("form_wrapper");
let form = document.getElementById("formId");
let buttonCell;
const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [
    book1 = {
        id: crypto.randomUUID(),
        name: "Harry Potter",
        author: "JK Rowlins",
        year: 1999,
        isRead: false
    },
    book2 = {
        id: crypto.randomUUID(),
        name: "atomic habits",
        author: "James Clear",
        year: 2018,
        isRead: false
    },
    book3 = {
        id: crypto.randomUUID(),
        name: "48 Laws Of Power",
        author: "Robert Greene",
        year: 1998,
        isRead: false
    },
    book4 = {
        id: crypto.randomUUID(),
        name: "Relentless",
        author: "Tim Groover",
        year: 2021,
        isRead: false
    }

];




function Book(id, name, author, year, isRead) {
    if(!new.target) {
        throw Error("the new keyword cannot be missing")
    }
    this.id = id
    this.name = name
    this.author = author
    this.year = year
    this.isRead = isRead
}

function addBookToLibrary(id, name, author, year, isRead) {
    const newBook = new Book(id, name, author, year, isRead)
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
}



function displayBooks() {
    const table = document.querySelector("#card_table tbody");
    table.innerHTML = "";

    
    myLibrary.forEach((book, index) => {

        const row = document.createElement('tr');
        const numberCell = document.createElement('td');

        numberCell.textContent = index + 1;

        const bookNameCell = document.createElement('td');
        bookNameCell.textContent = book.name;

        const bookAuthorCell = document.createElement('td');
        bookAuthorCell.textContent = book.author

        const bookYearCell = document.createElement('td');
        bookYearCell.textContent = book.year;

        buttonCell = document.createElement('button')
        buttonCell.textContent = "delete book"

        buttonCell.onclick = function() {
            myLibrary.filter((book) => book.id != id);
        }

        row.appendChild(numberCell);
        row.appendChild(bookNameCell);
        row.appendChild(bookAuthorCell);
        row.appendChild(bookYearCell);
        row.appendChild(buttonCell)
        table.appendChild(row)
    })
}

// buttonCell.onclick = () => {
//     myLibrary.filter((book) => book.id != id)
// }

function toggleForm() {
    if(form_wrapper.style.display === "none" || form_wrapper.style.display === "") {
        form_wrapper.style.display = "flex"
    } else {
        form_wrapper.style.display = "none"
    }
}
bookBtn.onclick = () => {
    toggleForm()
}

form.addEventListener('submit', function(){
    const name = document.getElementById("bookName").value
    const author = document.getElementById("bookAuthor").value
    const year = document.getElementById("bookYear").value

    addBookToLibrary(crypto.randomUUID(), name, author, year)
    
})



displayBooks()
