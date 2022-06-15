function calcular(num){
    var number = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = number + num
}
function clean(){
    document.getElementById('res').innerHTML = ''
}
function back(){
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}
function calculo(){
    var resultado = document.getElementById('res').innerHTML
    if(resultado){ 
        document.getElementById('res').innerHTML = eval(resultado)
    }
}