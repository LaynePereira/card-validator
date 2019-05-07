function cardValidator(cardNumber) {
  if (!cardNumber) {
    throw new Error('Não tem nada no parametro');
  }
  if (typeof cardNumber === 'string') {
    throw new Error('Esse tem uma string');
  }
  if (cardNumber.toString().length < 10) {
    throw new Error('Quantidade de numeros menor que o esperado');
  } else {
    let sum = 0;
    let cardTest = String(cardNumber).split('').reverse();
    cardTest.forEach(function(elem, index) {
      elem = parseInt(elem);
      sum += ((index % 2 === 0) ? elem : (elem < 5) ? elem * 2 : (elem - 5) * 2 + 1);
    });
    return (sum % 10 === 0);
  }
}
module.exports.cardValidator = cardValidator;
// console.log(cardValidator(4411201432235942));