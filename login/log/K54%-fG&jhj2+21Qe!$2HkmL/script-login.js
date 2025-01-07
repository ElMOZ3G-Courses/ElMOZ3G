const contaner = document.querySelector('.contaner')
contaner.scrollIntoView()
const signup1 = document.getElementById('signup')
const popup55 = document.querySelector('.popup')
const exit = document.querySelector('.close')

signup1.onclick = function(){
    popup55.style.display = 'block'
}

exit.onclick = function(){
    popup55.style.display = 'none'
}