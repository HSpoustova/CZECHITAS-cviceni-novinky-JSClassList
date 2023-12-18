const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60 rem';

const nadpisElement = document.querySelector('h1');
nadpisElement.classList.add('news__title');
nadpisElement.textContent = 'Aktuální novinky';

const prvniElement = document.querySelector('#zprava1');
prvniElement.classList.add('post--main');

const tretiElement = document.querySelector("#zprava3").querySelector(".post__picture")
tretiElement.src = 'images/zprava3-novy.jpg';
