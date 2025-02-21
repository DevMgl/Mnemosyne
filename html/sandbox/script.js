console.log("Hello World");

var idade = 22;
var idade = "Vinte e dois"
console.log(idade);

let nome = "Miguel";
nome = "Eduardo"
nome = "Patrick"
console.log(nome);

const cargo = "Professor"
console.log(cargo); 

/* Exercicio 3 */
const nome_ = "Miguel"
let idade_ = 31;

let mensagem = `Meu nome e ${nome_}, tenho ${idade_} anos`;

console.log(mensagem);

/* Tipos primitivos */
/* Typeof significa o tipo de  */
console.log(typeof nome_);
console.log(typeof idade_);

let maiorDeIdade = true;
let temFilhos = false;

let tamanho
console.log(tamanho);

let vazio = null
console.log(vazio)

/* Exercico 3 - tipos primitivos */

let a = 10;
let b = "Miguel";
let c = "10";
let d = 20;

console.log("a +b", a + b);
console.log("a + c", a +c);
console.log("a + d", a + d);

let n1 = "42";
n1 = Number(n1);
console.log(n1);


/* Condicionais */
let idade__ = 18;

if (idade__ <18){

    console.log("Menor de idade.");
} else if (idade__ === 18){
  console.log("Acabou de atingir a maioridade");
}else{

   console.log("Maior de idade");
}
