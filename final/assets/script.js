let area = [];
const datafile = "poke.json";
let score = [];

console.log(score);

$(function() { 
  //wrap here if want to reset,call ffunction to start  
    $.getJSON(datafile, function(data) {

        area = data.poke;


        $.each(area, function( i, obj ) {
            $("#questions").append(`<ol id="qs"><li id="${i}" value="${i+1}">${obj.question} ${obj.name}?</li></ol><img id="imgs" src="${obj.image}"><select class="box" id="answers${i}"></select><br>`);

            //global array, push 0 value each time on the loop

            $.each(this.options, function (index, value) {
                $("#answers"+i).append(`<option value="${value}">${value}</option>`);
            });
        });

        $(document).on("change","select" , function(i){
                
            console.log($(this).val());//compare to answer, and keep track of right or wrong in array

                var choosen = $(this).children("options:selected");

                var result = ($(area[i]).answer);//compare choosen with this
                //keep track of points or each//score first
                if (choosen == result){
                    score = 1;
                } else if(choosen!= result){
                    score = 0;
                } 
                //value are equal, then put one on the score arrray, or not put 0 (else) 
                
                //compare anser at the index
        });
    

        $("#submit").click(function(i){
                
            var total=[];

                for (i=1;i<total.length;i++){

                    total = score;
                };

                alert("you got "+ total + " out of 8!");
                    //loop through array for the points for score
                    //show the correct/wrong questions
                    //or display correct answers, try again button to reset 
        });
    });
});