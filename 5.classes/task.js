//Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }
    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let reqBook = this.findBookBy('name', bookName);
        let indexOfBook = this.books.indexOf(reqBook);
        if (indexOfBook === -1) return null;
        return this.books.splice(indexOfBook, 1)[0];
    }
}

//Задача 3
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }


    addMark(mark, subjectName) {
        if (this.marksAlgebra === undefined && subjectName === "algebra") {
            this.marksAlgebra = [mark];
        };
        if (1 >= mark <= 5 && subjectName === "algebra") {
            this.marksAlgebra.push(mark);
        } else if (this.marksGeometry === undefined && subjectName === "geometry") {
            this.marksGeometry = [mark];
        };
        if (1 >= mark <= 5 && subjectName === "geometry") {
            this.Geometry.push(mark);
        }
    }
    addMarks(subjectName, ...arr) {
        if (this.marksAlgebra === undefined && subjectName === "algebra") {
            this.marksAlgebra = arr;
        } else {
            this.marksAlgebra.push(...arr);
        };
        if (this.marksGeometry === undefined && subjectName === "geometry") {
            this.marksGeometry = arr;
        } else {
            this.marksAlgebra.push(...arr);
        }
    }

    getAverageBySubject() {
        if (this.marksAlgebra.length === 0) {
            return 0;
        } else {
            let sumAlgebra = 0;
            let countAlgebra = 0;
            for (let i = 0; i < this.marksAlgebra.length; i++) {
                countAlgebra += 1;
                sumAlgebra += this.marksAlgebra[i];
            }
            return sumAlgebra / countAlgebra;
        };

        if (this.marksGeometry.length === 0) {
            return 0;
        } else {
            let sumGeometry = 0;
            let countGeometry = 0;
            for (let i = 0; i < this.marksGeometry.length; i++) {
                countGeometry += 1;
                sumGeometry += this.marksGeometry[i];
            }
            return sumGeometry / countGeometry;
        }
    }
    getAverag() {
        this.all = [...this.marksAlgebra, ...this.marksGeometry];
        if (this.all.length === 0) {
            return 0;
        } else {
            let sum = 0;
            let count = 0;
            for (let i = 0; i < this.marks.length; i++) {
                count += 1;
                sum += this.all[i];
            }
            return sum / count;
        }
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;

    }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");