


const wordArray = ["cold", "november", "weather", "wind", "granite", "rain", "two", "afternoon", "hills", "mist"];




function randomNumber() {
    var num = Math.floor((Math.random() * 2) + 1);

    var intro = document.getElementById("intro");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var inputSection = document.getElementById("inputSection");
    var conclusion = document.getElementById("conclusion");
    var wordArrayLength = wordArray.length;

    
  

    intro.style.display = "none";
    if (num == 1) {
        option1.style.display = "block";
        
        setTimeout(function() {
            option1.style.display = "none";
            }, 29999);

        setTimeout(getUserInput, 29999)
            
    } else {
        option2.style.display = "block";

        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[0].toUpperCase();
            },2000);

        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[1].toUpperCase();
            },4000);
                
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[2].toUpperCase();
            },6000);
            
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[3].toUpperCase();
            },8000); 
            
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[4].toUpperCase();
            },10000);

        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[5].toUpperCase();
            },12000);
    
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[6].toUpperCase();
            },14000);
                    
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[7].toUpperCase();
            },16000);
                
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[8].toUpperCase();
            },18000); 
                
        setTimeout(function(){
            document.getElementById('option2Text').innerHTML = wordArray[9].toUpperCase();
            },20000);


        setTimeout(function() {
            option2.style.display = "none";
            }, 20000);

        setTimeout(getUserInput, 20000);
    
    
    }


}

function getUserInput() {
    var inputSection = document.getElementById("inputSection");
    inputSection.style.display = "block";
}





function mark() {
    var inputArray = [];
    var checkedArray = [];
    var score = 0;
    var input1 = document.getElementById("input1").value;
    inputArray.push(input1.toLowerCase());
    var input2 = document.getElementById("input2").value;
    inputArray.push(input2.toLowerCase());
    var input3 = document.getElementById("input3").value;
    inputArray.push(input3.toLowerCase());
    var input4 = document.getElementById("input4").value;
    inputArray.push(input4.toLowerCase());
    var input5 = document.getElementById("input5").value;
    inputArray.push(input5.toLowerCase());
    var input6 = document.getElementById("input6").value;
    inputArray.push(input6.toLowerCase());
    var input7 = document.getElementById("input7").value;
    inputArray.push(input7.toLowerCase());
    var input8 = document.getElementById("input8").value;
    inputArray.push(input8.toLowerCase());
    var input9 = document.getElementById("input9").value;
    inputArray.push(input9.toLowerCase());
    var input10 = document.getElementById("input10").value;
    inputArray.push(input10.toLowerCase());
    inputArrayLength = inputArray.length
    for (i = 0; i < inputArrayLength; i++){
        if (wordArray.includes(inputArray[i].toLowerCase()) && !checkedArray.includes(inputArray[i].toLowerCase())){
            score++
        }
        checkedArray.push(inputArray[i])
    }
    inputSection.style.display = "none";
    conclusion.style.display = "block";
    console.log(score);
    document.getElementById("score").innerHTML += score + "10";
    return score;
    
    }

function displayWords(word) {
    return console.log(word);
}


function getInputVal(id){
    return document.getElementById(id).value;

}
