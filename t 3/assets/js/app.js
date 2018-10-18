var sites = [
    'https://reksf385.github.io/',
    'http://www.stackoverflow.com',
    'http://www.example.com',
    'http://www.youtube.com'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}