const mediaQuery1 = window.matchMedia('(min-width: 700px) and (max-width: 820px)');
function handleMediaQuery1(mediaQuery1){
    if(mediaQuery1.matches){
        $('.section-description').css('fontSize', '15px');
    } else{
        $('.section-description').css('fontSize', '');
    }
}

handleMediaQuery1(mediaQuery1);
mediaQuery1.addEventListener('change', handleMediaQuery1);


const mediaQuery2 = window.matchMedia('(min-width: 900px) and (max-width: 1000px)');
function handleMediaQuery2(mediaQuery2){
    if(mediaQuery2.matches){
        $('.header').css('top', '30px');
    } else{
        $('.header').css('top', '');
    }
}

handleMediaQuery2(mediaQuery2);
mediaQuery2.addEventListener('change', handleMediaQuery2);


$('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});



// smoothScroll------------------------------------------------------
$('a[href^= "#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300)
});

$('.drawer').find('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300);

    $('.hamburger').removeClass('active');
    $('.drawer').removeClass('active');
    $('html, body').removeClass('no-scroll');

});

