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
        div.innerText = item;
        container.appendChild(div);
        let remove = document.createElement('button');
        remove.innerText = '×';
        remove.classList.add('remove');
        div.appendChild(remove);
        let read = document.createElement('button');
        read.classList.add('read');
        div.appendChild(read);
    })
}

libraryFill();

let removeBook = () => {
    for (let i = 0; i < library.length; i++) {
        document.querySelectorAll('.remove')[i].addEventListener('click', () => {
            library.splice(i, 1);
            libraryFill(); 
            checkCheckMark();
            checkMark();
            removeBook();
        })
    }
}

removeBook();

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
    removeBook();
    checkMark();
    title.value = '';
    author.value = '';
    year.value = '';
}

let addBook = document.getElementById('submit');
addBook.addEventListener('click', () => {
    addBookToLibrary();
});

let checkMark = () => {
    for (let i = 0; i < library.length; i++) {
        let read = document.querySelectorAll('.read')[i]
        read.addEventListener('click', () => {
            if (read.innerText === '') {
                read.innerText = '✓';
                localStorage.setItem(`check${i}`, 'yes');
            } else {
                read.innerText = '';
                localStorage.setItem(`check${i}`, 'no');
            }
        })
    }
}

checkMark();

let checkCheckMark = () => {
    for (let i = 0; i < library.length; i++) {
        let read = document.querySelectorAll('.read')[i]
        if (localStorage.getItem(`check${i}`) === 'yes') {
            read.innerText = '✓';
        } else if (localStorage.getItem(`check${i}`) === 'no') {
            read.innerText = '';
        }
    }
};

checkCheckMark();