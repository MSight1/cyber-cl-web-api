window.addEventListener('scroll', function() {
    var character = document.querySelector('.mortal-kombat-character');
    var scrollPosition = window.scrollY;

    // Высота видимой части страницы
    var viewportHeight = window.innerHeight;

    // Положение персонажа, относительно верхней части страницы
    var characterOffsetTop = character.offsetTop;

    // Если положение персонажа стало видимым при прокрутке, добавляем класс для анимации
    if (scrollPosition > characterOffsetTop - viewportHeight / 2) {
        character.classList.add('show');
    } else {
        // Если персонаж вышел за пределы видимой части страницы, убираем класс анимации
        character.classList.remove('show');
    }
});