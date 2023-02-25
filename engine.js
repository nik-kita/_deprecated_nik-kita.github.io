const ava = document.getElementById('ava');
let inOpera = true;

ava.addEventListener('click', () => {
    inOpera = !inOpera;
    ava.src = inOpera ? 'with-cat.ava.png' : 'in-opera.ava.png';
});
ava.addEventListener('hover', () => {
    ava.style.borderRadius = 0;
});
