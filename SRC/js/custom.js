$(document).ready(function(){
    
//    отложенная анимация
    let options = {threshold: [0.4]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.animat');
    elements.each((i,el) => {
        observer.observe(el);
    });

    function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}
    
   $(".preloader").css("display", "none");      /*загрузка*/
    
//    калькулятор
    function calculate(){
     let sum = parseInt($("#select1 option:selected").val()) + parseInt ($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
     let days = parseInt($("#select1 option:selected").attr("days")) + parseInt ($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));     
    $(".days .digit").text(days);
    $(".price .digit").text(sum); 
    }
    $("select").on("change", function(){
       calculate();
    });
    calculate();
    
    
//    выделение кнопок меню и ссылки
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        
        $('.section').each((i, el) => {
            
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
    
//    загрузка картинок при кроле
        $('.image-link').magnificPopup({type:'image'});
    let options1 = {threshold: [0.8]};
    let observer1 = new IntersectionObserver(onEntry1, options1);
    let elements1 = $('.animatimg');
    elements1.each((i,el) => {
        observer1.observe(el);
    });
        function onEntry1 (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
    };
    
  //счетчик цифр статистики 
    
  let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 2200
                    });
                  }
                }
            });
        }
    
    //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });
    
    //Модальное окно акции по таймеру
        setTimeout(function () {
           const myModal = new bootstrap.Modal('#myModal', {
                keyboard: false
            });
            modalToggle = document.getElementById('toggleMyModal'); 
            myModal.show(modalToggle);

        }, 1000);
});
    
    
