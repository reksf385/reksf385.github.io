$('.button').click(function() {
    var target = $(this).data('target');

    $(target).removeClass('hide');

});

var sites = [
    '../6asub/index.html',
    '../6bsub/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}