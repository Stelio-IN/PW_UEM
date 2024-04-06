/*
alert("Bem vindo");

function somar() {
  let num_1 = parseFloat(prompt("Digite o primeiro numero:"));
  let num_2 = parseFloat(prompt("Digite o Segundo numero:"));
  let soma = num_1 + num_2;

  alert(`${num_1}+${num_1}= ${soma}`);
}
somar();

function media() {
  let num_1 = parseFloat(prompt("Digite o primeiro numero:"));
  let num_2 = parseFloat(prompt("Digite o Segundo numero:"));
  let num_3 = parseFloat(prompt("Digite o Segundo numero:"));
  let media = (num_1 + num_2 + num_2) / 3;

  alert(` A media de ${num_1},${num_2} ,${num_3}= ${media}`);
}
media();

function converter() {
  var celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
  var fahrenheit = (celsius * 9) / 5 + 32;
  alert("A temperatura em Fahrenheit é: " + fahrenheit);
}
converter();

function par_impar(){
    let num = Number(prompt('Digite o numero a verificar: '))
    if(num%2 == 0){
        alert(`O numero ${num} é par`)
    }else{
        alert(`O numero ${num} é impar`)
    }
}
par_impar()


function frutas() {
  const nomeFrutas = ["Maçã", "Banana", "Laranja", "Morango", "Manga"];
  alert("Lista de fruta: " + nomeFrutas.join("\n"));
}
frutas()

function alterarCor(){
    let el = document.getElementById("elemento")
    el.style.backgroundColor = 'red';
}

function mostrar() {
  document.getElementById("elemento").style.display = "block";
}
function ocultar() {
  document.getElementById("elemento").style.display = "none";
}
*/
let musica = new Audio("audio.mp3");
let tocando = true;

function emitirSom() {
  if (!tocando) {
    musica.play();
    tocando = true;
  } else {
    musica.pause();
    tocando = false;
  }
}
emitirSom();

function redirecionar() {
    window.location.href = 'teste.html';
}
