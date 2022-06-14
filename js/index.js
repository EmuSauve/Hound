// Smooth Scrolling
$(function(){
    $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
});

var hdr = $('header.main');
var menuLine = $('.menu__line');

// Navigation
$('.mobile-menu').on('click',function(){
    menuLine.toggleClass('active');
    hdr.toggleClass("open");
});

window.onresize = function(e) {
    if (window.innerWidth > 992) {
        hdr.removeClass("open");
        menuLine.removeClass('active');
    }
};