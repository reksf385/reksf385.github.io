var quotes = [
  'Aunt Cicora who lived in Hollywood. Every year for Christmas she sent my brother and me a joint present of one book',
  'the day Frank\'O Hara died. I tried to do a painting somehow especially for him. \(Especially good\) And it turned out awful',
  'canasta',
  '\“How Much Is That Doggie In The Window?\"',
  'butter and sugar sandwiches',
  'Pat Boone and \"Love Letters In The Sand\"',
  'Teresa Brewer and \"I Don\'t Want No Ricochet Romance\"',
  '\"The Tennessee Waltz\"', ,
  '\"Sixteen Tons\"',
  '\"The Thing\"',
  '\"The Hit Parade\"',
  '\"Dorothy Collins\"',
  '\"Dorothy Collin\'s teeth\"',
  'when I worked in an antique-junk shop and I sold everything cheaper than I was supposed to',
  'when l lived in Boston reading all of Dostoevsky’s novels one right after the other',
  '(Boston) pan handling on the street where all the art galleries were',
  'collecting cigarette butts from the urns in front of The Museum of Fine Arts in Boston',
  'planning to tear page 48 out of every book I read from the Boston Public Library, but soon losing interest',
  'Bickford\'s',
  'the day Marilyn Monroe died'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

//function newQuote() {
//  var randomNumber = Math.floor(Math.random() * (quotes.length));
//  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
//  document.getElementById('imageDisplay').innerHTML = quotes[randomNumber];
//}



// var quotes = [
//   ['Aunt Cicora who lived in Hollywood. Every year for Christmas she sent my brother and me a joint present of one book', 'image/image-1.jpg'],
//   ['the day Frank\'O Hara died. I tried to do a painting somehow especially for him. \(Especially good\) And it turned out awful', 'image/image-2.jpg']
// ]

//function newQuote() {
//  quotes[randomNumber][0];
//  quotes[randomNumber][1];
//  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
//  document.getElementById('imageDisplay').innerHTML = quotes[randomNumber][1];


//var quotes = [
//  ['the day Frank\'O Hara died. I tried to do a painting somehow especially for him. \(Especially good\) And it turned out awful', "img/2.JPG"],
//  ['canasta', '../3/img/3.JPG'],
//  ['\“How Much Is That Doggie In The Window?\"', '../3/img/4.JPG'],
//  ['butter and sugar sandwiches', '../3/img/5.JPG'],
//  ['Pat Boone and \"Love Letters In The Sand\"', '../3/img/6.JPG'],
//  ['Teresa Brewer and \"I Don\'t Want No Ricochet Romance\"', '../3/img/6.JPG'],
//  ['\"The Tennessee Waltz\"', '../3/img/4.JPG'],
//  ['\"Sixteen Tons\"', '../3/img/7.JPG'],
//  ['\"The Thing\"', '../3/img/8.JPG'],
//  ['\"The Hit Parade\"', '../3/img/8.JPG'],
//  ['\"Dorothy Collins\"', '../3/img/8.JPG' ],
//  ['\"Dorothy Collin\'s teeth\"', '../3/img/8.JPG'],
//  ['when I worked in an antique-junk shop and I sold everything cheaper than I was supposed to', '../3/img/8.JPG'],
//  ['when l lived in Boston reading all of Dostoevsky’s novels one right after the other', '../3/img/8.JPG'],
//  ['(Boston) pan handling on the street where all the art galleries were', '../3/img/8.JPG'],
//  ['collecting cigarette butts from the urns in front of The Museum of Fine Arts in Boston', '../3/img/8.JPG'],
//  ['planning to tear page 48 out of every book I read from the Boston Public Library, but soon losing interest', '../3/img/8.JPG'],
//  ['Bickford\'s', '../3/img/8.JPG'],
//  ['the day Marilyn Monroe died', '../3/img/8.JPG']
//]
