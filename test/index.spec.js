const chai = require('chai');
const expect = chai.expect;
const cardNumber = require('../index');

describe('Card', function () {
    describe('cardValidator', function () {
        describe('Quando não houver parametro', function () {
            it('deve lançar um erro', function () {
                var badFn = function () { cardNumber.cardValidator(); };
                expect(badFn).to.throw(Error);
            });
        });
        describe('Quando o numero for uma string', function () {
            it('deve lançar um erro', function () {
                var badFn = function () { cardNumber.cardValidator('essa string'); };
                expect(badFn).to.throw(Error);
            });
        });
        describe('Quando houver menos de 10 digitos', function () {
            it('deve lançar um erro', function () {
                var badFn = function () { cardNumber.cardValidator(1234); };
                expect(badFn).to.throw(Error);
            });
        });
        describe('Quando o numero for valido', function () {
            it('retornar true', function () {
                expect(cardNumber.cardValidator(4411201432235942)).to.be.true;
            });
        });
        describe('Quando o numero for invalido', function () {
            it('retornar false', function () {
                expect(cardNumber.cardValidator(111111111111111)).to.be.false;
            });
        });
    });
});
