const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../Models/YearGroup.js');

describe('YearGroup', () => {
    let myYearGroup = new YearGroup(11,"CE");
    it('Should create a new year group', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup)
        expect(myYearGroup.year).to.equal(11)
        expect(myYearGroup.head).to.equal("CE")
    })
    it('Should return the year and head initials', () => {
        expect(myYearGroup.getYear()).to.equal(11)
        expect(myYearGroup.getHead()).to.equal("CE")
    })
})

