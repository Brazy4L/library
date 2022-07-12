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

library.forEach((item) => {
    let div = document.createElement('div');
    div.innerText = item;
    container.appendChild(div);
});


(()=>{
    let button = getElementById('new-book')
});

function addBookToLibrary() {
    library.push();
}

