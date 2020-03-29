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
    //Build the table head
    var thead = table.createTHead();
    let headRow = thead.insertRow();
    var head0 = headRow.insertCell(0);
    var head1 = headRow.insertCell(1);
    var head2 = headRow.insertCell(2);
    var head3 = headRow.insertCell(3);
    var head4 = headRow.insertCell(4);

    head0.innerHTML = "<b>Read?</b>";
    head1.innerHTML = "<b>Title</b>";
    head2.innerHTML = "<b>Author</b>";
    head3.innerHTML = "<b>Pages</b>";

    //Print table results
    let i;
    for (i = 0; i < myLibrary.length; i++){
        var row = table.insertRow(i+1);

        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);

        cell0.innerHTML = myLibrary[i][4];
        cell1.innerHTML = myLibrary[i][1];
        cell2.innerHTML = myLibrary[i][2];
        cell3.innerHTML = myLibrary[i][3];
        cell4.innerHTML = "<button onclick='removeRow(this)'>x</button>";

    }
}

//Use DOM Manipulation to clear the table of old results
function clearTable(){
    var tableHeaderRowCount = 1;
    var table = document.getElementById('tableOfBooks');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i <= rowCount; i++) {
        table.deleteRow(-1);
    }
}

addBookToLibrary(LittleMermaid)
addBookToLibrary(HarryPotter1)
addBookToLibrary(HarryPotter2)
render(myLibrary, 'tableOfBooks');

//Event listener for add new book
document.getElementById("addNewBookButton").addEventListener('click', (e) => {

    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    readYet = document.getElementById("readYet").checked;
    
    let newBook = new Book(title, author, pages, readYet);
    addBookToLibrary(newBook)

    clearTable();
    render(myLibrary, 'tableOfBooks')
    
    //For testing only
    console.log(myLibrary)

}
);

//Event listener for deleting books
removeRow = function(cellToRemove) {
    console.log("delete")
    p=cellToRemove.parentNode.parentNode;
    p.parentNode.removeChild(p);      
}
