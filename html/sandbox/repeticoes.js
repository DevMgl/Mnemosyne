//For
function exercicioRep01 (){
    for (let contador  = 1 ; contador <= 10; contador++ ){
        console.log(contador)
    } 
}  

let divDeLogs = document.querySelector(".logs") //Busca um elemento na tela

let paragrafo = document.createElement("p");

paragrafo.innerHTML = "Exercicio 01 de repeticao executado.";

divDeLogs.appendChild(paragrafo);

/* //While
let contador =1;
while(contador <= 1000){

    console.log("Contagem: ", contador);

    contador++
} */

/*  //Exercio While
let num = prompt ("Digite um número");
let soma = 0
for (let contador = 1 ; contador <= num; contador++){
   soma = soma + contador
} 
console.log(soma)  */

/* //Exercicio 2
let num = prompt ("Insira um número: ");

for (let contador = 1; contador <= 10; contador++ ){
    
    let valorCalculado = num * contador;

    let mensagem = `${num} x ${contador} = ${valorCalculado}`

    console.log(mensagem);
} */
//Exercicio jogo de adivinhacao

// EXERCICIO 2
/* let numeroAleatorio = Math.floor(Math.random() * 100);

let chute = null;

while (chute != numeroAleatorio) {

    chute = parseInt(prompt("Chute um número:"));

    if (chute != numeroAleatorio) {

        if (chute > numeroAleatorio) {
    
            alert("Chutou alto.");
    
        } else {
    
            alert("Chutou baixo.");
    
        }

    }

}

alert("Você acertou!"); */

//Exercico Contagem Regressiva
function exercicioContagemRegressiva(){
  
    let numero = prompt ("Digite um numero: ");

while (numero >= 0) {
    console.log(numero);
    numero--;
  } 
}


