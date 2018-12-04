$('.button').click(function() {
    var target = $(this).data('target');

    $(target).removeClass('hide');

});

var sites = [
    '../6bsub/index.html',
    '../6csub/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}