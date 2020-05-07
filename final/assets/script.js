let area = []; //creates an array that stores the data
const datafile = "poke.json";
let score = [];//creates an array that store scores

$(function() { //readies
    $.getJSON(datafile, function(data) {
    //parameter holds the data that function is getting back from local json file
    area = data.poke;
    //store data in array

        $.each(area, function( i, obj ) {
        //looping through the question, name and image arrays, while appending it on the question id as an ordered list
            $("#questions").append(`<ol id="qs"><li id="${i}" value="${i+1}">${obj.question} ${obj.name}?</li></ol><img id="imgs" src="${obj.image}"><select class="box" id="answers${i}"></select><br>`);
            //global array, push 0 value each time on the loop
            $.each(this.options, function (index, value) {
                //looping through the options and append it on <select> called answers
                $("#answers"+i).append(`<option value="${value}">${value}</option>`);
            });
        });

        $(document).on("change","select" , function(i){
            //ready a change and select even that applies to the whole document
            console.log($(this).val());
            //shows the value that is selected
            // console.log($(this).attr("id"));
            let id = $(this).attr("id")[$(this).attr("id").length-1];
            //set the id number to separate from string number
            //console.log(id);


            var choosen = $(this).children("options:selected");
            //creating a variable of choosen (when the options are selected)
            var result = (area[id].answer);
            //creating a variable that takes answer from array
            //console.log(result);
            //console.log(score);
                //conditionals for score system
                    if (choosen === result){
                        score = [1];
                    }else if(choosen != result){
                        score = [0];
                    }
        });
    

        $("#submit").click(function(){
            //shows total score on submit
                alert("you got " + score + " out of 8!");
                    //loop through array for the points for score
        });
    });
});
