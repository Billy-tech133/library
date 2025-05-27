const myLibrary = [
    book1 = {
        id: crypto.randomUUID(),
        name: "Harry Potter",
        author: "JK Rowlins",
        year: "1999"
    },
    book2 = {
        id: crypto.randomUUID(),
        name: "atomic habits",
        author: "James Clear",
        year: "2018"
    },
    book3 = {
        id: crypto.randomUUID(),
        name: "48 Laws Of Power",
        author: "Robert Greene",
        year: "1998"
    },
    book4 = {
        id: crypto.randomUUID(),
        name: "Relentless",
        author: "Tim Groover",
        year: "2021"
    }
];

function Book(id, name, author, year) {
    this.id = id
    this.name = name
    this.author = author
    this.year = year

}

function addBookToLibrary() {
    const newBook = new Book(crypto.randomUUID(), "miracle morning millioniares", 'Hal elrod', 2018)
    myLibrary.push(newBook);
}

addBookToLibrary();

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


        row.appendChild(numberCell);
        row.appendChild(bookNameCell);
        row.appendChild(bookAuthorCell);
        row.appendChild(bookYearCell);

        table.appendChild(row)
    })
}


console.log(displayBooks());