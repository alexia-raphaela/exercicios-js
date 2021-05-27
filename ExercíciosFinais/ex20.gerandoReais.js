function sacarDinheiro(saque) {
  let notasDeUm = 0;
  let notasDeCinco = 0; // Criando contadores
  let notasDeDez = 0;
  let notasDeCinq = 0;
  let notasDeCem = 0;

  const cedulas = [100, 50, 10, 5, 1];

  let cedula = calcularNota(saque, cedulas);

  while (saque >= cedula) { 
    switch (cedula) { // A função switch case que incrementa os contadores 
      case 100:
        saque = saque - cedula; 
        notasDeCem++;
        break;

      case 50:
        saque = saque - cedula;
        notasDeCinq++;
        break;

      case 10:
        saque = saque - cedula; 
        notasDeDez++;
        break;

      case 5:
        saque = saque - cedula;
        notasDeCinco++;
        break;

      case 1:
        saque = saque - cedula;
        notasDeUm++;
        break;
    }
    cedula = calcularNota(saque, cedulas); // isso vai calcular a quantidade de notas
  }
  return mostrarSaque(
    notasDeCem,
    notasDeCinq,
    notasDeDez,
    notasDeCinco,
    notasDeUm
  );
}

function mostrarSaque(
  _notasDeCem,
  _notasDeCinq,
  _notasDeDez,
  _notasDeCinco,
  _notasDeUm
) {
  // foi criado uma variavel para guardar e somar cada return dos contadores nota
  let resultado = ''
  if (_notasDeCem > 0) resultado +=`${_notasDeCem} nota(s) de R$100,00. `;
  if (_notasDeCinq > 0) resultado +=`${_notasDeCinq} notas(s) de R$50,00. `;
  if (_notasDeDez > 0) resultado +=`${_notasDeDez} notas(s) de R$10,00. `;
  if (_notasDeCinco > 0) resultado +=`${_notasDeCinco} nota(s) de R$5,00. `;
  if (_notasDeUm > 0) resultado +=`${_notasDeUm} nota(s) de R$1,00. `;

  return resultado
}

function calcularNota(saque, cedulas) {
  for (let _cedula of cedulas) { // o For está pegando cedula, ou seja, cada elemento do meu array cedulas
    if (_cedula <= saque) {
      return _cedula;
    }
  }
}

console.log(sacarDinheiro(12));
