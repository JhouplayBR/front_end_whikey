// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
$(function(){
    if($('.log_message').is(':visible')){
        $('body').css('background','black');
        $('#y').click(function (){
            $('main').fadeIn();
            $('.log_message').fadeOut();
            $('body').css('background','#0064c1');
        })
    }

})