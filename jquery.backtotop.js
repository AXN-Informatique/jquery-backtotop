
(function($){

    $.fn.backtotop = function(options)
    {
        var settings = $.extend({
            showAt: 50,
            fadeInDelay: 600,
            fadeOutDelay: 600,
            scrollTopDelay: 800
        }, options );

        var that = $(this);

        $(window).scroll(function(){
            if ($(document).scrollTop() >= settings.showAt) {
                that.fadeIn(settings.fadeInDelay);
            } else {
                that.fadeOut(settings.fadeOutDelay);
            }
        });

        return that.click(function(event){
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, settings.scrollTopDelay);
        });
    };

}(jQuery));
