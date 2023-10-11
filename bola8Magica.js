let nome = ''; //O valor padrão é falsy, pois não passei qualquer nome. 
nome ? console.log(`Hello ${nome}`) : console.log("Hello!"); //Aqui o nome será impresso caso verdadeiro. Por padrão, será impresso "Hello!"

let userQuestion = 'Pode me ajudar?';
let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = "";
console.log(userQuestion);



function resposta() { 
  switch (randomNumber) {
    case 1:
      console.log("Certamente.");
      break;
    case 2:
      console.log("Talvez não seja um bom dia para que eu te ajude.");
      break;
    case 3:
      console.log("Negativo, meu sistema foi programado apenas pra te ignorar.");
      break;
    case 4:
      console.log("Você de novo? Ok, o que quer?");
      break;
    case 5:
      console.log("Ainda estou limitado a algumas perguntas. Portanto, aguarde o desenvolvedor melhor isso.");
      break;
    case 6:
      console.log("Sim, posso. Porém, nem tanto.");
      break;
    case 7:
      console.log("Você é uma pessoa perfeita, não precisa da minha ajuda.");
      break;
    case 8:
      console.log("Definitivamente não!");
      break;
    default:
        console.log("Temos um problema aqui. Você realmente me fez uma pergunta?");
        break;
  }
}

resposta();
