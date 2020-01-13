
// for private class property
const __member = Symbol();      // Person[__member]
const __getArray = Symbol();    // Person[__getArray]()
// for private instance property
const __age = Symbol();         // this[__age]
const __makeMsg = Symbol();     // [__makeMsg]()

export default class Person {

    // public class property
    public static [__member]: Set<Person> = new Set<Person>();
    // public instance property
    public name: string = "";

    public constructor(_name: string, _age: number) {
        this.name = _name;
        this[__age] = _age;

        Person[__member].add(this);
    }

    // public class method -----------------------

    public static getList(): Array<Person> {
        return Person[__getArray]();
    }

    public static remove(_person: Person) {
        Person[__member].delete(_person);
    }

    // private class method -----------------------

    public static [__getArray](): Array<Person> {
        return Array.from(Person[__member]);
    }

    // public instance method ---------------------

    // read only getter
    public get age(): number {
        return this[__age];
    }

    public sayGreet(): string {
        return this[__makeMsg]();
    }

    public toString(): string {
        return this.name;
    }

    // private instance method -------------------

    private [__makeMsg](): string {
        return `Hello, My name is ${this.name}.`;
    }
}
