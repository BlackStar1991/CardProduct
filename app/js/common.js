window.onload = function () {


    var slider = document.getElementsByClassName("sliderBlock_items");
    var slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
    var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0]; // getElementsByClassName возвращает массив
    var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
    var items = document.getElementsByClassName("sliderBlock_positionControls")[0];

    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,5000);

    function nextSlide() {
        goToSlide( currentSlide + 1);
    }

    function previousSlide(){
        goToSlide( currentSlide - 1);
    }


    function goToSlide(n) {
         slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
         items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
         currentSlide = (n + slides.length)%slides.length;
         slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
         items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }



    next.onclick = function() {
        console.log(slides.length);
        nextSlide();
    };
    previous.onclick = function() {
        previousSlide();
    };



};