var addcolor = document.querySelector(".container1 .col")
var addText = document.querySelector(".container1  .tex")
var changp = document.querySelector(".container1 .contant")

function chang (){

    changp.style.backgroundColor =addcolor.value;
    changp.innerHTML=addText.value

}
var num1 = document.querySelector(".container2 .num1")
var num2 = document.querySelector(".container2 .num2")
var printresult = document.querySelector(".container2 .result")
function add (){
    printresult.innerHTML=("result is: ")+Number (Number(num1.value)+Number(num2.value))

}
function sub (){
    printresult.innerHTML=("result is: ")+Number (Number(num1.value)-Number(num2.value))

}
function mult (){
    printresult.innerHTML=("result is: ")+Number (Number(num1.value)*Number(num2.value))
}

function divi (){
    printresult.innerHTML=("result is: ")+Number (Number(num1.value)/Number(num2.value))
}