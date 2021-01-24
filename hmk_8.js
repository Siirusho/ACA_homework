class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }
    get info() {
        return `ID: ${this.id}, First name: ${this.firstName}, Last name: ${this.lastName}, Salary: ${this.salary}, Working hours: ${ this.workingHours }`
    }
    set info({ id, firstName, lastName, position, salary, workingHours }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }
    get fullName() {
        return `First name: ${this.firstName}, Last name: ${this.lastName}`
    } 
    getAnnularSalary() {
        return `Total salary of employee within a year is ${this.salary*12}`
    }
    raiseSalary(percent = 0) {
        if (typeof percent === 'number') {
            return `Raised Salary: ${this.salary + percent}`
        }
        return 'Invalid value'
    }
}


class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    get info() {
        return `Id: ${this.id}, Name: ${this.name}, Balance: ${this.balance}`;
    }
    set info({ name, balance }) {
        this.name = name;
        this.balance = balance;
    }
    credit(amount=0) {
        return `Added balance ${this.balance + amount}`;
    }
    debit(amount) {
        if (typeof amount === 'number') {
            if (this.balance < amount) {
                return 'Amount exceeded balance.'
            }
            this.balance -= amount
            return `You have substracted ${amount}$, there is ${this.balance}$ on your account.`
        } 
        return 'Invalid value'
    }
    transferTo(anotherAccount=0, amount=0) {
        if (typeof amount === 'number') {
            if (this.balance < amount) {
                return 'Amount exceeded balance.'
            }
            anotherAccount += amount;
            this.balance -= amount;
            return `You have forward ${amount}$, there is ${this.balance}$ on your account.`;
        }
    }
    static identifyAccounts(accountFirst , accountSecond) {
        if (accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance ) {
            return "Accounts are same"
        }
        return 'Accounts are different'
    }
    toString() {
        return `${this.id}, ${this.name}, ${this.balance}`
    }
}

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get info() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
    }
    set info({ firstName, lastName, gender, age }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    toString() {
        return `${this.firstName}, ${this.LastName}, ${this.gender}, ${this.age} `
    }
}
class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age)
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    static exam1Date = new Date();
    static exam2Date = new Date();
    get info() {
        return `ProgramName: ${this.programName}, Grade: ${this.grade}, Year: ${this.year}, Fee: ${this.fee}`
    }
    set info({ programName, grade, year, fee }) {
        this.programName = programName;
        this.grade = grade;
        this.year = year;
        this.fee = fee;
    }
    passExam(programName, grade) {
        let exam = this.program.find(obj => {
            return obj.name === programName
        })
        exam.grade = grade
        let allExamsPassed = this.program.every(function (elem) {
            return elem.grade >= 50
        })
        if (allExamsPassed) {
            this.year++
        }
    }
    toString() {
        return `${this.programName}, ${this.grade}, ${this.year}, ${this.fee} `
    }
}
class ProgramItem {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
