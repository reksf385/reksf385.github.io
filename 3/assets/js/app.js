var sites = [
    '../3sub/food/index.html',
    '../3sub/shows/index.html',
    '../3sub/cellphones/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}