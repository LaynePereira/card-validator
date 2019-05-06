const cardValidator = (card) => {
    card = card.split("").map(Number);
    return digitsValidation(card, 9, 10) === card[9] && digitsValidation(card, 10, 11) === card[10] ? true : false;
};

const digitsValidation = (card, index, mult) => {
    card = card.slice(0, index);
    const result = card.reduce((acum, curr) => {
        return acum + (curr * (mult--));
    }, 0);
    return (result * 10) % 11;
};

module.exports.cardValidator = cardValidator;









// module.exports.cardValidator = 
// function cardValidator(card) {
//     if (card === "") {
//         throw new Error("Parameter not defined");
//     }
//     if (typeof card === "string") {
//         throw new Error("Enter numbers only");
//     }

//     let numCard = card.toString();
//     let arrayCard = numCard.split("");
//     let numberCard = [];
//     for (i of arrayCard) {
//         numberCard.push(parseInt(i));
//     }

//     numberCard.reverse();

//     let luhn = numberCard.reduce(function (acumulador, valorAtual, indice) {
//         if (indice % 2 !== 0) {
//             var product = valorAtual * 2;
//             if (product > 9) {
//                 var product2 = product - 9;
//                 valorAtual = product2;
//             } else {
//                 valorAtual = product;
//             }
//         }
//         return acumulador + valorAtual;
//     }, 0);

//     let result = luhn % 10 === 0;
//     return result;
// };