$(document).ready(function(){
    
    $("body").on('click', function(){
      console.log('got here');
      var audioElement = $('body').find('.sound');
      var plainHtmlAudio = audioElement[0];
      plainHtmlAudio.loop = true;
      plainHtmlAudio.play();
    });
  
  });