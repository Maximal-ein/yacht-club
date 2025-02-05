let listView = document.querySelector('.card-view-button-list');
let gridView = document.querySelector('.card-view-button-grid');
let cards = document.querySelector('.cards');

listView.onclick = function () {
    listView.classList.add('active');
    gridView.classList.remove('active');
    cards.classList.add('list');
}

gridView.onclick = function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    cards.classList.remove('list');
}