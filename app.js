
var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText = "asdadjkajdhanbd  " + txtInput.value;
    // console.log(outputDiv.innerText)

}

btnTranslate.addEventListener("click", clickHandler);
