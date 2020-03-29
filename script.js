let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readYet = readYet
  this.info = function() {
      return [this.title, this.author, this.pages, this.readYet]
  }
}

const LittleMermaid = new Book('Little Mermaid', 'Author here', 890, 0)
const HarryPotter1 = new Book('Harry Potter & The', 'JK Rowling', 309, 1)
const HarryPotter2 = new Book('Harry Potter 2', 'JK Rowling', 459, 1)

function addBookToLibrary(newBook) {
  myLibrary.push(newBook.info())
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

    head0.innerHTML = "<b>Title</b>";
    head1.innerHTML = "<b>Author</b>";
    head2.innerHTML = "<b>Pages</b>";
    head3.innerHTML = "<b>Read</b>";

    //Print table results
    let i;
    for (i = 0; i < myLibrary.length; i++){
        var row = table.insertRow(i+1);

        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);

        cell0.innerHTML = myLibrary[i][0];
        cell1.innerHTML = myLibrary[i][1];
        cell2.innerHTML = myLibrary[i][2];
        cell3.innerHTML = myLibrary[i][3];
    }
}

addBookToLibrary(LittleMermaid)
addBookToLibrary(HarryPotter1)
addBookToLibrary(HarryPotter2)
render(myLibrary, 'tableOfBooks');
