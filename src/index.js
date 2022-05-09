import sheet from './style.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];
let textArea;
let keyboard;
document.addEventListener("keydown",function(event) {
        event.preventDefault();
}, false);
class button{


constructor(value){
this.Key=value;

this.width= 25;
this.height= 25;
}

create(){
    let thisButton=document.createElement("div");
    let text = document.createElement('p');
    text.innerHTML=this.Key;
    thisButton.style.width=this.width+'px';
    thisButton.style.height=this.height+'px';
    thisButton.style.backgroundColor='red';
    thisButton.style.display='flex';
    thisButton.style.alignItems='center';
    thisButton.style.justifyContent='center';
    thisButton.appendChild(text);
    keyboard.appendChild(thisButton);
    thisButton.Key= this.Key;
    thisButton.addEventListener('click',function(){
        textArea.value+=this.Key;
    })
}

}


window.onload = function()
{
    const body = document.body;
keyboard = document.createElement("div");
textArea = document.createElement('textarea');
textArea.classList.add('textBox');

keyboard.innerHTML = "Привет!";
keyboard.classList.add('keyboardHolder')


let Main = document.createElement("div");

Main.classList.add('Main')

body.appendChild(Main);
Main.appendChild(textArea);
Main.appendChild(keyboard);
let language = 'rus';

document.cookie = `Cookielanguage=${language}`;

let qbut = new button('q');
qbut.create();

}
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  
}  

console.log(readCookie('Cookielanguage'));