// Importação de bibliotecas:

// Definição de constantes:
const html = document.querySelector('html');

// Definição de variáveis:
let themes;

// Definição de async function:
async function teminhas() {
    const themeCss = await fetch('./checkpoint/themes.css');
    const temas = await themeCss.text();
    themes = [...temas.matchAll(/:root\[data-theme='([^']+)'\]/g)].map(match => match[1]);
    themeChanger(0)
    return themes;
};
async function themeChanger(idx) {
    html.dataset.theme = themes[idx]
}

// Código:
teminhas();