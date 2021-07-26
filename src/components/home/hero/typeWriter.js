let i = 0;
const txt = 'Producer  |  Ex-vegan  |  First-time visitor to Lithuania';
const speed = 100;

export function typeWriter() {
    const DOM = document.querySelector(".hero .titles");
    if (!DOM) return;
    if (window.innerWidth > 860) {
        if (i < txt.length) {
            DOM.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

        }
    } else {
        DOM.innerHTML = txt;
    }

}