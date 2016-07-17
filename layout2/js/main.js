/* SCROLL TO TOP BUTTON */
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

/* SLIDER */
var step = 1;
var imgWidth = $('.slide').width();

function Next() {
    $('.slide:eq(' + step + ')').animate({
        left: -imgWidth + 'px'
    }, 700);
    window.setTimeout(function() {
        $('.slide:eq(' + step + ')').remove().prependTo('.slide-wrap').animate({
            left: 0 + 'px'
        }, 1)
    }, 700)
}

function Prev() {
    $('.slide:eq(0)').remove().appendTo('.slide-wrap').animate({
        left: -imgWidth + 'px'
    }, 0).animate({
        left: 0 + 'px'
    }, 700);
}
