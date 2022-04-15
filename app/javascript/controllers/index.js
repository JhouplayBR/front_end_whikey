// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

$(function (){
    $('#menu').click(function (){
        if($('.collection').is(':hidden')){
            $('#menu').css('display','none');
            $('.main').css('opacity','80%');
            $('.close').fadeIn();
            $('.collection').fadeIn();
        }
    })
    $('.close').click(function (){
        $('.main').css('opacity','unset');
        $('#menu').fadeIn()
        $('.close').fadeOut();
        $('.collection').fadeOut();
    })
    $('.main').click(function (){
        if($('.collection').is(':visible')) {
            $('.main').css('opacity','unset');
            $('#menu').fadeIn()
            $('.close').fadeOut();
            $('.collection').fadeOut();
        }
    })
})
