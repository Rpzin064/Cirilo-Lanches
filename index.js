//var numero1= Number (prompt("coloque o primeiro numero"))
//var numero2= Number (prompt("coloque o segundo numero"))

//alert("o resultado da adiçao é "+ (numero1 + numero2))
//alert("o resultado da subtração é " + (numero1 - numero2))
//alert("o resultado da multiplicaçao é " + numero1 * numero2)
//alert("o resultado da divisao é " + numero1 / numero2)
//var numero= Number (prompt("digite o numero"))
//alert(" o dobro de " + (numero) + " é " + (numero * 2) + " o triplo é " + (numero * 3 ))

//var nome= prompt("qual seu nome?")
//var numero1= Number (prompt(" Qual a primeira nota de " + nome + "?" ))
//var numero2= Number (prompt("Ok. a primeira nota " + (numero1) + " Qual a segunda nota? " ))
//var media = ((numero1 + numero2) / 2)
//alert("A média final será " + media)
//if (media>= 6){
 //   alert("aluno " + nome + " aprovado")
//}
//else{
  //  alert("aluno " + nome + " reprovado")
//}
//var nota = Number (prompt("Qual a sua nota"))
//if( nota >= 60){
  //  alert(" aluno aprovado ")
//}
//else{
  //  alert(" aluno reprovado ")
//}
//var peso = Number ( prompt("qual seu peso? "))
//var altura = Number (prompt ("Qual sua altura? "))
//var IMC = peso / (altura * altura ) . toFixed(2)
//alert ( IMC )
//if (IMC < 16.9){
  //alert("muito abixo do peso")
//}
//if (IMC > 17 & IMC <= 18.4){
  //alert("abaixo do peso")
//}
//if (IMC > 18.5 & IMC <= 24.9 ){
  //alert("peso normal")
//}
//if (IMC > 25 & IMC <= 29.9 ){
  //alert("acima do peso")
//}
//if (IMC > 30 & IMC <= 34.9 ){
  //alert("obesidade grau 1")
//}
//if (IMC > 35 & IMC  <= 40 ){
  //alert("obesidade grau 2")
//}
//if (IMC > 40 ){
  //alert("obesidade grau 3")
//}
/*var ListaDeCursos = ["programação", "enfermagem", "estética", "administração", "informatica" ]
alert( ListaDeCursos[0] ) 
alert( ListaDeCursos[1] ) 
alert( ListaDeCursos[2] ) 
*/
/*var qtdenotas = Number (prompt("quantas notas serão avaliadas? "))
var acumuladornotas = 0;
for ( var i = 1; i<= qtdenotas; i++){
  var nota = prompt ("digite a nota " + i)
  acumuladornotas = acumuladornotas + Number(nota)
}
alert("a média sera " + ( acumuladornotas / Number(qtdenotas) ))
*/
/*var listadenomes = [ "Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "patrick" ]
var indice = prompt ("digite o indice do aluno que deseja buscar?")
alert(listadenomes [indice])
*/
/*var numero = Number (prompt("digite um numero"))
for( var i=0; i<=9; ++){
  alert(i + " x " + numero + " = " + (i * numero))
}*/
//ar listadejogos = ["FIFA", "Roblox", "Cs", "God of War"]
//var novojogo = prompt("digite um jogo para adcionar")
//listadejogos.push( novojogo)
//listadejogos.pop()//remove o ultimo elemento da lista
//listadejogos.shift()//remove o primeiro elemento da lista
//listadejogos.forEach(jogo=> alert("estou jogando " + jogo))
/*
var listadejogos = ["FIFA", "Roblox", "Cs", "God of War"]
var qtdejogosnovos = prompt("quantos jogos você quer adicionar?")
for(var i=0; i<qtdejogosnovos; i++){
var jogo = prompt("digite o nome do jogo")
listadejogos.push(jogo)
}
alert(listadejogos)
*/










/*var saldo = 40000
alert("Bem vindo ao sistema")
while(operaçao!=4){
  
var operaçao = prompt ("1-saldo\n2-extrato\n3-transferencia\n4-sair do sistema")

if(operaçao==1){
  alert("seu saldo dissponivel é de " + saldo)
}

else if(operaçao==2){
  alert("funcionalidade não disponivel")
}

if(operaçao==3){
  var transferencia = prompt ("quanto voce deseja transferir?")
  saldo = saldo-transferencia
  alert("seu saldo atual é " + saldo)
}
if(operaçao==4){
  alert("obrigado por usar nosso sistema")
}
}*/

/*alert("Bem vindo ao sistema")
while(operaçao!=7){

  var operaçao = prompt ("1-Nome do curso\n2-Alunos\n3-Carga horaria\n4-Uc\n5-Turno\n6-Materia\n7-Sair do sistema")
if(operaçao==1){
  alert("Logica de programação")
}
if(operaçao==2){
  alert("Maylon, Arthur, Ryan, Raphael, Maria, Gabriel, Macoly, Dalton, Patrick")
}
if(operaçao==3){
  alert("60 horas de carga horaria")
}
if(operaçao==4){
  alert("10 Ucs")
}
if(operaçao==5){
  alert("Noturno")
}
if(operaçao==6){
  alert("JavaScript")
}
if(operaçao==7){
  alert("Obrigado por usar nosso sistema")
}
}*/
/*function rotinaDiaria(){
  alert("Acordar")
  alert("Tomar banho")
  alert("Vestir roupa")
  alert("Tomar cafe")
  alert("Escovar os dentes")
  alert("Ir para a escola")
}
rotinaDiaria()*/
/*function somarNumeros(){
  var num1 = Number (prompt ("digite o primeiro numero"))
  var num2 = Number (prompt ("digite o segundo numero"))
  var num3 = Number (prompt ("digite o terceiro numero"))
  var resultado = num1 * num2 * num3
  alert(resultado)
}*/
//somarNumeros()
/*var nome = prompt("qual seu nome?")
function saudaçao(nome){
  alert("Seja bem vindo " + nome)
  alert("Digite a operaçao: \n1- Tal\n2- Tal")
}
saudaçao("Ryan")*/
/*function classificador(parametro){
  var numero = Number (prompt("digite um numero"))
  if (numero> 10)
    alert("Maior do que 10")
  else if(numero==10)
    alert("numero igual a 10")
  
  else
  alert("Menor do que 10")

}
classificador()*/
/*var cpf = "16532750654"
var cpfCadastro = cpf.substring(0,2) + "." + cpf.substring(2,5) + "." + cpf.substring(5,8) + "." + cpf.substring(8,10)
alert(cpfCadastro)*/


alert("Seja bem vindo ao Cirilo Lanches")
var precototal = 0;

while(operaçao!=3){
var operaçao= prompt("O que voçê deseja? \n1-Ver lanches disponiveis\n2-Carrinho\n3-Sair do sistema")
if(operaçao==1){
  var lanches=  prompt("Os lanches disponiveis são \n1-Coxinhas\n2-Pizzas\n3-Sanduiches\n4-Espetinhos\n5-Pasteis\n6-Empada\n7-Enroladinho de salsicha")
  if(lanches==1){
    alert("A coxinha esta no preço de R$7,00")
    var  preço= 7
    var quantidade= Number (prompt ("Quantas coxinhas?"))
    alert("Seu pedido fica no valor de " + preço * quantidade + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço * quantidade)
}
if(lanches==2){
  alert("A pizza esta no preço de R$8,00")
  var preço2= 8
  var quantidade2= Number (prompt("Quantas pizzas"))
  alert("Seu pedido fica no valor de " + preço2 *quantidade2 + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço2 * quantidade2)
}
if(lanches==3){
  alert("O sanduiche esta no  preço de R$7,00")
  var preço3= 7
  var quantidade3= Number (prompt("Quantos sanduiches"))
  alert("Seu pedido fica no valor de "+ preço3 * quantidade3 + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço3 * quantidade3)
  }
  if(lanches==4){
    alert("O espetinho esta no valor de R$7,00")
  var preço4= 7
    var quantidade4= Number(prompt("Quantos espetinhos"))
    alert("Seu pedido fica no valor de "+ preço4 * quantidade4 + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço4 * quantidade4)
  }
  if(lanches==5){
    alert("O pastel esta no valor de R$7,00")
    var preço5= 7
    var quantidade5= Number(prompt("Quantos pasteis"))
    alert("Seu pedido fica no valor de "+ preço5 * quantidade5 + " reais")
  alert("Seu pedido foi salvo no  carrinho")
  precototal = precototal + (preço5 * quantidade5)
  }
  if(lanches==6){
    alert("A empada esta no valor de R$7,00")
    var preço6= 7
    var quantidade6= Number(prompt("Quantas empadas"))
    alert("Seu pedido fica no valor de "+ preço6 * quantidade6 + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço6 * quantidade6)
  }
  if(lanches==7){
    alert("O enroladinho de salsicha esta no valor de R$7,00")
    var preço7= 7
    var quantidade7= Number(prompt("Quantos enroladinhos de salsicha"))
    alert("Seu pedido fica no valor de "+ preço7 * quantidade7 + " reais")
  alert("Seu pedido foi salvo no carrinho")
  precototal = precototal + (preço7 * quantidade7)
  }
}
if(operaçao==2){
alert("Seu pedido ficou no valor total de " + precototal + " reais")
alert("Seu pedido será preparado e enviado em alguns instantes")
alert("Muito obrigado por comprar em nosso estabelecimento")
}


if(operaçao==3){
  alert("Obrigado por usar o nosso sistema")
}
}

























