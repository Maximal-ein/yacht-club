let themeBtnDark = document.querySelector('.theme-button-dark');
let themeBtnLight = document.querySelector('.theme-button-light');

let fontBtnSansSerif = document.querySelector('.font-button-sans-serif');
let fontBtnSerif = document.querySelector('.font-button-serif');

themeBtnDark.onclick = function () {
    themeBtnDark.classList.add('active');
    themeBtnLight.classList.remove('active');
    document.body.classList.add('dark');
}

themeBtnLight.onclick = function () {
    themeBtnLight.classList.add('active');
    themeBtnDark.classList.remove('active');
    document.body.classList.remove('dark');
}

fontBtnSerif.onclick = function () {
    fontBtnSerif.classList.add('active');
    fontBtnSansSerif.classList.remove('active');
    document.body.classList.add('serif');
}

fontBtnSansSerif.onclick = function () {
    fontBtnSansSerif.classList.add('active');
    fontBtnSerif.classList.remove('active');
    document.body.classList.remove('serif');
}


