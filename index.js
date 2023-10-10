$('button').on('click', () => {
    let span = $('span');
    if(span.hasClass('switchOff')){
        span.removeClass('switchOff').addClass('switchOn');
    }
    else {
        span.addClass('switchOff').removeClass('switchOn');
    }
});