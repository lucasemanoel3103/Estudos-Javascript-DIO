const nota1 = 10;
const nota2 = 5;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log('Reprovação');
}else if (media >=5 && media <=7){
    console.log('Recuperação');
}else{
    console.log('Passou de Semestre');
}
