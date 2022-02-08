window.addEventListener("hashchange", handleHashChange, false);

const display = document.getElementById('display');
const style = document.getElementById('styleElement');

function handleHashChange(e) {
    const hash = location.hash.substr(1);
    const up = new URLSearchParams(hash);
    const theme = up.get('theme');

    style.innerText = `body { background-color: ${theme}; }`;
}

handleHashChange(); // first hit
