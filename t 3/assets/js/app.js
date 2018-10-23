var sites = [
    'https://reksf385.github.io/3/food/index.html',
    'https://reksf385.github.io',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}