// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
$(function(){
    var current_url = window.location.pathname;
    setInterval(function (){
        $('.progress').fadeOut()
    },500);
    if(current_url.split('/')[1] == ""){
    if($('.log_message').is(':visible')) {
        $('body').css('background', 'black');
        $('#y').click(function () {
            $('.main').fadeIn();
            $('.log_message').fadeOut();
            $('body').css('background', 'white');
        })
    }
    }else{
        $('body').css('background', 'white');
    }
})