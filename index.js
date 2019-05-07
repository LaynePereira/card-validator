function cardValidator(cardNumber) {
  if (!cardNumber) { // caso o parametro esteja vazio retorna erro
    throw new Error('Não tem nada no parametro');
  }
  if (typeof cardNumber === 'string') { // se for string retorna erro
    throw new Error('Esse tem uma string');
  }
  if (cardNumber.toString().length < 10) { // vai retornar uma string num array e se for menor q 10 retorna erro
    throw new Error('Quantidade de numeros menor que o esperado');
  } else {
    let sum = 0;
    let cardTest = String(cardNumber).split('').reverse(); // vai pegar os numeros tranformar em string, divide a string em array e 
    cardTest.forEach(function(elem, index) { // separa depois inverte os itens 
      elem = parseInt(elem); // vai pegar o array e passar a função por cada elemento dentro do array
      sum += ((index % 2 === 0) ? elem : (elem < 5) ? elem * 2 : (elem - 5) * 2 + 1); // vai passar por todo o elemento
    }); // vai somar o indice (0) modulo 2 que é = 0 
    return (sum % 10 === 0);// e se o elemnto for menor que 5 multiplica por 2 e se for maior subtrai 5 e multiplica por 2 e soma 1
  }
}
module.exports.cardValidator = cardValidator;
console.log(cardValidator(4411201432235942));