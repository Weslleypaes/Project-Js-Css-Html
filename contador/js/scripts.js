var btnMais = document.getElementById('mais');
var btnMenos = document.getElementById('menos');
currentNumberWrapper = document.getElementById('currentNumber');
currentNumber = 0

btnMais.onclick = function (){
currentNumber = currentNumber+1;
currentNumberWrapper.innerHTML = currentNumber;
if(currentNumber >= 0){
    currentNumberWrapper.style.color = 'black';
}

};
btnMenos.onclick = function (){
    currentNumber = currentNumber-1;
    currentNumberWrapper.innerHTML = currentNumber;
if(currentNumber < 0){
    currentNumberWrapper.style.color = 'red';
}
};
