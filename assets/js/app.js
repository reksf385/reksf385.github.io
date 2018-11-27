var sites = [
    '../6asub/index.html',
    '../6bsub/index.html',
    '../6csub/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}