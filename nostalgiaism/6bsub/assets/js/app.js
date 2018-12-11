$('.button').click(function() {
    var target = $(this).data('target');

    $(target).removeClass('hide');

    console.log('hihihi')
    setTimeout(function(){ 
        console.log('timer')
        $("html, body").animate({ scrollTop: $(document).height() }, 0);
    }, 100);
    

});

var sites = [
    '../6asub/index.html',
    '../6csub/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}