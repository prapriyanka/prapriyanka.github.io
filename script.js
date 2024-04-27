$('#menuToggle').click(function(){
    const $menuToggle = $('#menuToggle > span');
    const $nav = $('nav');
    const text = $menuToggle.text().trim();
    $menuToggle.text(text === 'menu' ? 'close' : 'menu');
    $nav.css('display', $nav.css('display') === 'none' ? 'flex' : 'none');
    $("#title > a").css("color", $nav.css('display') === 'none' ? "#000" : "#fff");
});

AOS.init();

$('nav a').click(function(event) {
    const $menuToggle = $('#menuToggle > span');
    const $nav = $('nav');
    $menuToggle.text('menu');
    $nav.css('display', 'none');
    $("#title > a").css("color", "#000");
});

function setScale(){
    var screenWidth = screen.width;
    if(screenWidth <= 450) {
        var scaleText = (screenWidth / 375) * 16;
        $('html').css('font-size', scaleText + 'px');
    }
}
setScale();

$(document).ready(function(){
    var debounce;
    $(window).resize(function(){
        clearTimeout(debounce);
        debounce = setTimeout(setScale, 300);
    });

    // if scroll down is more than 100vh, then change the background color of the header
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $('header').css('background', 'var(--clr-primary)');
            $("#title > a").css("color", "#fff");
        } else {
            $('header').css('background-color', 'transparent');
            $("#title > a").css("color", "#000");
        }
    });
});