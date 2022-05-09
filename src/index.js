import sheet from './style.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];
window.onload = function()
{
    const body = document.body;
let keyboard = document.createElement("div");
keyboard.innerHTML = "Привет!";
keyboard.classList.add('keyboardHolder')


let Main = document.createElement("div");

Main.classList.add('Main')

body.appendChild(Main);
Main.appendChild(keyboard);
let language = 'rus';

document.cookie = `Cookielanguage=${language}`;
 

}
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  
}  

console.log(readCookie('Cookielanguage'));