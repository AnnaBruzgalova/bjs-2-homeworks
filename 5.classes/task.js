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
        this.marks = [];
    }


    addMark(mark, subjectName) {
        if (mark > 5 || mark < 1) {
            return;
        }

        if (!this.marks[subjectName]) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }


    getAverageBySubject(subjectName) {
        if (!this.marks[subjectName]) {
            return 0;
        }
        return this.marks[subjectName].reduce((acc, mark) => acc + mark, 0) / this.marks[subjectName].length;
    }

    getAverage() {
        return Object.keys(this.marks).reduce(
            (acc, subjectName) => acc + this.getAverageBySubject(subjectName), 0) / Object.keys(this.marks).length;
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;

    }
}