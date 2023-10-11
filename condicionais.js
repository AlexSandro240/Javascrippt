let semaforo = 'vermelho';
semaforo = 'amarelo';


let nome = 'Claudia';
let idade = 55;

// let idade = '17';

if(semaforo === 'verde'){
  console.log('Ande.');
} else if (semaforo === 'amarelo'){
  console.log('Atenção');
} else {
  console.log('Pare');
}

function verificaIdade(idade){
 let i = idade < 18 ? 'menor de idade' : 'maior de idade';
 return i;
}

console.log(verificaIdade(19));

function diferentes(){
 
   if(nome === 'Pedro' || idade === 55){
      return 'Se true, passa aqui'
    } else {
      return 'Senão vem pra cá';
    }
}

console.log(diferentes());

function frutaBoa(){
  let fruta = 'morango';
    switch(fruta){
      case 'uva':
      return 'Fruta uva';
      break;
      case 'banana':
      return 'Fruta banana';
      break
      case 'morango':
      return 'fruta morango';
      break;
    }
}

console.log(frutaBoa());