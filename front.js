const th = document.getElementsByClassName('toggle-hover');

Array.from(th).forEach(div => {
    let show = true;
    const inners = div.querySelector('*');

    div.addEventListener('click', () => {
        show = !show;

        inners.forEach((inner) => {
            inner.style.display = show ? 'inherit' : 'none';
        });
    });
});
