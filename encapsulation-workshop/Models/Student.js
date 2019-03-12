class Student {
    constructor(name, form, year)  {
        this.name = name
        this.form = form
        this.year = year
    }
getStudentName() {
    return this.name
}
getStudentForm () {
    return this.form
}
getStudentYear () {
    return this.year;
}

} 


module.exports = Student