var cookieRemove = document.getElementById("cookie");

function Loading(){
    alert("Loading weather report..."); 
}

function Remove(){
    cookieRemove.remove();
}

function c2f(temp){
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp){
    return Math.round(5 / 9 * (temp - 32));
}

function selectTemp(element){
    console.log(element.value)
    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector("#tempe" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "Cº"){
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
        /* console.log(c2f(tempVal)); */
    }


}



