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
    
    isShift=!isShift;

}
if (event.code==='CapsLock'){
    isShift=!isShift;
}


}, false);
document.addEventListener("keyup",function(event) {
     
if (event.code==='ShiftLeft'||event.code==='ShiftRight'){
isShift=!isShift;

}


}, false);

document.addEventListener("keydown",function(event) {
    let flag;
    if (event.altKey){flag=true;}
    if (event.shiftKey&&flag){

        flag=false;
        

        if (language==='rus'){
            language='eng';
            document.cookie = `Cookielanguage=${language}`;
            
        
        }else{
            language='rus';
            document.cookie = `Cookielanguage=${language}`;
           

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
    this.width=80;
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
                    
                if (thisButton.name==='Enter'){document.addEventListener("keydown",function(event) {
                    if (event.key==='Enter'){  textArea.value +='\n' }})}    
                   
                

                    document.addEventListener("keydown",function(event) {
                        if (event.key===thisButton.name){
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
                )};
                if (this.name==='Delete'){
                    thisButton.addEventListener('click',e=>{ 
                        let x = textArea.value;
                        textArea.value = x.slice(0, textArea.selectionStart) + x.slice(textArea.selectionStart+1); }
                )};
                if (this.name==='CapsLock'){
                    thisButton.addEventListener('click',e=>{ 
                        isShift=!isShift; }
                )};
                if (this.name==='Enter'){
                    thisButton.addEventListener('click',e=>{ 
                        textArea.value+='\n' }
                )}
                if (this.name==='Enter'){
                    thisButton.addEventListener('mousedown',e=>{ 
                        isShift=!isShift })
                    thisButton.addEventListener('mouseup',e=>{ 
                            isShift=!isShift }
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
instr.innerHTML='Shift+alt ?????????? ???????????????? ????????????????????'
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

let yobut = new button('`','??','~','??');
yobut.create();
let onebut = new button('1','1','!','!');
onebut.create();
let twobut = new button('2','2','@','"');
twobut.create();
let threebut = new button('3','3','#','???');
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
let qbut = new button('q','??','Q','??');
qbut.create();
let wbut = new button('w','??','W','??');
wbut.create();
let ebut = new button('e','??','E','??');
ebut.create();
let rbut = new button('r','??','R','??');
rbut.create();
let tbut = new button('t','??','T','??');
tbut.create();
let ybut = new button('y','??','Y','??');
ybut.create();
let ubut = new button('u','??','U','??');
ubut.create();
let ibut = new button('i','??','I','??');
ibut.create();
let obut = new button('o','??','O','??');
obut.create();
let pbut = new button('p','??','P','??');
pbut.create();
let hebut = new button('[','??','{','??');
hebut.create();
let tzbut = new button(']','??','}','??');
tzbut.create();
let delbut = new funcButton('Delete');
delbut.create();
let cpsbut = new funcButton('CapsLock');
cpsbut.create();
let abut = new button('a','??','A','??');
abut.create();
let sbut = new button('s','??','S','??');
sbut.create();
let dbut = new button('d','??','D','??');
dbut.create();
let fbut = new button('f','??','F','??');
fbut.create();
let gbut = new button('g','??','G','??');
gbut.create();
let hbut = new button('h','??','H','??');
hbut.create();
let jbut = new button('j','??','J','??');
jbut.create();
let kbut = new button('k','??','K','??');
kbut.create();
let lbut = new button('l','??','L','??');
lbut.create();
let ddbut = new button(';','??',':','??');
ddbut.create();
let covbut = new button('\'','??','"','??');
covbut.create();
let entbut = new funcButton('Enter');
entbut.create();
let shtbut = new funcButton('Shift');
shtbut.create();
let zbut = new button('z','??','Z','??');
zbut.create();
let xbut = new button('x','??','X','??');
xbut.create();
let cbut = new button('c','??','C','??');
cbut.create();
let vbut = new button('v','??','V','??');
vbut.create();
let bbut = new button('b','??','B','??');
bbut.create();
let nbut = new button('n','??','N','??');
nbut.create();
let mbut = new button('m','??','M','??');
mbut.create();
let bebut = new button(',','??','<','??');
bebut.create();
let yubut = new button('.','??','>','??');
yubut.create();
let qmbut = new button('/','.','?',',');
qmbut.create();
let upbut = new button('???','???','???','???');
upbut.create();
shtbut.width=140;
shtbut.create();
let ctrbut = new funcButton('Control');
ctrbut.width=45;
ctrbut.create();
let winbut = new funcButton('Win');
winbut.width=45;
winbut.create();
let altbut = new funcButton('Alt');
altbut.width=50;
altbut.create();
let spcbut = new button(' ',' ',' ',' ');
spcbut.width=220;
spcbut.create();

let lftbut = new button('???','???','???','???');
lftbut.create();

let dwnbut = new button('???','???','???','???');
dwnbut.create();
let rgtbut = new button('???','???','???','???');
rgtbut.create();
altbut.width=40;
altbut.create();

ctrbut.create();
document.addEventListener('keydown', e=>{
    if (e.key==='ArrowLeft'){
        textArea.value+='???'
    }
    if (e.key==='ArrowRight'){
        textArea.value+='???'
    }
    if (e.key==='ArrowDown'){
        textArea.value+='???'
    }
    if (e.key==='ArrowUp'){
        textArea.value+='???'
    }
    })
}
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  
}  
