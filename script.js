let myLibrary = [];

const table = document.getElementById("tableOfBooks");


function Book(title, author, pages, readYet) {

    this.title = title
    this.author = author
    this.pages = pages
    this.readYet = readYet
    this.info = function() {
        return [this.title, this.author, this.pages, this.readYet]
  }
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook.info());
  render(myLibrary);
}

function render(myLibrary) {
    
    for (let book of myLibrary) {
        var row = table.insertRow(-1);

        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);

        let x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.checked = book.readYet;
        
        cell0.appendChild(x);

        cell1.innerHTML = this.title;
        cell2.innerHTML = this.author;
        cell3.innerHTML = this.pages;
        cell4.innerHTML = "<button class='remove'>x</button>";

        addRemoveListeners();
        addReadListeners();
    }    
};

//Event listener for add new book
document.getElementById("addNewBookButton").addEventListener('click', (e) => {

    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    readYet = document.getElementById("readYet").checked;
    
    let newBook = new Book(title, author, pages, readYet);
    addBookToLibrary(newBook);
}
);


function addRemoveListeners() {
    document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", () => {
            removeBook(button.parentElement.parentElement);
        })
    })
}

function removeBook(selectedRow) {
    const bookTitle = selectedRow.children[0].innerHTML; // gets title of book on row
    table.deleteRow(selectedRow.rowIndex);               // removes row from table

    for (i = 0; i < myLibrary.length; i++) {             // finds book title in myLibrary
        if (myLibrary[i].title == bookTitle) {           // and splices out book
            myLibrary.splice(i, 1); 
        }
    }
}

function addReadListeners() {
    document.querySelectorAll(".checkbox").forEach((checkbox) => {
        select.addEventListener("change", () => {
            updatedReadStatus(selectedRow);
        })
    })
}