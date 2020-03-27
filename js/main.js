$(document).ready(function () {
    // console.log('Страница загрузилась') -- проверка загрузилась ли страница
    // помещаем класс tabs-items в переменную tabsItem 
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event) {
        // выключает переброс на верх страницы при клике на вкладку
        event.preventDefault();
        // console.log($(this).attr('href')) -- проверяем href элемента, на который кликнули
        // помещаем в переменную activeContent id вкладки, по которой кликнули
        let activeContent = $(this).attr('href');
        // переключение видимости класса visible для элементов, у которых он есть
        $('.visible').toggleClass('visible');
        // находим id из activeContent, переключение виидмости класса visible для элемента, по которому кликнули
        $(activeContent).toggleClass('visible');
        // переключение цвета вкладок
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    });
});