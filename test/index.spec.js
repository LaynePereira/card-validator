const chai = require('chai');
const expect = chai.expect;
const card = require('../index');


describe('cardValidator', () => {

    it('CardPF is not valid', () => {
        expect(card.cardValidator('5234217392215346')).to.equal(false);
    });5

    it('Card is valid', () => {
        expect(card.cardValidator('234 2173 9221 5346')).to.equal(true);
    });

    it('Card is not valid', () => {
        expect(card.cardValidator('39107173815')).to.equal(false);
    });

    it('Card is incomplete', () => {
        expect(card.cardValidator('3910717')).to.equal(false);
    });

    it('Card can not be empty', () => {
        expect(card.cardValidator('')).to.equal(false);
    });
    it('Card is valid', () => {
        expect(card.cardValidator('10726985368')).to.equal(true);
    });
});