import sheet from './style.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];
let textArea;
let keyboard;
let isShift=false;
let language;

const disableselect = (e) => {  
    return false  
  }  
  document.onmouseup = disableselect;  


document.addEventListener("keydown",function(event) {
    event.preventDefault(); 
if (event.code==='ShiftLeft'||event.code==='ShiftRight'){
    
    isShift=true;

}
if (event.code==='CapsLock'){
    isShift=!isShift;
}


}, false);
document.addEventListener("keyup",function(event) {
    console.log(event.code);    
if (event.code==='ShiftLeft'||event.code==='ShiftRight'){
isShift=false;

}


}, false);

document.addEventListener("keydown",function(event) {
    let flag;
    if (event.altKey){flag=true;}
    if (event.shiftKey&&flag){

        flag=false;
        console.log('shift+alt');

        if (language==='rus'){
            language='eng';
            document.cookie = `Cookielanguage=${language}`;
            console.log(language);
        
        }else{
            language='rus';
            document.cookie = `Cookielanguage=${language}`;
            console.log(language);

        }
    
    
    }
})
class button{


constructor(value,rusvalue='',shiftValue,rusShift){
this.Key=value;
this.KeyShift=shiftValue;
this.rusKey=rusvalue;
this.rusShift=rusShift;
this.width= 25;
this.height= 25;
}

create(){
    let thisButton=document.createElement("div");
    let text = document.createElement('p');
    if (language==='eng'){
    text.innerHTML=this.Key.toUpperCase();}
    else {
        text.innerHTML=this.rusKey.toUpperCase();   
    }
    thisButton.style.width=this.width+'px';
    thisButton.style.height=this.height+'px';
    thisButton.style.display='flex';
    thisButton.style.alignItems='center';
    thisButton.style.justifyContent='center';
    thisButton.classList.add('buttonMy');
    thisButton.appendChild(text);
    keyboard.appendChild(thisButton);
    thisButton.Key= this.Key;
    thisButton.KeyShift= this.KeyShift;
    thisButton.rusKey= this.rusKey;
    thisButton.rusShift= this.rusShift;
    document.addEventListener("keydown",function(event) {
       
        let flag;
        if (event.altKey){flag=true;}
        if (event.shiftKey&&flag){
            if (language==='eng'){
                text.innerHTML=thisButton.Key.toUpperCase();}
                else {
                    text.innerHTML=thisButton.rusKey.toUpperCase();   
                }

        }
    
        if ((event.code===`Key${thisButton.Key.toUpperCase()}`)||(event.code===`Digit${thisButton.Key}`)){
            thisButton.classList.toggle('pressed');
            if (language==='rus'){if (isShift){
                let x = textArea.value;
                textArea.setSelectionRange(textArea.selectionStart, textArea.selectionStart);
                textArea.value = x.slice(0, textArea.selectionStart) + thisButton.rusShift + x.slice(textArea.selectionStart);
            
            } else{ let x = textArea.value;
                textArea.value = x.slice(0, textArea.selectionStart) + thisButton.rusKey + x.slice(textArea.selectionStart);

            }}else{
            if (isShift){
                let x = textArea.value;
                textArea.setSelectionRange(textArea.selectionStart, textArea.selectionStart);
                textArea.value = x.slice(0, textArea.selectionStart) + thisButton.KeyShift + x.slice(textArea.selectionStart);
            
            } else{ let x = textArea.value;
                textArea.value = x.slice(0, textArea.selectionStart) + thisButton.Key + x.slice(textArea.selectionStart);
            }}

        }
    })
        
    thisButton.addEventListener('mousedown',function(){
        thisButton.classList.toggle('pressed');
        if (language==='rus'){if (isShift){
            let x = textArea.value;
            textArea.setSelectionRange(textArea.selectionStart, textArea.selectionStart);
            textArea.value = x.slice(0, textArea.selectionStart) + thisButton.rusShift + x.slice(textArea.selectionStart);
        
        } else{ let x = textArea.value;
            textArea.value = x.slice(0, textArea.selectionStart) + thisButton.rusKey + x.slice(textArea.selectionStart);

        }}else{
        if (isShift){
            let x = textArea.value;
            textArea.setSelectionRange(textArea.selectionStart, textArea.selectionStart);
            textArea.value = x.slice(0, textArea.selectionStart) + thisButton.KeyShift + x.slice(textArea.selectionStart);
        
        } else{ let x = textArea.value;
            textArea.value = x.slice(0, textArea.selectionStart) + thisButton.Key + x.slice(textArea.selectionStart);
        }}

    })
    thisButton.addEventListener('mouseup',function(){
        thisButton.classList.toggle('pressed');})
        document.addEventListener("keyup",function(event) {
            if ((event.code===`Key${thisButton.Key.toUpperCase()}`)||(event.code===`Digit${thisButton.Key}`)){
                thisButton.classList.toggle('pressed');
        }})
    
           

}
}

window.onload = function()
{
    const body = document.body;
keyboard = document.createElement("div");
textArea = document.createElement('textarea');
textArea.classList.add('textBox');
let instr = document.createElement('h3');
instr.innerHTML='Shift+alt чтобы поменять расскладку'
document.onselectstart = function() {
    return false;
  }

keyboard.classList.add('keyboardHolder')


let Main = document.createElement("div");

Main.classList.add('Main')

body.appendChild(Main);
Main.appendChild(textArea);
Main.appendChild(instr);
Main.appendChild(keyboard);
language = readCookie('Cookielanguage');
if (!language){
    language='rus';
    document.cookie = `Cookielanguage=${language}`;

}



let qbut = new button('q','й','Q','Й');
qbut.create();
let onebut = new button('1','1','!','!');
onebut.create();

}
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  
}  

console.log(readCookie('Cookielanguage'));