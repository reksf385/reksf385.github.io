var sites = [
    'https://reksf385.github.io/3/food/index.html',
    'https://reksf385.github.io/3/cellphones/index.html',
    'https://reksf385.github.io/3/games/index.html',
    'https://reksf385.github.io/3/home/index.html',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}