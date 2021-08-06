const nextOne = document.querySelector('.next-1')
const nextSecond = document.querySelector('.next-2')
const previousSecond = document.querySelector('.previous-2')
const previousThird = document.querySelector('.previous-3')
const cardSecond = document.querySelector('.second')
const cardFirst = document.querySelector('.first')
const cardThird = document.querySelector('.third')

nextOne.addEventListener('click', function(){
    cardSecond.classList.toggle('show-2')
    cardFirst.classList.toggle('hide')
})

previousSecond.addEventListener('click', function(){
    cardFirst.classList.toggle('hide')
    cardSecond.classList.toggle('show-2')
})

nextSecond.addEventListener('click', function(){
    cardThird.classList.toggle('show-3')
    cardSecond.classList.toggle('hide')
})


previousThird.addEventListener('click', function(){
    cardSecond.classList.toggle('hide')
    cardThird.classList.toggle('show-3')
})