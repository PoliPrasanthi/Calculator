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
    let str = res.value.toString();
    str = str.slice(0, -1);
    res.value = str;
}



