class Key {
  private signature: number = Math.random();
  public getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  private tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome to home. The door is open to you.");
    } else {
      console.log("The door is locked tight! Try again when it's open.");
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.door) {
      console.log(
        "The door is already open. You can step inside anytime!"
      );
    } else {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("*CLICK* The door swings open with a magical *whoosh*!");
      } else {
        console.log("Wrong key! The secrets of the house remain hidden.");
      }
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};