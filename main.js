var display = document.getElementById("display");
var ans = document.getElementById("ans");

function appendToDisplay(input){
    display.value += input;
}

C.onclick = function(){
    display.value = "";
}

equ.onclick = function(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}

function clear(){
    display.value = "";
}