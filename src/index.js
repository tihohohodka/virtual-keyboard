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
    console.log(event.key);    
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
this.width= 32;
this.height= 32;
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
        
        if ((event.code===`Key${thisButton.Key.toUpperCase()}`)||(event.code===`Digit${thisButton.Key}`)||(event.key==thisButton.Key)||(event.key==thisButton.KeyShift)||(event.key==thisButton.rusShift)||(event.key==thisButton.rusKey)){
            thisButton.classList.add('pressed');
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
        thisButton.classList.add('pressed');
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
        thisButton.classList.remove('pressed');})
        document.addEventListener("keyup",function(event) {
            if ((event.code===`Key${thisButton.Key.toUpperCase()}`)||(event.code===`Digit${thisButton.Key}`)||(event.key==thisButton.Key)||(event.key==thisButton.KeyShift)||(event.key==thisButton.rusShift)||(event.key==thisButton.rusKey)){
                thisButton.classList.remove('pressed');
        }})
    
           

}
}
class funcButton{


    constructor(name){
    this.name=name
    this.width=60;
    this.height= 32;
    }
    create(){
        
            let thisButton=document.createElement("div");
            let text = document.createElement('p');
           
            text.innerHTML=this.name;   
            thisButton.style.width=this.width+'px';
            thisButton.style.height=this.height+'px';
            thisButton.style.display='flex';
            thisButton.style.alignItems='center';
            thisButton.style.justifyContent='center';
            thisButton.classList.add('funcButtonMy');
            thisButton.appendChild(text);
            keyboard.appendChild(thisButton);
            thisButton.name=this.name;
            thisButton.addEventListener('mousedown',function(event){
                thisButton.classList.add('pressed');

            });
            thisButton.addEventListener('mouseup',function(){
                thisButton.classList.remove('pressed');
            })
            
                if (thisButton.name==='Backspace'){document.addEventListener("keydown",function(event) {
                    if (event.key==='Backspace'){
                    let  x =textArea.value;
                     textArea.value = x.slice(0, textArea.value.length-1)}})}
                
                if (thisButton.name==='Tab'){document.addEventListener("keydown",function(event) {
                    if (event.key==='Tab'){  textArea.value +='\t' }})}
                
                if (thisButton.name==='Delete'){document.addEventListener("keydown",function(event) {
                    if (event.key==='Delete'){
                    let x = textArea.value;
                    textArea.value = x.slice(0, textArea.selectionStart) + x.slice(textArea.selectionStart+1);}})}     
                    
                   
                

                    document.addEventListener("keydown",function(event) {
                        if (event.key.name===thisButton.name){
                    thisButton.classList.add('pressed');}
                }
                )
                
            document.addEventListener("keyup",function(event) {
                
                if ((event.key===thisButton.name)){
                    thisButton.classList.remove('pressed');
            }})
            if (this.name==='Backspace'){
                thisButton.addEventListener('click',e=>{ 
                   let  x =textArea.value;
                    textArea.value = x.slice(0, textArea.value.length-1)
                });
            }   
                if (this.name==='Tab'){
                    thisButton.addEventListener('click',e=>{ 
                    textArea.value +='\t' }
                )}
                if (this.name==='Delete'){
                    thisButton.addEventListener('click',e=>{ 
                        let x = textArea.value;
                        textArea.value = x.slice(0, textArea.selectionStart) + x.slice(textArea.selectionStart+1); }
                )}
                if (this.name==='CapsLock'){
                    thisButton.addEventListener('click',e=>{ 
                        isShift=!isShift; }
                )}
  
  
            
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

let yobut = new button('`','ё','~','Ё');
yobut.create();
let onebut = new button('1','1','!','!');
onebut.create();
let twobut = new button('2','2','@','"');
twobut.create();
let threebut = new button('3','3','#','№');
threebut.create();
let fourbut = new button('4','4','$',';');
fourbut.create();
let fivebut = new button('5','5','%','%');
fivebut.create();
let sixbut = new button('6','6','^',':');
sixbut.create();
let sevbut = new button('7','7','&','&');
sevbut.create();
let eibut = new button('8','8','*','*');
eibut.create();
let ninbut = new button('9','9','(','(');
ninbut.create();
let nullbut = new button('0','0',')',')');
nullbut.create();
let minbut = new button('-','-','_','_');
minbut.create();
let eqbut = new button('=','=','+','+');
eqbut.create();
let slbut = new button('\\','\\','|','/');
slbut.create();
let bckbut = new funcButton('Backspace');
bckbut.create();
let tabbut = new funcButton('Tab');
tabbut.create();
let qbut = new button('q','й','Q','Й');
qbut.create();
let wbut = new button('w','ц','W','Ц');
wbut.create();
let ebut = new button('e','у','E','У');
ebut.create();
let rbut = new button('r','к','R','К');
rbut.create();
let tbut = new button('t','е','T','Е');
tbut.create();
let ybut = new button('y','н','Y','Н');
ybut.create();
let ubut = new button('u','г','U','Г');
ubut.create();
let ibut = new button('i','ш','I','Ш');
ibut.create();
let obut = new button('o','щ','O','Щ');
obut.create();
let pbut = new button('p','з','P','З');
pbut.create();
let hebut = new button('[','х','{','Х');
hebut.create();
let tzbut = new button(']','ъ','}','Ъ');
tzbut.create();
let delbut = new funcButton('Delete');
delbut.create();
let cpsbut = new funcButton('CapsLock');
cpsbut.create();

}
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  
}  

console.log(readCookie('Cookielanguage'));