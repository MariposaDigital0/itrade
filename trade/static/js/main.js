const show = document.querySelector('#show');
const close = document.querySelector('.auth #close');
const auth = document.querySelector('.auth');

if (show) {
    show.addEventListener('click', () => {
        auth.style.display = 'flex';
    });
}

if (close) {
    close.addEventListener('click', () => {
        auth.style.display = 'none';
    });
}