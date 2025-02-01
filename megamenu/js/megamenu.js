
	$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<span class=\"menu-mobile\"></span>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 921) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").click(function(e) {
        if (($(window).width() <= 921) && (($(".menu > ul > li").width() - e.offsetX) < 70)) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
}); 

/*
document.addEventListener("scroll", (event) => {
    let menu = document.getElementsByClassName('menu-container')[0];
    let y = window.pageYOffset;
    if(y > 50) {
        menu.classList.add('no-transparent');
    }
    else {
         menu.classList.remove('no-transparent');
    }
});
 * 
 *
 */