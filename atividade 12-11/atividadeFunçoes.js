const prompt = require('prompt-sync')();
function BoasVindas(){
    console.log("Bem-vindo ao sistema escolar!");
}
BoasVindas();


function MostrarCurso(){
   nomeCurso = prompt("digite o nome do curso: ");
    console.log("Instituição: " + nomeCurso);
}
MostrarCurso();


function SaudarAluno(aluno){
    console.log("Olá, " + aluno + "! Bem-vindo ao sistema escolar.");
}
SaudarAluno("João");


function MostrarAluno(aluno, curso){
    aluno = prompt("Digite o nome do aluno: ");
    curso = prompt("Digite o nome do curso: ");
    console.log("Aluno: " + aluno );
    console.log("Curso: " + curso);
}
MostrarAluno();


function CalcularMedia(nota1, nota2){
     nota1 = Number(prompt("Digite a primeira nota: "));
     nota2 = Number(prompt("Digite a segunda nota: "));
    let media = (nota1 + nota2) / 2
    console.log("Média das notas: " + media);
}
CalcularMedia();


function PontoExtra(nota, pontoExtra){
    notaPonto = nota + pontoExtra;
    console.log("Nota com ponto extra: " + notaPonto);
    }
PontoExtra(8, 2);


function VerificarAprovacao(media){
    if (media >= 60) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado.");
    }
}
VerificarAprovacao(75);
VerificarAprovacao(50);

function ClassificarAlunos(nota){
    if (nota >= 90) {
        console.log("Aluno classificado como excelente!");
    } else if (nota >= 80) {
        console.log("Aluno classificado como bom!");
    } else if (nota >= 70){
        console.log("Aluno classificado como regular.");
    } else {
        console.log("Aluno classificado como insuficiente.");
    }
}
ClassificarAlunos(95);
ClassificarAlunos(85);
ClassificarAlunos(75);
ClassificarAlunos(60);

function CalcularMensalidade (valor){
    desconto = valor * 0.10;
    valorFinal = valor - desconto;
    return valorFinal;
}

let resultado = CalcularMensalidade(500);
console.log("Valor da mensalidade com desconto: " + resultado);

function AvaliarAluno(nome, nota1, nota2){
    let media = (nota1 + nota2) / 2;
    console.log("Aluno: " + nome);
    console.log("Média: " + media); 
    if (media >= 60) { 
        console.log("Situação: Aprovado");
    } else {
        console.log("Situação: Reprovado");
    }
}
 AvaliarAluno("Maria", 70, 80);