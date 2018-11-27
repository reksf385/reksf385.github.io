var sites = [
    '../3a/index.html',
    '../3b/index.html',
    '../3c/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}