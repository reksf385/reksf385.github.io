$('.button').click(function() {
    var target = $(this).data('target');

    $(target).removeClass('hide');

});

var sites = [
    '../6asub/index.html',
    '../6bsub/index.html',
    '../6csub/index.html',
];