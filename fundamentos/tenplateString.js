const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

// function up(texto) { return texto.toUpperCase() }

// const up = function (texto) { texto.toUpperCase() }

const up = texto => texto.toUpperCase();

// const up = (texto, b) => texto.toUpperCase()

/*const up = (texto) => {
  texto.toUpperCase();
  texto.toUpperCase();
} */

console.log(`Ei...${up("cuidado")}!`);
