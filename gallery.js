let anchors = document.querySelectorAll('.preview-list a');
let activePhoto = document.querySelector('.active-photo');
for (let anchor of anchors) {
    anchor.onclick = function (evt) {
        evt.preventDefault()
        document.querySelector('.active-item').classList.remove('active-item');
        anchor.classList.add('active-item');
        activePhoto.src = anchor.href;
    }
}