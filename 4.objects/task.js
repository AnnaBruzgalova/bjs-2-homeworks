function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let studennt1 = new Student("Катя", "female", 20);
let studennt2 = new Student("Маша", "female", 18);
let studennt3 = new Student("Виктор", "male", 30);

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}
Student.prototype.addMarks = function(...arr) {
    if (this.marks === undefined) {
        this.marks = arr;
    } else {
        this.marks.push(...arr);
    }

}
Student.prototype.getAverage = function() {
    if (this.marks.length === 0) {
        return 0;
    } else {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < this.marks.length; i++) {
            count += 1;
            sum += this.marks[i];
        }
        return sum / count;
    }
}
Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}