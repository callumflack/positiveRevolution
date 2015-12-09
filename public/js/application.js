$(document).ready(function() {

    // Inject background-images from a data-attr
    // =========================================
    // $('.Project-picture').css('background',
    //     function() {
    //         var bg = ('url(' + $(this).data("background") + ') no-repeat center center');
    //
    //         return bg;
    //     }
    // );


    // Unveil (lazy load)
    // http://luis-almeida.github.io/unveil/
    // =====================================
    // $("img").unveil();


    // On Windows, detect & hide root element overflow
    // @url: https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/
    // =====================================
    var element = document.documentElement;

    if(element.scrollHeight > element.clientHeight) {
        // Overflow detected; force scroll bar
        element.style.overflow = 'scrollbar';
    } else {
        // No overflow detected; prevent scroll bar
        element.style.overflow = 'hidden';
    }

});
