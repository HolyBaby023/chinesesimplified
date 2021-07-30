const lessons = document.querySelector('.lessons')
const lessonsUl = document.querySelector('.lessons-ul')

lessons.addEventListener('click', function(){
    lessonsUl.classList.toggle('show')
})