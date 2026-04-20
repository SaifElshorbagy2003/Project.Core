let current = 0;
let slidesWrapper = document.querySelector('.slides-wrapper');
let slides = document.querySelectorAll('.img');

document.querySelector('.next').onclick = function() {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    slidesWrapper.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector('.prev').onclick = function() {
    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    slidesWrapper.style.transform = `translateX(-${current * 100}%)`;
}

let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.getElementById('closeBtn');
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementById('overlay');

menuBtn.onclick = function() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
}

closeBtn.onclick = function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

overlay.onclick = function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightboxImg');
let lightboxClose = document.getElementById('lightboxClose');
let galleryImgs = document.querySelectorAll('.photos img');

for (let i = 0; i < galleryImgs.length; i++) {
    galleryImgs[i].onclick = function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('open');
    }
}

lightboxClose.onclick = function() {
    lightbox.classList.remove('open');
}

lightbox.onclick = function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('open');
    }
}