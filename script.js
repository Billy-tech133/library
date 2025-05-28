let bookBtn = document.getElementById("bookBtn");
let form_wrapper = document.getElementById("form_wrapper");
let form = document.getElementById("formId");
let buttonCell;

let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];




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

Book.prototype.changeReadStatus = function(isRead) {
    if(this.isRead === false) {
        return isRead === true
    } else {
        return isRead === false
    }

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

        const bookRead = document.createElement('td');
        bookRead.textContent = book.isRead

        let buttonRead = document.createElement('button')
        buttonRead.textContent = "Read";
        buttonRead.classList.add('read_btn')
        buttonRead.addEventListener('click', () => {
           book.changeReadStatus(book.isRead)
        })
        
        
        buttonCell = document.createElement('button')
        buttonCell.textContent = "delete book";
        buttonCell.setAttribute("data-index", book.id)
        buttonCell.setAttribute("class", "delete_btn")

        

        row.appendChild(numberCell);
        row.appendChild(bookNameCell);
        row.appendChild(bookAuthorCell);
        row.appendChild(bookYearCell);
        row.appendChild(bookRead);
        row.appendChild(buttonRead)
        row.appendChild(buttonCell)
        table.appendChild(row)

        handleBookDelete();

    })
}

function handleBookDelete() {
    const deleteButtons = document.querySelectorAll(".delete_btn")
    
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", function() {
            const bookIndex = this.getAttribute("data-index")
            myLibrary = myLibrary.filter((book) => book.id !== bookIndex);
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            displayBooks()
        })
    })
}


 



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
    addBookToLibrary(crypto.randomUUID(), name, author, year, isRead=false)
})


displayBooks()

