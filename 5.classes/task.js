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
        this.subject = subjectName;
        if (this.marks === undefined) {
            this.marks = [mark];
        };
        if (1 >= mark <= 5) {
            this.marks.push(mark);
        }
    }
    addMarks(subjectName, ...arr) {
        this.subject = subjectName;
        if (this.marks === undefined) {
            this.marks = arr;
        } else {
            this.marks.push(...arr);
        }
    }
    getAverag() {
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

    getAverageBySubject(subjectName) {
        this.subject = subjectName;
        if (this.marks.length === 0) {
            return 0;
        } else {
            let sumSubject = 0;
            let countSubject = 0;
            for (let i = 0; i < this.marks.length; i++) {
                countSubject += 1;
                sumSubject += this.marks[i];
            }
            return sumSubject / countSubject;
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