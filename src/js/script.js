// declarações de variaveis

var nome = "fiap";
console.log(nome);

let idade =19;
console.log(idade)

const sobrenome="fiapinho"
console.log(sobrenome);


// declarando uma variavel indefinida
let nome1;
console.log(nome1)

// declarando uma variavel nula
let nome2=null;
console.log(nome2)

// tipos de variaveis
let exemplo1 =10;
console.log(typeof exemplo1)

let exemplo2 ="tecnologia";
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3);

let exemplo4={};
console.log(typeof exemplo4)

let exemplo5 =["aluno1","aluno2"];
console.log(typeof exemplo5)

// conversões

let numfloat =123.456;
console.log(parseInt(numfloat));

let numString ="123.456";
console.log(parseFloat(numString));


// metodos
// lenght = verifica o tamanho da string
let frase ="O mundo da tecnologia";
console.log(frase.length);

// indexOf -retorna um trecho do texto

let texto="A programação indomável e sustentavel";
console.log(texto.indexOf(""))

// slice -retorna um trecho do texto com inicio e final

let info ="Processamento de ponta";
console.log(info.slice(1,25))


//operadores aritiméticos
const num1=10;
const num2=20;
console.log(num1 + num2); 
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// operadores lógicps

const num3=10;
const num4=20;
console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3)
console.log(num3 < num4 || num4 < num3)

// operadores de comparação

console.log(nu3 == num4);
console.log(num3 === num4);