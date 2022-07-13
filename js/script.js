let library = [
    'To Kill a Mockingbird by Harper Lee (1960)',
    'Where the Sidewalk Ends by Shel Silverstein (1974)',
    'Valley of the Dolls by Jacqueline Susann (1966)',
    'The Shining by Stephen King (1977)',
    'The Little Prince by Antoine de Saint-Exupéry (1943)',
    'The Fellowship of the Ring by J.R.R. Tolkien (1954)',
    'The Handmaid\'s Tale by Margaret Atwood (1985)',
    'A Wrinkle in Time by Madeleine L\'Engle (1962)',
    'Pride and Prejudice by Jane Austen (1813)',
    'Beloved by Toni Morrison (1987)',
    'Dune by Frank Herbert (1965)',
];

let container = document.getElementById('container');
function libraryFill() {
    document.getElementById('container').innerHTML = ''
    library.forEach((item) => {
        let div = document.createElement('div');
        let remove = document.createElement('button')
        div.innerText = item;
        container.appendChild(div);
        remove.classList.add('remove');
        remove.innerText = '-';
        div.appendChild(remove);
        let removeButtons = document.querySelectorAll('.remove')
        for (let i = 0; i < removeButtons.length; i++) {
            let removeButton = removeButtons[i];
            removeButton.addEventListener('click', () => {
                library.splice(i, 1);
                libraryFill();
            });
        }
    })
}

libraryFill();

// document.querySelector('#container > div:nth-child(5) > :nth-child(1)').dataset.id

// document.querySelectorAll('.remove')[1]

let removeBook = () => {
    library.shift(this.dataset.id);
    libraryFill();
}


let button = document.getElementById('new-book');
let popup = document.getElementById('popup');
button.addEventListener('click', () => {
    popup.classList.toggle('hide');
});

let hidepopup = document.getElementById('container');
hidepopup.addEventListener('click', () => {
    popup.classList.add('hide');
});

function addBookToLibrary() {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let year = document.getElementById('year');
    let book = (title.value + ' by ' + author.value + ' ' + '(' + year.value + ')');
    library.push(book);
    popup.classList.add('hide');
    libraryFill();
    title.value = '';
    author.value = '';
    year.value = '';
}

let addBook = document.getElementById('submit');
addBook.addEventListener('click', () => {
    addBookToLibrary();
});