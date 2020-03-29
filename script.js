let myLibrary = [];
let totalBooks = 0;

function Book(title, author, pages, readYet) {
    
    this.uid = totalBooks
    totalBooks += 1

    this.title = title
    this.author = author
    this.pages = pages
    this.readYet = readYet
    this.info = function() {
        return [this.uid, this.title, this.author, this.pages, this.readYet]
  }
}

const LittleMermaid = new Book('Little Mermaid', 'Author here', 890, true)
const HarryPotter1 = new Book('Harry Potter & The', 'JK Rowling', 309, false)
const HarryPotter2 = new Book('Harry Potter 2', 'JK Rowling', 459, true)

function addBookToLibrary(newBook) {
  myLibrary.push(newBook.info());
}

function render(myLibrary, tableID){
    var table = document.getElementById(tableID);
    var row = table.insertRow(-1);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = myLibrary[myLibrary.length - 1][4];
    cell1.innerHTML = myLibrary[myLibrary.length - 1][1];
    cell2.innerHTML = myLibrary[myLibrary.length - 1][2];
    cell3.innerHTML = myLibrary[myLibrary.length - 1][3];
    cell4.innerHTML = "<button onclick='removeRow(this)'>x</button>";
}

//Event listener for add new book
document.getElementById("addNewBookButton").addEventListener('click', (e) => {

    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    readYet = document.getElementById("readYet").checked;
    
    let newBook = new Book(title, author, pages, readYet);
    addBookToLibrary(newBook);

    render(myLibrary, 'tableOfBooks');

}
);

//Event listener for deleting books
removeRow = function(cellToRemove) {
    p = cellToRemove.parentNode.parentNode;
    console.log(p);
    p.parentNode.removeChild(p);
          
}
