// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
$(function(){
    if($('.log_message').is(':visible')){
        $('.nav__container').fadeOut();
        $('body').css('background','black');
        $('#y').click(function (){
            $('.nav__container').fadeIn();
            $('.log_message').fadeOut();
            $('body').css('background','none');
        })
    }

})