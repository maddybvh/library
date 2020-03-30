let myLibrary = [];

const table = document.getElementById("tableOfBooks");


function Book(title, author, pages, readYet) {

    this.title = title
    this.author = author
    this.pages = pages
    this.readYet = readYet
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  render(myLibrary);
}

function render(myLibrary) {
    
    clearTable();

    for (book of myLibrary) {

        var row = table.insertRow(1);

        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);

        let x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("class","readCheckbox")
        x.checked = book.readYet;
        
        cell0.appendChild(x);

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.pages;
        cell4.innerHTML = "<button class='removeButton'>x</button>";

        addRemoveListeners();
        addReadListeners();
    }    
};

//
function clearTable() {
    var tableHeaderRowCount = 1;
    var table = document.getElementById('tableOfBooks');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

//Event listener for add new book
document.getElementById("addNewBookButton").addEventListener('click', (e) => {

    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    readYet = document.getElementById("readYet").checked;
    
    let book = new Book(title, author, pages, readYet);
    addBookToLibrary(book);
}
);


function addRemoveListeners() {
    document.querySelectorAll(".removeButton").forEach((button) => {
        button.addEventListener("click", () => {
            removeBook(button.parentElement.parentElement); // passes same row as remove button
        })
    })
}
function removeBook(selectedRow) {
    const bookTitle = selectedRow.children[1].innerHTML; // gets title of book on row
    console.log(bookTitle);
    for (i = 0; i < myLibrary.length; i++) {   
        if (myLibrary[i].title == bookTitle) {       
            myLibrary.splice(i, 1); 
        }
    }
    render(myLibrary);
}

function addReadListeners() {
    document.querySelectorAll(".readCheckbox").forEach((input) =>{
        input.addEventListener("click", () => {
            toggleRead(input.parentElement.parentElement); // passes same row as remove button
        })
    })
}

function toggleRead(selectedRow) {
    const bookTitle = selectedRow.children[1].innerHTML;
    for (i = 0; i < myLibrary.length; i++) {   
        if (myLibrary[i].title == bookTitle) {                   
            x = myLibrary[i].readYet
            myLibrary[i].readYet = !x
            console.log(myLibrary[i].readYet)
        }
    }    
}