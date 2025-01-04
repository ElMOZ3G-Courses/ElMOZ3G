let sec = document.querySelector('.sec1')
let button11 = document.getElementById('bu1')
button11.onclick = function(){
    sec.scrollIntoView()
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
    sec2.scrollIntoView()
}
let start = document.getElementById('bu-start')
start.onclick = function(){
    setTimeout(function(){window.location.href = "login/login.html"},1000);
}