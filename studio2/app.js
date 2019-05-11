$(document).ready(function(){

  var now = new Date();
  var hours = now.getHours();

  if (hours >= 0 && hours <= 12){
    $('body').css('background-image', 'linear-gradient(180deg, #00aeef, #fbb040,#fb6240,#fb6240,#fb6240)');
    $(".one").css("background-color", "#8cd5e3");
  } else if (hours >= 12 && hours <= 18) {
    $('body').css('background-image', 'linear-gradient(180deg, #5899d5,#fb4053,#fb6c40)');
    $(".one").css("background-color", "rgb(187, 149, 66)");
  } else if (hours >= 18 && hours <= 24) {
    $('body').css('background-image', 'linear-gradient(180deg,  #000000, #1d1f68, #6a4f09,#6a4f09,#6a4f09,#6a3309)');
    $(".window").css("background-color", "rgb(255, 255, 0)");
  }
 
  $('.a1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.A");
    var audioElement = wrapper.find('.sound1');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.a2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.A");
    var audioElement = wrapper.find('.sound1');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.b1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.B");
    var audioElement = wrapper.find('.sound2');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.b2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.B");
    var audioElement = wrapper.find('.sound2');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.c1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.C");
    var audioElement = wrapper.find('.sound3');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.d1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.D");
    var audioElement = wrapper.find('.sound4');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.e1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.E");
    var audioElement = wrapper.find('.sound5');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.e2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.E");
    var audioElement = wrapper.find('.sound5');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.f1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.F");
    var audioElement = wrapper.find('.sound6');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.f2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.F");
    var audioElement = wrapper.find('.sound6');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.g2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.G");
    var audioElement = wrapper.find('.sound7');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.g3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.G");
    var audioElement = wrapper.find('.sound7');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.h1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.H");
    var audioElement = wrapper.find('.sound8');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.h2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.H");
    var audioElement = wrapper.find('.sound8');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.i1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.I");
    var audioElement = wrapper.find('.sound9');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.i2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.I");
    var audioElement = wrapper.find('.sound9');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.j1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.J");
    var audioElement = wrapper.find('.sound10');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.l1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.L");
    var audioElement = wrapper.find('.sound12');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.n1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.N");
    var audioElement = wrapper.find('.sound14');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.n2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.N");
    var audioElement = wrapper.find('.sound14');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.o1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.O");
    var audioElement = wrapper.find('.sound15');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.p1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.P");
    var audioElement = wrapper.find('.sound16');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.p2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.P");
    var audioElement = wrapper.find('.sound16');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.q1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Q");
    var audioElement = wrapper.find('.sound17');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.q2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Q");
    var audioElement = wrapper.find('.sound17');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.r1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.R");
    var audioElement = wrapper.find('.sound18');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.r2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.R");
    var audioElement = wrapper.find('.sound18');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.s1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.S");
    var audioElement = wrapper.find('.sound19');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.s2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.S");
    var audioElement = wrapper.find('.sound19');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.t1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.T");
    var audioElement = wrapper.find('.sound20');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.t2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.T");
    var audioElement = wrapper.find('.sound20');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.u1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.U");
    var audioElement = wrapper.find('.sound21');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x4').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z2').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z3').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.a1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.A");
    var audioElement = wrapper.find('.sound1');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.a2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.A");
    var audioElement = wrapper.find('.sound1');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.b1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.B");
    var audioElement = wrapper.find('.sound2');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.b2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.B");
    var audioElement = wrapper.find('.sound2');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.c1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.C");
    var audioElement = wrapper.find('.sound3');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.d1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.D");
    var audioElement = wrapper.find('.sound4');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.e1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.E");
    var audioElement = wrapper.find('.sound5');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.e2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.E");
    var audioElement = wrapper.find('.sound5');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.f1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.F");
    var audioElement = wrapper.find('.sound6');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.f2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.F");
    var audioElement = wrapper.find('.sound6');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.g2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.G");
    var audioElement = wrapper.find('.sound7');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.g3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.G");
    var audioElement = wrapper.find('.sound7');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.h1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.H");
    var audioElement = wrapper.find('.sound8');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.h2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.H");
    var audioElement = wrapper.find('.sound8');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.i1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.I");
    var audioElement = wrapper.find('.sound9');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.i2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.I");
    var audioElement = wrapper.find('.sound9');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.j1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.J");
    var audioElement = wrapper.find('.sound10');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.k2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.K");
    var audioElement = wrapper.find('.sound11');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.l1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.L");
    var audioElement = wrapper.find('.sound12');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.m3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.M");
    var audioElement = wrapper.find('.sound13');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.n1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.N");
    var audioElement = wrapper.find('.sound14');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.n2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.N");
    var audioElement = wrapper.find('.sound14');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.o1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.O");
    var audioElement = wrapper.find('.sound15');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.p1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.P");
    var audioElement = wrapper.find('.sound16');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.p2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.P");
    var audioElement = wrapper.find('.sound16');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.q1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Q");
    var audioElement = wrapper.find('.sound17');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.q2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Q");
    var audioElement = wrapper.find('.sound17');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.r1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.R");
    var audioElement = wrapper.find('.sound18');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.r2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.R");
    var audioElement = wrapper.find('.sound18');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.s1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.S");
    var audioElement = wrapper.find('.sound19');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.s2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.S");
    var audioElement = wrapper.find('.sound19');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.t1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.T");
    var audioElement = wrapper.find('.sound20');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.t2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.T");
    var audioElement = wrapper.find('.sound20');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.u1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.U");
    var audioElement = wrapper.find('.sound21');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.v3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.V");
    var audioElement = wrapper.find('.sound22');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.w3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.W");
    var audioElement = wrapper.find('.sound23');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x1').mouseenter(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.x4').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.X");
    var audioElement = wrapper.find('.sound24');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.y3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Y");
    var audioElement = wrapper.find('.sound25');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z1').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z2').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })

  $('.z3').click(function(){
    console.log('mouse enter');
    var wrapper = $(this).closest(".letter.Z");
    var audioElement = wrapper.find('.sound26');
    var plainHtmlAudio = audioElement[0];
    plainHtmlAudio.play();
  })
});


// if ( > 0 && n < 10) {
//   //This is morning
//   $('.some-div').css('background-color' , 'pink');
//   } elseif (n > 10 && n < 15) {
//   //This is afternoon
//   $('.some-div').css('background-color' , 'blue');
//   } 
