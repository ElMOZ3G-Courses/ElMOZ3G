let about = document.querySelector('.about')
let sec = document.querySelector('.sec1')
let button11 = document.getElementById('bu1')
button11.onclick = function(){
    sec.style.display='block'
    setTimeout(function(){sec.scrollIntoView()},100);
}
let whatsapp = document.querySelector('.WhatsApp')
let telegram = document.querySelector('.telegram')
let youtube = document.querySelector('.youtube')
whatsapp.onclick = function(){
    window.open('https://wa.me/01211595442', '_blank')
}
telegram.onclick = function(){
    window.open('https://t.me/Xelmoz3gX', '_blank')
}
youtube.onclick = function(){
    window.open('https://www.youtube.com/@ElMOZ3G12','_blank')
}
let learn = document.getElementById('learn')
let sec2 = document.querySelector('.sec2')
learn.onclick = function(){
    
    setTimeout(function(){sec2.style.display='block',sec2.scrollIntoView()},100);
    setTimeout(function(){about.style.display='block'},500);
}
let start = document.getElementById('bu-start')
start.onclick = function(){
    setTimeout(function(){window.location.href = "login/log/K54%25-fG&jhj2+21Qe!$2HkmL/login.html"},100);
}
let header = document.querySelector('.hed1')

if (window.innerWidth <= 800) {
    if (body1) {
      body1.style.display = 'none';
    } else {
      console.error("Element with class 'bd' not found.");
    }
    if(nodevice)
    {
      nodevice.style.display = "block";
    } else{
      console.error("Element with class 'no-device' not found.");
    }
    if(body2Element)
    {
      body2Element.style.display = "block"
    }
}