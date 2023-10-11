function sortear() {
    let res = '';
    let number = document.getElementById('numero').value;
    if(number === '' || number > 1000){ //aqui faço uma verificação caso o usuario não digite nada ou um numero maior que 1000
        res += document.getElementById('res').innerHTML = 'Digite um numero até 1000'
    } else {
        let randomNumber = Math.floor(Math.random() * number); //aqui gera um numero aleatorio até 1000
        res = randomNumber;
    }
   
   
    document.getElementById('res').innerHTML = res; 
}  //função para sortear numero 

let apagar = () => {
    let res = '';
    document.getElementById('res').innerHTML = res; 
} //função que apaga os dados impressos 

function validarNumero(input){
 
   
    input.value = input.value.replace(/[^0-9]/g, ''); 
} // função que faz com que o input text só receba numeros

var inputElement = document.getElementById('numero');

validarNumero(inputElement);