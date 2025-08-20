const nome = "Lígia";
const sobrenome = "Kaylanne";
const idade = 20;
const peso = 65;
const altura = 1.80;

const imc = peso / (altura * altura);
const anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
