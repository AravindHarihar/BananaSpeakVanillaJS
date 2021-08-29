
var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/mandalorian.json";


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


function errorHandler(error){
    console.log("Error Occurred" + error);
    alert("Uh oh! try again later")
}

function clickHandler(){
    //outputDiv.innerText = "asdadjkajdhanbd  " + txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText)).then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        //console.log(json.contents.translated)
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);
