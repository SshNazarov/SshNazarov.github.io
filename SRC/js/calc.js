
let site, design, adaptive;

let calculator = {
    price: [
        [100, 300, 500],
        [120, 240, 300],
        [130, 160, 200],
    ],
    days: [
        [2, 3, 5],
        [3, 4, 5],
        [1, 2, 3],
    ],
    run(siteType, designType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
        alert("Сроки: "+ days + "Стоимость: "+ sum);
    }
};

function getAnswers(){
        site = prompt("Какой тип сайта вы хотите? 1 - Сайт-визитка 2 - Корпаративный сайт 3 - Интернет-магазин");
    if(site != 1 && site != 2 && site != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    };
        design = prompt("Какой тип дизайна вы хотите? 1 - Шаблонный 2 - Уникальный 3 - WOW-дизайн");
    if(design != 1 && design != 2 && design != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    };
        adaptive = prompt("Какой тип адаптивности вы хотите? 1 - Только ПК 2 - Только-мобильный сайт 3 - ПК + Мобильный");
    if(adaptive != 1 && adaptive != 2 && adaptive != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    };
    calculator.run(site, design, adaptive);
};

getAnswers();









