let reserve = document.querySelector('#reserve__tab');
let maingpage = document.querySelector('#mainpage__tab');
let reserve_section = document.querySelector('#reserve');
let maingpage_section = document.querySelector('#main');
let sliding_bar = document.querySelectorAll('.main__section__title');
let sliding_bar_content = document.querySelectorAll('.main__section__content');

reserve.addEventListener('click' , function(event){
    maingpage_section.classList.add('hidden');
    reserve_section.classList.remove('hidden');
})
maingpage.addEventListener('click' , function(event){
    maingpage_section.classList.remove('hidden');
    reserve_section.classList.add('hidden');
})

sliding_bar.forEach(openFunction);

function openFunction(x){
    x.addEventListener('click' , function(event){
        if(event.target.parentElement.classList == "main__section__title" && event.target.tagName == "H2"){
            event.target.parentElement.nextElementSibling.classList.toggle('hidden');
            event.target.previousElementSibling.classList.toggle('hidden')
            event.target.previousElementSibling.previousElementSibling.classList.toggle('hidden')
        }
        if(event.target.parentElement.classList == "main__section__title" && event.target.classList.contains('fa-plus')){
            event.target.classList.toggle('hidden');
            event.target.nextElementSibling.classList.toggle('hidden');
            event.target.parentElement.nextElementSibling.classList.toggle('hidden')
        }
        if(event.target.parentElement.classList == "main__section__title" && event.target.classList.contains('fa-minus')){
            event.target.classList.toggle('hidden');
            event.target.previousElementSibling.classList.toggle('hidden');
            event.target.parentElement.nextElementSibling.classList.toggle('hidden')
        }
    });
}