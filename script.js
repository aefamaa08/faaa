const images = document.querySelectorAll('.slider img');
let current = 0;

function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

document.querySelector(".arrow.right").onclick = () => {
    current = (current + 1) % images.length;
    showSlide(current);
};

document.querySelector(".arrow.left").onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
};
