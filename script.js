let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read){
    let a = new Book(title, author, pages, read);
    myLibrary.push(a);
}

let addBook = document.getElementById("add");

addBook.addEventListener('click', event => {
   let a = document.getElementById("Title").value;
   let b = document.getElementById("Author").value;
   let c = document.getElementById("Pages").value;
   let d = document.getElementById("Status").checked;
   addBookToLibrary(a,b,c,d);
   deleteAllCards();
   buildLibraryCards();
});

function deleteAllCards() {
    let a = document.getElementsByClassName("book");
    while(a[0]){
        a[0].parentNode.removeChild(a[0]);
    }

}

function buildLibraryCards() {
    myLibrary.forEach(function (bookItem, index){
        a = bookItem.title;
        b = bookItem.author;
        c = bookItem.pages;
        d = bookItem.read;
        e = index;
        buildBookCard(a,b,c,d,e);
    }
    
    );

}


function buildBookCard(title, author, pages, read, index){
    const books = document.querySelector('.books');
    let nBook = document.createElement("div");
    nBook.setAttribute('data',index);
    let nTitle = document.createElement("h3");
    nTitle.textContent = title;
    let nAuthor = document.createElement("p");
    nAuthor.textContent = 'By ' + author;
    let nPages = document.createElement("p");
    nPages.textContent = pages + ' pages';
    if (read == true) {nBook.classList.add("book-read")} else {
        nBook.classList.add("book-unread")
    };
    let iconsdiv = document.createElement("div");
    iconsdiv.classList.add("book-icons")

    let icon1 = document.createElement("img");
    icon1.src="images/book-check-outline.svg";
    icon1.addEventListener('click', event => {
        markAsRead(nBook.getAttribute('data'))
    });

    let icon2 = document.createElement("img");
    icon2.src="images/book-cancel-outline.svg";
    icon2.addEventListener('click', event => {
        markAsUnread(nBook.getAttribute('data'))
    });

    let icon3 = document.createElement("img");
    icon3.src="images/book-minus-outline.svg";
    icon3.addEventListener('click', event => {
        delBook(nBook.getAttribute('data'))
    });

    iconsdiv.appendChild(icon1);
    iconsdiv.appendChild(icon2);
    iconsdiv.appendChild(icon3);


    nBook.classList.add("book");
    nBook.appendChild(nTitle);
    nBook.appendChild(nAuthor);
    nBook.appendChild(nPages);
    nBook.appendChild(iconsdiv);
    books.insertBefore(nBook, books.firstChild);
};



function markAsRead(index){
    myLibrary[index].read = true;
    deleteAllCards();
    buildLibraryCards();
}

function markAsUnread(index){
    myLibrary[index].read = false;
    deleteAllCards();
    buildLibraryCards();
}

function delBook(index){
    myLibrary.splice(index, 1);
    deleteAllCards();
    buildLibraryCards();
}