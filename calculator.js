let res = document.getElementById("result")
function numb(a) {
    res.value += a
}

function cal(){
    res.value = eval(res.value)
}

function clear1(){
    res.value = ""
}

function del1(){
    // make sure value is a string
    let str = res.value.toString();

    // remove last character
    str = str.slice(0, -1);

    // update result box
    res.value = str;
}


