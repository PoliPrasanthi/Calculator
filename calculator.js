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
    res.value = parseInt(res.value/10)
}