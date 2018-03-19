"use strict";
window.scrollIphone = (start, end, iphonePosition) => {
    let length = iphonePosition - end,
        current = $(window).scrollTop(),
        scrollLength = end - start,
        scrollPoint = current - start,
        multiplicator = length / scrollLength;

    $('.js-iphone').css({
        'margin-top': `-${scrollPoint * multiplicator*2}px`
    });
}

window.scrollZp = (position, startPosition) => {
    let multiplicator = 40/$('.js-zp').height(),
        point = position - startPosition;

    $('.js-mac').css({
        'margin-top': `-${point * multiplicator/2}px`
    });
};

window.scrollOf = (position) => {
    let multiplicator = 100/$('.js-of').height(),
        point = position - $('.js-of').position().top;

    $('.js-of-img').css({
        'margin-top': `-${point * multiplicator*2}px`
    });

    $('.js-zp-img').css({
        'margin-left': `${point * multiplicator}px`
    });
}


$(document).ready(() => {
    let iphonePosition = $('.js-iphone').offset().top + $('.js-iphone').height();

    $(window).scroll(() => {
        // debounce(function () {
        let position = $(window).scrollTop() + $(window).height();
        let iphoneAnimationStartPosition = $('.js-iphone-start').position().top + $('.js-iphone-start').height(),
            iphoneAnimationEndPosition = $('.js-iphone-end').position().top + $('.js-iphone-end').height(),
            zpStartPosition = $('.js-zp').position().top,
            ofStart = $('.js-of').position().top,
            ofEnd = $('.js-of').position().top + $('.js-of').height();

        if (position > iphoneAnimationStartPosition && position < iphoneAnimationEndPosition) {
        //    console.log('start')
            scrollIphone(iphoneAnimationStartPosition, iphoneAnimationEndPosition, iphonePosition);
        } else if (position > zpStartPosition) {
        //     console.log('stop')
            scrollZp(position, zpStartPosition);
        } else if (position > ofStart && position < ofEnd) {
            //     console.log('stop')
            scrollOf(position);
        }
        // }, 250)


    });

//    $('.of_col img').on('mouseover', () => {
//        $('.js-of-img').addClass('_opacity');
//    })

//    $('.of_col img').on('mouseleave', () => {
//        $('.js-of-img').removeClass('_opacity');
//    })
});


