let articles = document.querySelectorAll('.blog-article.short');

for (let article of articles) {
    let moreBtn = article.querySelector('.more');
    moreBtn.onclick = function () {
        article.classList.remove('short');
    }
}