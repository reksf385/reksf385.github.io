document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('button');
var stop_button = document.getElementById('stop_button');
var input_container = document.getElementById('input_text');
var output_container = document.getElementById('output_container');
var hints = [
  'Hint: this animal can sting you',
  'Hint: this animal is small but agile!',
  'Hint: this animal is a bird that can float on water!',
  'Hint: this animal likes to chew on bones!',
  'Hint: this animal is an amphibian!',
  'Hint: this animal is a grey bird!',
  'Hint: this animal loves nuts!',
  'Hint: this animal is a beautiful bird!',
  'Hint: this animal has a smelly fart!',
  'Hint: this animal has a hard shell!'
]

function initialize(){
  if (annyang) {
    var commands = {
      '(a) bee(s)': bee,
      '(a) cat(s)': cat,
      '(a) duck(s)': duck,
      '(a) dog(s)': dog,
      '(a) frog': frog,
      '(a) pigeon(s)': pigeon,
      '(a) squirrel': squirrel,
      '(a) swan': swan,
      '(a) skunk(s)': skunk,
      '(a) turtle(s)': turtle      

    }

    annyang.addCommands(commands);

    button.addEventListener('click', startListening);

    stop_button.addEventListener('click', abort);

    annyang.addCallback('start', startFunction);

    annyang.addCallback('soundstart', soundStarted);

    annyang.addCallback('result', resultFunction);

    annyang.addCallback('resultNoMatch', resultNoMatch);
  }
}

function startListening(){
  document.body.classList.remove('result_ready'); 
  document.getElementById('input_text').innerHTML = '';

  annyang.start();
}

function startFunction(){
  button.classList.add('disabled');
  stop_button.classList.remove('disabled');
}

function soundStarted(){
  document.getElementById('listening').classList.add('visible');
}

function resultFunction(phrases){
  document.body.classList.add('result_ready'); 

  for (var i = 0; i < phrases.length; i++) {
    input_container.insertAdjacentHTML('beforeend', (i + 1) + '. ' + phrases[i] + '<br>');
  }
  abort();
}

function abort(){
  document.getElementById('listening').classList.remove('visible');
  
  button.classList.remove('disabled');

  stop_button.classList.add('disabled');

  annyang.abort()
}

function bee(){
  var sound_1 = document.getElementById("zzz");
  sound_1.play();

  document.getElementById("bee").style.display = 'block';
  
  alert('You have summoned a bee!', false);
}

function cat(){
  var sound_2 = document.getElementById("meow");
  sound_2.play();

  document.getElementById("cat").style.display = 'block';
  
  alert('You have summoned a cat!', false);
}

function duck(){
  var sound_3 = document.getElementById("quack");
  sound_3.play();

  document.getElementById("duck").style.display = 'block';
  
  alert('You have summoned a duck', false);
}

function dog(){
  var sound_4 = document.getElementById("bark");
  sound_4.play();

  document.getElementById("dog").style.display = 'block';
  
  alert('You have summoned a dog!', false);

  /*img_2.src = "assets/img/do<g.png";
  img_2.setAttribute("width", "28%");
  display.appendChild(img_2);*/
}

function frog(){
  var sound_5 = document.getElementById("ribbit");
  sound_5.play();

  document.getElementById("frog").style.display = 'block';
  
  alert('You have summoned a frog!', false);
}

function pigeon(){
  var sound_6 = document.getElementById("coo");
  sound_6.play();

  document.getElementById("pigeon").style.display = 'block';
  
  alert('You have summoned a pigeon!', false);
}

function squirrel(){
  var sound_7 = document.getElementById("screech");
  sound_7.play();

  document.getElementById("squirrel").style.display = 'block';
  
  alert('You have summoned a squirrel!', false);
}

function swan(){
  var sound_8 = document.getElementById("sound8");
  sound_8.play();

  document.getElementById("swan").style.display = 'block';
  
  alert('You have summoned a swan', false);
}

function skunk(){
  var sound_9 = document.getElementById("sound9");
  sound_9.play();

  document.getElementById("skunk").style.display = 'block';
  
  alert('You have summoned a skunk!', false);
}

function turtle(){
  var sound_10 = document.getElementById("sound10");
  sound_10.play();

  document.getElementById("turtle").style.display = 'block';
  
  alert('You have summoned a turtle!', false);
}

function resultNoMatch(){
  popup('Try again!', true);
  popup(hints[Math.floor(Math.random() * 10)],true);
}

function popup(text, error){
  alert(text);
}