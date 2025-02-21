// Para usar o prompt no nodejs é preciso istalar essa lib 'prompt-sync'

let prompt = require("prompt-sync"); //chamando a biblioteca recém-instalada
prompt = prompt();

const n1 = prompt("Digite um número: ");
console.log(n1);

let n2 = parseFloat(prompt("Digite outro número: "));
