$('.item').click(function(){
    var button_name = $(this).data('button');

    $('.scenarios').attr('class','scenarios');
    $('.sceanriost').addClass(button_name);
    $('.item').removeClass('active');
    $(this).addClass('active');   
    $('.convoA').addClass('hide');
    $('.convoB').addClass('hide');
    $('.convoC').addClass('hide');

    if (button_name == 'A'){
        $('.convoA').removeClass('hide');
    }if (button_name == 'B'){
        $('.convoB').removeClass('hide');
    }if (button_name == 'C'){
        $('.convoC').removeClass('hide');
}
});
