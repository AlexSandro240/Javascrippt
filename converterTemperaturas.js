
// let celsius = 20;
let kelvin = 273.15;


let kelvinParaCelsius = () => 293.15 - kelvin; //função converte kelvin para celsius

console.log(kelvinParaCelsius() + ' ºC');

let converteFahrenheit = () => (kelvinParaCelsius() * 9/5) + 32; //pego o valor da função kelvinParaCelsius() para converter celsius em fahrenheit

console.log(converteFahrenheit() + ' ºF');

let converteParaNewton = () => kelvinParaCelsius() * (33/100); //Aqui peguei o valor da função kelvinParaCelsius() para converter celsius em Newton

console.log(converteParaNewton() + ' ºN'); //Convertir celsius para Newton. Havia usado Math.Floor para converter em Inteiro, mas optei por não usar. 