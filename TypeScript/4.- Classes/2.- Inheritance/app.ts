class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string) { this.name = name; }
    setAge(age: number) { this.age = age; }
    printPersonInfo() {
        console.log(`The person name is ${this.name} and has ${this.age} years.`)
    }
}

// Class David has all the content that is in Person class plus whatever we define/override in it.
class David extends Person {
    constructor(age: number) {
        super("David", age);
    }
}

// The content in the main class will always override the content in the super class.
const david: David = new David(24);
david.printPersonInfo()