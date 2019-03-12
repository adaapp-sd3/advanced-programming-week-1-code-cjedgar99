const chai = require('chai')
const expect = chai.expect;

const Student = require('../Models/Student.js');

describe('Student', () => {
    let myStudent = new Student("Cameron Edgar", 'Newman', 11);
    it('Should create a new name group', () => {
        expect(myStudent).to.be.an.instanceOf(Student)
        expect(myStudent.name).to.equal("Cameron Edgar")
        expect(myStudent.form).to.equal('Newman')
        expect(myStudent.year).to.equal(11)
    })
    it('Should return the name and an form', () => {
        expect(myStudent.getStudentName()).to.equal("Cameron Edgar")
        expect(myStudent.getStudentForm()).to.equal('Newman')
        expect(myStudent.getStudentYear()).to.equal(11)
    })
})

